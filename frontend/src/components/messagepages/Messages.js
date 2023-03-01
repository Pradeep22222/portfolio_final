import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { deleteAPIMessages, getAPIMessages } from "../../helpers/axiosHelper.js";

export const Messages = () => {
  const [messages,setMessages]=useState([])
  const getMessageFromServer = async() => {
    const data = await getAPIMessages();
    data.status === "success" && setMessages(data.result);
  }
  console.log(messages)
  useEffect(() => {
    getMessageFromServer();
  }, [])
  const handleOnDelete = async(e) => {
    const _id = (e.target.name);
    const result = await deleteAPIMessages(_id);
  }
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
          {messages.map((e, i) => {
            return (
              <tr key={i}>
                <td>{ i}</td>
                <td>{ e.firstName}</td>
                <td>{ e.lastName}</td>
                <td>{e.email} </td>
                <td>{ e.phone}</td>
                <td>{ e.message}</td>
                <td>
                  <Button id="delete_button" name={e._id} onClick={handleOnDelete}>Delete</Button>
                </td>
              </tr>
            );
          })}
          
          
          
        </tbody>
      </Table>
    </div>
  );
};
