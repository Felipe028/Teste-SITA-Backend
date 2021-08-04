const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const GenomeTagsSchema = new Schema({
  tagId: {type: Number, required: true},
  tag: {type: String, required: true}
});

module.exports = mongoose.model('GenomeTags', GenomeTagsSchema);