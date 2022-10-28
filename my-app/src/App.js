import React from "react";

/** importing components */
import Header from "./components/header";
import UsersData from "./components/table";
import Footer from "./components/footer";

import { Alert } from "react-bootstrap";
export default function App() {
  return (
    <>
      <Header />
      <div className='justify-items-center'>
        <Alert variant='success' className='w-50 m-2 pb-0'>
          <p>Click on a user's name to view their posts!</p>
        </Alert>
      </div>
      <UsersData />
      <Footer />
    </>
  );
}
