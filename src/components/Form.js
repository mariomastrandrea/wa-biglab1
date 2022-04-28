import {Form} from 'react-bootstrap'

function FilmForm(props) {
    return(
        <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text"></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Favorite</Form.Label>
                <Form.Check type="checkbox" className="form-check-inline ms-2"></Form.Check>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Watchdate</Form.Label>
                <Form.Control type="date"></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Rating</Form.Label>
            </Form.Group>
        </Form>
    )
}

export default FilmForm