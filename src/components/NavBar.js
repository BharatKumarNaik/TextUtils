import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import App from '../App';
import React ,{useState} from 'react';

function BasicExample(props) {
  const handleMode=()=>{
    if(val==="Dark"){
      console.log(App);
      setVal("Light");
    }
    else{
      setVal("Dark");
    }
  }
  const [val,setVal]=useState("Dark")
  return (<>
  <Navbar className="navbar-dark" bg="dark" expand="lg">
      <Container >
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <button className='btn btn-primary m-1' onClick={handleMode}>{val}</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></>

  );
}

export default BasicExample;