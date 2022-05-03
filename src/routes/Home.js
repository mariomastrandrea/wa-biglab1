import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import FiltersBox from '../components/FiltersBox';
import FilmTable from '../components/FilmTable';
import AddButton from '../components/AddButton';
import '../App.css';
import FilmLibraryNavbar from '../components/FilmLibraryNavbar.js';
import {Link} from "react-router-dom";

function Home(props) {
   const filters=props.filters;
   const activeFilter=props.activeFilter;
   const setActiveFilter=props.setActiveFilter;
   const setFilmFavorite=props.setFilmFavorite;
   const deleteFilm=props.deleteFilm;
   const headers=props.headers;
   const films=props.films;
   const setFilmRating=props.setFilmRating;

   return(
      <Container fluid className="vh-100">
         <Row as="header">
            <FilmLibraryNavbar />
         </Row>

         <Row className='h-100'>
            <Col as="aside" className="bg-light col-3 p-4 h-100">
               <FiltersBox className="h-100" filters={filters} active={activeFilter} 
                  changeFilter={(filterKey) => setActiveFilter(filterKey)}/>
            </Col>

            <Col className="col-9">
               <Container fluid>
                  <Row className="p-3 pt-4">
                     <h1>All</h1>
                  </Row>

                  <Row as="main" className="px-4">
                     <FilmTable setFilmFavorite={setFilmFavorite} setFilmRating={setFilmRating} deleteFilm={deleteFilm} 
                        headers={headers} films={films} filter={activeFilter}/>
                  </Row>

                  <Row className="m-1">

                     <Link to="addfilm">
                        <AddButton>+</AddButton> 
                     </Link>
                  
                  </Row>
               </Container>
            </Col>
         </Row>
      </Container>
   );
}

export default Home;