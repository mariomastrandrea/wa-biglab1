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
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./routes/Home";
import NewFilmForm from "./routes/NewFilmForm";
import EditFilmForm from "./routes/EditFilmForm";


const filmLibrary = loadFilmLibrary();
const filmFilters = loadFilters();
const filmHeaders = loadFilmHeaders();



function App() {
   //STATES
   const [films, setFilms] = useState(filmLibrary.films);
   const filters = useState(filmFilters)[0];
   const [activeFilter, setActiveFilter] = useState("All");
   const headers = useState(filmHeaders)[0];

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

   function editFilm(film) {
      setFilms((old) => old.map(oldFilm => {
         if(oldFilm.id === film.id)
            return film;

         return oldFilm;
      }))
   }

   return (
      <BrowserRouter>
         <Routes>
            <Route index element={
               <Home
                  filters={filters}
                  setActiveFilter={setActiveFilter}
                  setFilmFavorite={setFilmFavorite}
                  setFilmRating={setFilmRating}
                  deleteFilm={deleteFilm}
                  headers={headers}
                  films={films}
                  activeFilter={activeFilter}
               />
            }/>

            <Route path="/addfilm" element={
               <NewFilmForm
                  addFilm={addFilm}
               />
            }/>

            <Route path="/editFilm/:editFilmId" element={
               <EditFilmForm
                  editFilm={editFilm}
                  films={films}
               />
            }/>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
