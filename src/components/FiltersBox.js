import { ListGroup } from "react-bootstrap"

function FiltersBox(props) {

   const filtersElements = props.filters.map(name => {
      const key = name.toLowerCase().split(" ").filter(x => x.length > 0).join("-");
      return (
         <ListGroup.Item key={`${key}-filter`} active={props.active === name} action={props.active !== name}>
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