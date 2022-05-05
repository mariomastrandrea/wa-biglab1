import GenericNavbar from './GenericNavbar';
import {Container, Row, Alert} from 'react-bootstrap';


function ErrorForm() {
   return (
      <>
         <GenericNavbar title={"ERROR : WRONG FILM ID"} />
         <Container className='mt-2 mb-2'>
            <Row>
               <Alert key=  'danger' variant='danger'> ERROR: please search a correct film ID </Alert>
            </Row>
         </Container>
      </>
   );
}

export default ErrorForm;