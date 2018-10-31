import React from 'react';

export const DeputadoList = (props) => {
  const { deputados } = props;
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Foto</th>
          <th style={{ width: '350px' }}>Nome</th>
          <th>Partido</th>
        </tr>
      </thead>
      <tbody>
        {deputados.map(item => (
          <tr key={item.id}>
            <td>
              <img src={item.urlFoto} alt={item.name} width="50" />
            </td>
            <td>{item.nome}</td>
            <td>{item.siglaPartido}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
