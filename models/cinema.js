const Cinema = function (films) {
  this.films = films;
};
Cinema.prototype.filmTitles = function() {
  return this.films.map(n => n.title);
};



module.exports = Cinema;
