import React, { Component } from 'react'

const TablaCabecera = () => {
    return (
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
            </tr>
        </thead>
    )
}

const TablaCuerpo = () => {
    return (
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
    )
}

class TablaComponentesSimples extends Component {
    render() {
        return (
            <table>
                <TablaCabecera />
                <TablaCuerpo />
            </table>
        )
    }
}

export default TablaComponentesSimples