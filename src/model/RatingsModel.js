const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const RatingsSchema = new Schema({
  userId: {type: Number},
  movieId: {type: Number},
  rating: { type: String },
  timestamp: {type: String}
});

module.exports = mongoose.model('Ratings', RatingsSchema);