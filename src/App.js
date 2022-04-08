import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Navbar, Row, Col, ListGroup, Table } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./FilmLibrary.js"
import { films } from './FilmLibrary';
import {FilmRows} from "./libreria.js";

function App() {
    return (
            <Container fluid className="vh-100">
                <Row>
                    <Navbar bg="primary" variant="dark" expand="lg">
                        <Container fluid>
                            <Navbar.Brand>  {/*Possiamo mettere Anche NavbarBrand */}
                                <i class="bi bi-play-circle"></i>
                                Film library
                            </Navbar.Brand>

                            <Form>
                                <Form.Control type="text" placeholder="Search..." />
                            </Form>

                            <i class="bi bi-person-circle text-white"></i>
                        </Container>
                    </Navbar>
                </Row>
                <Row className='h-100'>
                    <Col className="col-3 p-0 h-100">
                        <ListGroup className="bg-light h-100">
                            <ListGroup.Item className='list-group-item-action' active>All</ListGroup.Item>
                            <ListGroup.Item className='list-group-item-action' action>Favorites</ListGroup.Item>
                            <ListGroup.Item className='list-group-item-action' action>Best rated</ListGroup.Item>
                            <ListGroup.Item className='list-group-item-action' action>Last seen</ListGroup.Item>
                            <ListGroup.Item className='list-group-item-action' action>Seen last month</ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col className="col-9">
                        <Row>
                            <h1 class="pt-1">All</h1>
                        </Row>

                        <Row>
                            <Table>
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Favorite</th>
                                        <th scope="col">WatchDate</th>
                                        <th scope="col">Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <FilmRows films={films}></FilmRows> 
                                </tbody>
                            </Table>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
}

export default App;
