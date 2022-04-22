import dayjs from "dayjs";

function Film(id, title, favorite = false, Watchdate, rating) {
   this.id = id;
   this.title = title;
   this.favorite = favorite;
   this.Watchdate = Watchdate ? dayjs(Watchdate) : undefined;
   this.rating = rating;
}

function FilmLibrary() {
   this.films = [];

   this.addNewFilm = (newFilm) => this.films.push(newFilm);

   this.all = () => [...this.films];

   this.favorite = () => this.films.filter(film => film.favorite);

   this.bestRated = () => this.films.filter(film => film.rating === 5);

   this.seenLastMonth = () => this.films.filter(film =>  (film.Watchdate !== undefined) && (dayjs().diff(film.Watchdate, 'day') <= 30));

   this.unseen = () => this.films.filter(film => film.Watchdate===undefined);

   this.sortByDate = () => [...this.films].sort((film1, film2) => {

      if (!film2.Watchdate) return -1;
      if (!film1.Watchdate) return 1;
      if (film1.Watchdate.isSame(film2.Watchdate)) return 0;

      return film1.Watchdate.diff(film2.Watchdate);
   });

   this.deleteFilm = (filmId) => {
      const indexToRemove = this.films.findIndex(film => film.id === filmId);

      if (indexToRemove >= 0)
         this.films.splice(indexToRemove, 1);
   };

   this.resetWatchedFilms = () => this.films.forEach(film => delete film.Watchdate);

   this.getRated = () => this.films.filter(film => film.rating)
      .sort((film1, film2) => film2.rating - film1.rating);
}

function loadFilmLibrary() {
   let filmLibrary = new FilmLibrary();

   // fake data
   filmLibrary.addNewFilm(new Film("abc", "Pulp Fiction", true, "2022-03-10", 5));
   filmLibrary.addNewFilm(new Film("bcd", "21 Grams", true, "2022-03-17", 4));
   filmLibrary.addNewFilm(new Film("cde", "Star Wars", false));
   filmLibrary.addNewFilm(new Film("def", "Matrix"));
   filmLibrary.addNewFilm(new Film("efg", "Shrek", false, "2022-03-21", 3));

   filmLibrary.addNewFilm(new Film("fgh", "The Incredibles", true, "2022-02-28", 5));
   filmLibrary.addNewFilm(new Film("ghi", "Tolo Tolo", false, "2022-03-29", 4));
   filmLibrary.addNewFilm(new Film("hij", "Don Matteo", false, "", 2));
   filmLibrary.addNewFilm(new Film("ijk", "Spiderman", false, "2019-12-07", 5));
   filmLibrary.addNewFilm(new Film("jkl", "Il testimone invisibile", true, "2020-07-18"));

   return filmLibrary;
}

function loadFilters() {
   const filters = [
      "All",
      "Favorite",
      "Best rated",
      "Seen last month",
      "Unseen"
   ];

   return filters;
}

function loadFilmHeaders() {
   const filmHeaders = [
      "Title",
       "Favorite", 
       "Date", 
       "Rating"
   ];

   return filmHeaders;
}

export { loadFilmLibrary, loadFilters, loadFilmHeaders };