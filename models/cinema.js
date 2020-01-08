const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listTitles = function () {
  const titleArray = this.films.map(film => film.title)
  return titleArray;
};

Cinema.prototype.findByTitle = function (searchTitle) {
  const searchedObject = this.films.filter((film) => {
    return film.title === searchTitle;
  });
  return searchedObject[0];
};

Cinema.prototype.findByGenre = function (searchGenre) {
  const searchedObjects = this.films.filter((film) => {
    return film.genre === searchGenre;
  });
  return searchedObjects;
};

Cinema.prototype.findByYear = function (searchYear) {
  const searchedYear = this.films.filter((film) =>{
    return film.year === searchYear;
  });
  return searchedYear;
};

Cinema.prototype.yearHasFilms = function (searchYear) {
  const searchedYear = this.films.filter((film) =>{
    return film.year === searchYear;
  });
  if (searchYear.length > 0) {
    return true
  } else {
    return false
  };
};

Cinema.prototype.checkFilmLength = function (searchLength) {
  const filmLengths = this.films.filter((film) =>{
    if (film.length >= searchLength) {
      return film;
    };
  });
  return filmLengths;
};

Cinema.prototype.totalRuntime = function () {
  const filmLengths = this.films.map(film => film.length);
  const total = filmLengths.reduce((accumulator, currentValue)=> {
    return accumulator += currentValue
  }, 0);
  return total;
};

Cinema.prototype.findFilmsByProperty = function(searchProperty, searchTerm){
   const result = this.films.filter(film => film[searchProperty] === searchTerm);
   return result;
};

module.exports = Cinema;
