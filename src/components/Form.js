import dayjs from 'dayjs';
import { useState } from 'react';
import {Form,Button,Alert} from 'react-bootstrap'
import {Film} from '../FilmLibrary'

function FilmForm(props) {

    const [id,setId]=useState('');
    const [title,setTitle]=useState('');
    const [favorite,setFavorite]=useState(false);
    const [watchdate,setWatchDate]=useState('');
    const [rating,setRating]=useState(0);
    const [error,setError]=useState(false);

    const handleSubmit=(event)=>
    {
       // TODO : controlli
        if(false)
        {
            setError(true);
        }
        else
        {
            setError(false);
        }

        if(error===false)
        {
        event.preventDefault();
        props.addFilm(new Film(id,title,favorite,watchdate,rating));
        props.setAdder(false);
        }
        else
        {
        <Alert key="danger" variant="danger">ATTENTION!!! Form was completed with incorrect data, retry</Alert>
        }

    }


    return(
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
                <Form.Control type="date" value={watchdate} required={true}  onChange={(event)=>{setWatchDate(event.target.value)}}></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Rating</Form.Label>
                <Form.Control type="number" value={rating} required={false}  onChange={(event)=>{setRating(event.target.value)}}></Form.Control>
            </Form.Group>
            <Button variant='outline-success' type="submit">Confirm</Button>
        </Form>
    );
}

export default FilmForm