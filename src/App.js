import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { loadFilmLibrary, loadFilters, loadFilmHeaders } from "./FilmLibrary.js";
import FiltersBox from './components/FiltersBox';
import FilmTable from './components/FilmTable';
import AddButton from './components/AddButton';
import FilmForm from './components/Form';
import './App.css';
import FilmLibraryNavbar from './components/FilmLibraryNavbar.js';
import dayjs from "dayjs";


const filmLibrary = loadFilmLibrary();
const filmFilters = loadFilters();
const filmHeaders = loadFilmHeaders();



function App() {
   //STATES
   const [films, setFilms] = useState(filmLibrary.films);
   const filters = useState(filmFilters)[0];
   const [activeFilter, setActiveFilter] = useState("All");
   const headers = useState(filmHeaders)[0];
   const [adder,setAdder] = useState(false)

   function addFilm(film){
      setFilms((old)=>[...old,film]);
   }

   function deleteFilm(id) {
      setFilms((old) => old.filter((film) => film.id !== id));
   }


   function setFilmRating(id, newRating) {
      setFilms((old) => old.map(film => {
         let newFilm = {...film};

         if (film.id === id)
            newFilm.rating = newRating;

         return newFilm;
      }));
   }


   function setFilmFavorite(id, favorite) {
      setFilms((old) => old.map(film => {
         let newFilm = {...film};

         if (film.id === id)
            newFilm.favorite = favorite;

         return newFilm;
      }));
   }
 
   return (
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

                     <AddButton setAdd={setAdder}>+</AddButton> 
                  
                  </Row>

                  <Row>
                     
                     {adder===true && <FilmForm addFilm={addFilm} setAdder={setAdder}/> }
                     
                  </Row>
               </Container>
            </Col>
         </Row>
      </Container>
   );
}

export default App;
