const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/teste_sidia';
mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;