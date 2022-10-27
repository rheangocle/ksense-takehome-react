import React, { useState, useEffect } from "react";
/** importing our pages */
import axios from "axios";
import BasicExample from "./components/header";
import UsersTable from "./components/table";

import { Alert } from "react-bootstrap";
export default function App() {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // async function getUsers() {
  //   await axios("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       setData(response);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error fetching the data: ", error);
  //       setError(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }

  // if (loading) return "Loading...";
  // if (error) return "Error!";

  return (
    <>
      <BasicExample />
      <Alert variant='success' className='justify-content-center w-50 m-1 pb-0'>
        <p>Click on a user's name to view their posts!</p>
      </Alert>

      <UsersTable />
    </>
  );
}
