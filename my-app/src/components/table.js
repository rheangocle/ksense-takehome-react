import React, { useState, useEffect } from "react";
import { Button, Table, Link, Nav, NavLink } from "react-bootstrap";
import axios from "axios";

export default function UsersTable() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    await axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((error) => {
        console.error("There was an error fetching the data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <Table striped bordered hover variant='dark'>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.data.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <Nav.Link>
                <td>{user.name}</td>
              </Nav.Link>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
