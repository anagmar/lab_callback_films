const Cinema = function (films) {
  this.films = films;
};
Cinema.prototype.filmTitles = function() {
  return this.films.map(n => n.title);
};

Cinema.prototype.findFilmByTitle = function(i) {
  return this.films.find(n => n.title === i);
}
Cinema.prototype.filterByGenre = function(i) {
  return this.films.filter(n => (n===i))
};

module.exports = Cinema;
