import FilmHeadersRow from './FilmHeadersRow';
import FilmRows from './FilmRows'
import { Table } from 'react-bootstrap'


function FilmTable(props) {

   return (
      <Table hover className="mx-2" id="films-table">
         <thead>
            <FilmHeadersRow headers={props.headers} />
         </thead>
         <tbody>
            <FilmRows setFilmFavorite={props.setFilmFavorite} setFilmRating={props.setFilmRating} 
               deleteFilm={props.deleteFilm} films={props.films} 
               activeFilter={props.filter} key={`filter-${props.filter}`}/>
         </tbody>
      </Table>
   );
}

export default FilmTable