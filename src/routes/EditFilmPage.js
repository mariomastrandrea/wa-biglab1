import FilmForm from "../components/filmComponents/FilmForm";
import { useParams } from "react-router-dom";
import  ErrorForm  from "../components/ErrorForm";

function EditFilmPage(props) {
   const { editFilmId } = useParams();
   const film = props.films.filter(film => film.id === editFilmId)[0];
   if (film === undefined) {
      return (<ErrorForm />);
   }
   else
      return (<FilmForm editFilm={props.editFilm} film={film} />);
}

export default EditFilmPage;