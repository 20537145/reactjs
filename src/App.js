import {  Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import Cardy from './card'
function App() {
  return (
    <>
    <div className="App">
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </div>
    <Cardy/>
    </>
    
  );
}

export default App;