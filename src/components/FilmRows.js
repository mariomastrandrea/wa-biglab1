import { Form, Button } from 'react-bootstrap'
import { PencilSquare, Trash, Star, StarFill, StarHalf } from 'react-bootstrap-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function FilmRows(props) {
   let library = props.films;

   return (
      //meglio fare library.filter(...).map(...) invece che usare 2 stati (solo x Te Benny <3)
      library.filter(film => film.filter(props.activeFilter))
         .map((film) =>
            <FilmRow setFilmFavorite={props.setFilmFavorite} setFilmRating={props.setFilmRating} deleteFilm={props.deleteFilm}
               film={film} key={`film-${film.id}`} />)
   );
}

function FilmRow(props) {
   const film = props.film;
   const filmTitleClass = `${film.favorite ? "favorite-" : ""}film-title`;

   return (
      <tr>
         <td key="film-title">
            <Link to={`/editfilm/${film.id}`}>
               <PencilSquare className="me-1 action-icon" size="0.95em" />
            </Link>
            <Trash onClick={() => props.deleteFilm(film.id)} className="me-3 action-icon" size="0.95em" />
            <span className={filmTitleClass}>{film.title}</span>
         </td>
         <td key="film-favorite">
            <Form.Check onChange={(event) => props.setFilmFavorite(film.id, event.target.checked)}
               type="checkbox" label="Favorite" checked={film.favorite} />
         </td>
         <td key="film-watchdate">{film.Watchdate?.format("MMMM D, YYYY")}</td>
         <td key="film-rating">
            <Rating setFilmRating={props.setFilmRating} film={film} />
         </td>
      </tr>
   );
}

function Rating(props) {
   const rating = (props.film.rating >= 0 && props.film.rating <= 5) ? props.film.rating : 0;
   const [hoverRating, setHoverRating] = useState(rating);
   let count = 0;
   let stars = [];

   for (let i = 0; i < 5; i++) {
      count++;

      stars.push(i < hoverRating ?
         <StarFill color={rating === hoverRating ? "current-color" : "#0d6efd"}
            onMouseOut={() => setHoverRating(rating)} onMouseOver={() => setHoverRating(i + 1)}
            onClick={() => props.setFilmRating(props.film.id, i + 1)} 
            key={`${count}-star`} /> :
         <Star onMouseOut={() => setHoverRating(rating)} onMouseOver={() => setHoverRating(i + 1)}
            onClick={() => props.setFilmRating(props.film.id, i + 1)} 
            key={`${count}-star`} />
      );
   }

   return stars;
}

export default FilmRows
