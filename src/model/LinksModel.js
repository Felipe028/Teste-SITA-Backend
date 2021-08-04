const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const LinksSchema = new Schema({
  movieId: {type: Number, required: true},
  imdbId: {type: String, required: true},
  tmdbId: {type: Number, required: true},
});

module.exports = mongoose.model('Links', LinksSchema);