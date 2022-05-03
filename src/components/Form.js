import GenericNavbar from './GenericNavbar';
import { useState } from 'react';
import {Form,Button,Alert,Container} from 'react-bootstrap'
import { useNavigate, useParams, Link } from 'react-router-dom';
import {Film} from '../FilmLibrary'

function FilmForm(props) {

    const [id,setId]=useState(props.film ? props.film.id : '');
    const [title,setTitle]=useState(props.film ? props.film.title : '');
    const [favorite,setFavorite]=useState(props.film ? props.film.favorite : false);
    const [watchdate,setWatchDate]=useState(props.film ? props.film.Watchdate : '');
    const [rating,setRating]=useState(props.film ? props.film.rating : 0);
    const navigate = useNavigate();

    const handleSubmit=(event)=>
    {
        event.preventDefault();
        if(props.film)
            props.editFilm(new Film(id,title,favorite,watchdate,rating));
        else
            props.addFilm(new Film(id,title,favorite,watchdate,rating));
        navigate("/");
    }


    return(
        <>
        <GenericNavbar title={props.film ? "Edit film" : "Add new film"}/>
        <Container className='mt-2 mb-2'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="text" value={id} required={true} placeholder="Film Id" onChange={(event)=>{setId(event.target.value)}}></Form.Control>
                </Form.Group>


                <Form.Group className='mb-3'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} required={true} placeholder="Film Title" onChange={(event)=>{setTitle(event.target.value)}}></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Favorite</Form.Label>
                    <Form.Check type="checkbox" className="form-check-inline ms-2" value={favorite} required={false} onChange={(event)=>{setFavorite(event.target.value)}}></Form.Check>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Watchdate</Form.Label>
                    <Form.Control type="date" value={watchdate} onChange={(event)=>{setWatchDate(event.target.value)}}></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="number" value={rating} required={false}  onChange={(event)=>{setRating(event.target.value)}} min={0} max={5}></Form.Control>
                </Form.Group>

                <Button variant='outline-success' type="submit">Confirm</Button>
            </Form>
        </Container>
        </>
    );
}

export default FilmForm