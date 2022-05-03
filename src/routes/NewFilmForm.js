import FilmForm from "../components/Form";

function NewFilmForm(props) {
    return (<FilmForm addFilm={props.addFilm}/>);
}

export default NewFilmForm;