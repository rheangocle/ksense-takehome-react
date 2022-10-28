import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg='info' expand='lg' className='d-flex justify-items-center'>
      <Container className='justify-content-center'>
        <h1>User Information</h1>
      </Container>
    </Navbar>
  );
}

export default Header;
