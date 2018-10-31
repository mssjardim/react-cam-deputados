import React from 'react';

export class Paginacao extends React.Component {
  constructor() {
    super();

    this.handlerFirst = this.handlerFirst.bind(this);
    this.handlerPrevious = this.handlerPrevious.bind(this);
    this.handlerNext = this.handlerNext.bind(this);
    this.handlerLast = this.handlerLast.bind(this);
  }

  render = () => (
    <div>
      <button type="button" onClick={this.handlerFirst}>
        Primeira
      </button>
      <button type="button" onClick={this.handlerPrevious}>
        &lsaquo;
      </button>
      <button type="button" onClick={this.handlerNext}>
        &rsaquo;
      </button>
      <button type="button" onClick={this.handlerLast}>
        Ultima
      </button>
    </div>
  );

  handlerFirst() {
    const { links, request } = this.props;
    const link = links.find(l => l.rel === 'first') || {
      rel: '',
      href: '',
    };
    request(link.href);
  }

  handlerPrevious() {
    const { links, request } = this.props;
    const link = links.find(l => l.rel === 'previous') || {
      rel: '',
      href: '',
    };
    request(link.href);
  }

  handlerNext() {
    const { links, request } = this.props;
    const next = links.find(l => l.rel === 'next') || { rel: '', href: '' };
    request(next.href);
  }

  handlerLast() {
    const { links, request } = this.props;
    const link = links.find(l => l.rel === 'last') || { rel: '', href: '' };
    request(link.href);
  }
}
