import React from 'react'
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export const Messages = () => {
  return (
    <div>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdosfdfds </td>
            <td>Mar dsfdsfds</td>
            <td>sfdo</td>
            <td>
              <Button id="delete_button">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <Button id="delete_button">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
