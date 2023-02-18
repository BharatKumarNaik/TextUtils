import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import App from '../App';
import React ,{useState} from 'react';

function BasicExample(props) {
  const handleMode=()=>{
    var click=document.getElementById("click");
    if(val==="Dark"){
      click.style.color="white";
      click.style.background="#212529";
      click.style.height="1000px";
      setVal("Light");
    }
    else{
      click.style.color="black";
      click.style.background="white";
      // click.style.height="1000px";
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