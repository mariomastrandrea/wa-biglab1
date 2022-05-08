import { Container, Row, Col } from 'react-bootstrap';
import FiltersBox from '../components/FiltersBox';
import FilmTable from '../components/filmComponents/FilmTable';
import AddButton from '../components/AddButton';
import FilmLibraryNavbar from '../components/filmComponents/FilmLibraryNavbar.js';
import { useParams } from "react-router-dom";
import { revertFromSnakeCase } from "../utilities.js"

function Home(props) {
   const param = useParams();

   const filters = props.filters;
   const activeFilter = props.activeFilter || param.activeFilter?.toLowerCase();
   const setFilmFavorite = props.setFilmFavorite;
   const deleteFilm = props.deleteFilm;
   const headers = props.headers;
   const films = props.films;
   const setFilmRating = props.setFilmRating;

   // check if the specified filter exist, otherwise return a blank page
   if (!filters.some(filter => filter === revertFromSnakeCase(activeFilter)))
      return <></>;

   // * here the activeFilter refers to an existing one *

   return (
      <Container fluid className="vh-100">
         <Row as="header">
            <FilmLibraryNavbar />
         </Row>

         <Row className='h-100'>
            {/* sidebar */}
            <Col as="aside" className="bg-light col-3 p-4 h-100">
               <FiltersBox className="h-100" filters={filters} active={activeFilter} />
            </Col>

            {/* main content */}
            <Col className="col-9">
               <Container fluid>
                  <Row className="p-3 pt-4">
                     <h1>{revertFromSnakeCase(activeFilter)}</h1>
                  </Row>

                  <Row as="main" className="px-4">
                     <FilmTable setFilmFavorite={setFilmFavorite} setFilmRating={setFilmRating} 
                        deleteFilm={deleteFilm} headers={headers} films={films} activeFilter={activeFilter} />
                  </Row>

                  <Row className="m-1">
                     <AddButton>+</AddButton>
                  </Row>
               </Container>
            </Col>
         </Row>
      </Container>
   );
}

export default Home;