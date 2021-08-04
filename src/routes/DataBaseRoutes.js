const express = require('express');
const router = express.Router();

const DataBaseController = require('../controller/DataBaseController');

router.get('/', DataBaseController.create);

module.exports = router;