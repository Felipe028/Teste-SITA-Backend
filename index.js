const express = require('express');
const server = express();
server.use(express.json());
const cors = require('cors');

const DataBaseRoutes = require('./src/routes/DataBaseRoutes');
const Routes = require('./src/routes/Routes');

server.use(cors());

server.use('/database', DataBaseRoutes);
server.use('/movies', Routes);


server.listen(3080, () => {
  console.log('API ONLINE');
});