const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listTitles = function () {
  const titleArray = this.films.map(film => film.title)
  return titleArray;
};

module.exports = Cinema;
