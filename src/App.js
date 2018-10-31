import React from 'react';
import './App.css';

import { Paginacao } from './components/Paginacao';
import { DeputadoList } from './components/Deputados';

import * as api from './api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      links: [],
      deputados: [],
    };
  }

  componentDidMount = () => {
    this.request();
  };

  request = (url) => {
    api.getDeputados(url).then((data) => {
      this.setState({
        links: data.links,
        deputados: data.dados,
      });
    });
  };

  render = () => {
    const { deputados, links } = this.state;
    return (
      <div className="App">
        <h1>Hello React</h1>

        <Paginacao links={links} request={this.request} />
        <DeputadoList deputados={deputados} />
      </div>
    );
  };
}

export default App;
