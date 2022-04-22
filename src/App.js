import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { loadFilmLibrary, loadFilters, loadFilmHeaders } from "./FilmLibrary.js";
import FiltersBox from './components/FiltersBox';
import FilmTable from './components/FilmTable';
import AddButton from './components/AddButton';
import './App.css';
import FilmLibraryNavbar from './components/FilmLibraryNavbar.js';
import dayjs from "dayjs";

const filmLibrary = loadFilmLibrary();
const filmFilters = loadFilters();
const filmHeaders = loadFilmHeaders();

function App() {
   //STATES
   const [films, setFilms] = useState(filmLibrary);
   const filters = useState(filmFilters)[0];
   const [activeFilter, setActiveFilter] = useState("All");
   const headers = useState(filmHeaders)[0];
   const [filmsShown, setFilmsShown] = useState(filmLibrary.all());

   const changeFilter = (filterKey) => {
      setActiveFilter(filterKey);

      setFilmsShown(() => {
         
         switch(filterKey) {

            case 'All':
               return films.all();

            case 'Favorite':
               return films.favorite();

            case 'Best rated':
               return films.bestRated();

            case 'Seen last month':
               return films.seenLastMonth();

            case 'Unseen':
               return films.unseen();

            default :
               return films.all();
         }
      });
   }
 
   return (
      <Container fluid className="vh-100">
         <Row as="header">
            <FilmLibraryNavbar />
         </Row>

         <Row className='h-100'>
            <Col as="aside" className="bg-light col-3 p-4 h-100">
               <FiltersBox className="h-100" filters={filters} active={activeFilter} changeFilter={changeFilter}/>
            </Col>

            <Col className="col-9">
               <Container fluid>
                  <Row className="p-3 pt-4">
                     <h1>All</h1>
                  </Row>

                  <Row as="main" className="px-4">
                     <FilmTable headers={headers} films={filmsShown} filter={activeFilter}/>
                  </Row>

                  <Row className="m-1">
                     <AddButton>+</AddButton>
                  </Row>
               </Container>
            </Col>
         </Row>
      </Container>
   );
}

export default App;
