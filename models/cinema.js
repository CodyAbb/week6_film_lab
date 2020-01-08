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

module.exports = Cinema;
