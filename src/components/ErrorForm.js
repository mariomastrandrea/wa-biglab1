import FilmLibraryNavbar from './filmComponents/FilmLibraryNavbar';
import { Container, Row, Alert } from 'react-bootstrap';


function ErrorForm() {
   return (
      <>
         <FilmLibraryNavbar title="Error" />
         <Container className='my-2'>
            <Row>
               <Alert key='danger' variant='danger'> ERROR: please search a correct film ID </Alert>
            </Row>
         </Container>
      </>
   );
}

export default ErrorForm;