import { ListGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

function FiltersBox(props) {
   const navigate = useNavigate();

   const filtersElements = props.filters.map(name => {
      const key = name.toLowerCase().split(" ").filter(x => x.length > 0).join("-");
      return (
         <ListGroup.Item key={`${key}-filter`} active={props.active === key}
            action={props.active !== name} onClick={() => {
               navigate(`/${key}`); props.setActiveFilter(name)}}>
            {name}
         </ListGroup.Item>
      );
   });

   return (
      <ListGroup className={props.className}>
         {filtersElements}
      </ListGroup>
   );
}

export default FiltersBox;