import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function FilmRows(props) {
    let libreria = props.films;

    return (
        libreria.map((ex) => <FilmRow film={ex}></FilmRow>)
    );
}

function Checkbox(props) {
    return(<Form>
    {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        checked={props.checked}
        id={`default-${type}`}
        label={`Favorite`}
      />
    </div>
  ))}
</Form>);
}

function Rating(props) {
    let rating=props.rating;
    let ret = [];

    for(let i=0; i<rating; i++)
    {
        ret.push(<i class="bi bi-star-fill"></i>)
    }
    for(let i=5; i>rating; i--)
    {
        ret.push(<i class="bi bi-star"></i>)
    }

    return ret;
}

function FilmRow(props) {
    let film = props.film;
    return (
        <tr>
            <td>{film.title}</td>
            <td> <Checkbox checked={film.favorite}></Checkbox> </td>
            <td> {film.Watchdate.format("YYYY-MM-DD")} </td>
            <td><Rating rating={film.rating}></Rating></td>
        </tr>
    );
}

export { FilmRows };