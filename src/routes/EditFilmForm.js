import FilmForm from "../components/Form";
import { useParams } from "react-router-dom";

function EditFilmForm(props) {
    const {editFilmId} = useParams();
    const film = props.films.filter(film => film.id===editFilmId)[0];
    //TODO: ritorna messaggio di errore se l'id specificato non esiste (film === undefined)
    return(<FilmForm editFilm={props.editFilm} film={film}/>);
}

export default EditFilmForm;