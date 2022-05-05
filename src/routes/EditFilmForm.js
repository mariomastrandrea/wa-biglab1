import FilmForm from "../components/Form";
import { useParams } from "react-router-dom";
import  ErrorForm  from "../components/ErrorForm";

function EditFilmForm(props) {
   const { editFilmId } = useParams();
   const film = props.films.filter(film => film.id === editFilmId)[0];
   if (film === undefined) {
      return (<ErrorForm />);
   }
   else
      return (<FilmForm editFilm={props.editFilm} film={film} />);
}

export default EditFilmForm;