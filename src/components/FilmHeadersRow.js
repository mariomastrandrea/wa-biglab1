
function FilmHeadersRow(props) {

   const headersElements = props.headers.map(name => {
      const key = name.toLowerCase().split(" ").filter(x => x.length > 0).join("-");
      return <th scope="col" key={`${key}-header`}>{name}</th>;
   });

   return <tr>{headersElements}</tr>;
}

export default FilmHeadersRow;