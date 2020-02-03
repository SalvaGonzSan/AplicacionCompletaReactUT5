import React, { Component } from 'react'

class Tabla extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Joel</td>
            <td>Edgerton</td>
          </tr>
          <tr>
            <td>Carmen</td>
            <td>Maura</td>
          </tr>
          <tr>
            <td>Luis</td>
            <td>Tosar</td>
          </tr>
          <tr>
            <td>Chloe</td>
            <td>Grace Moretz</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Tabla