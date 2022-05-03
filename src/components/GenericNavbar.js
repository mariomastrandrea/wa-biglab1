import { Container, Navbar, Form } from "react-bootstrap";
import { PersonCircle, PlayCircle } from "react-bootstrap-icons";


function GenericNavbar(props) {
   return (
      <Navbar bg="primary" variant="dark" expand="md">
         <Container fluid>
            <Navbar.Toggle />

            <Navbar.Brand className="d-flex align-items-center">
               <PlayCircle size="1.2em" className="me-1 action-icon" />
               <span>Film Library</span>
            </Navbar.Brand>

            <Navbar.Brand>
               <span>{props.title}</span>
            </Navbar.Brand>

            <PersonCircle color="white" size="1.6em" className="action-icon" />
         </Container>
      </Navbar>
   );
}

export default GenericNavbar;