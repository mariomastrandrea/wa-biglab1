import FilmForm from "../components/filmComponents/FilmForm";
import { Container } from "react-bootstrap"

function NewFilmPage(props) {
   return (
      <Container fluid className="vh-100">
         <FilmForm addFilm={props.addFilm} />
      </Container>
   );
}

export default NewFilmPage;