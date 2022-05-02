import { Button, Col } from "react-bootstrap";

function AddButton(props) {
   return (
      <Col className="d-flex flex-row-reverse me-4 mt-3">
         <Button className="circular-button" onClick={()=> props.setAdd(true) }>{props.children}</Button>
      </Col>
   );
}

export default AddButton;