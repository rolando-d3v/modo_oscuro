import React from 'react'
import '../../App.scss'
import {Table } from 'react-bootstrap'

const Preguntas = () => {
    return (
        <Table striped bordered hover >
        <thead className="thead-dark" >
          <tr>
            <th>#</th>
            <th>First Ndame</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    )
}

export default Preguntas
