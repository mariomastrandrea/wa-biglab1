import { Form } from 'react-bootstrap'
import { PencilSquare, Trash, Star, StarFill } from 'react-bootstrap-icons';


function FilmRows(props) {
   let library = props.films;

   return (
      library.map((film) => <FilmRow film={film} key={`film-${film.id}`} />)
   );
}

function FilmRow(props) {
   const film = props.film;
   const filmTitleClass = `${film.favorite ? "favorite-" : ""}film-title`;

   return (
      <tr>
         <td key="film-title">
            <PencilSquare className="me-1 action-icon" size="0.95em" />
            <Trash className="me-3 action-icon" size="0.95em" />
            <span className={filmTitleClass}>{film.title}</span>
         </td>
         <td key="film-favorite">
            <Form.Check type="checkbox" label="Favorite" checked={film.favorite} readOnly/>
         </td>
         <td key="film-watchdate">{film.Watchdate?.format("MMMM D, YYYY")}</td>
         <td key="film-rating">
            <Rating rating={film.rating} />
         </td>
      </tr>
   );
}


function Rating(props) {
   const rating = (props.rating >= 0 && props.rating <= 5) ? props.rating : 0;
   let count = 0;
   let stars = [];

   for (let i = 0; i < 5; i++) {
      count++;
      stars.push(i < rating ?
         <StarFill key={`${count}-star`} /> :
         <Star     key={`${count}-star`} />
      );
   }

   return stars;
}

export default FilmRows
