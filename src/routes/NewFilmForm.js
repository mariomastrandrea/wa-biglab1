import FilmForm from "../components/filmComponents/FilmForm";

function NewFilmForm(props) {
    return (<FilmForm addFilm={props.addFilm}/>);
}

export default NewFilmForm;