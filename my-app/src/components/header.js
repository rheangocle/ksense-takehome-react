import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar bg='info' expand='lg' className='justify-content-center'>
      <Container>
        <Navbar.Brand href='#home'>Users & Posts</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
