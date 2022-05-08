import FilmForm from "../components/filmComponents/FilmForm";
import { useParams } from "react-router-dom";
import ErrorForm from "../components/ErrorForm";
import { Container } from "react-bootstrap";

function EditFilmPage(props) {
   const { filmId } = useParams();
   const film = props.films.find(film => film.id === filmId); 

   return (
      <Container fluid className="vh-100">
         {!film ?
            <ErrorForm /> : 
            <FilmForm editFilm={props.editFilm} film={film} />
         }
      </Container>
   );
}

export default EditFilmPage;