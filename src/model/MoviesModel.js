const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
  movieId: {type: Number, required: true},
  title: {type: String, required: true},
  genres: {type: String, required: true}
});

module.exports = mongoose.model('Movies', MoviesSchema);