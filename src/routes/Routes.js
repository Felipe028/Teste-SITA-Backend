const express = require('express');
const router = express.Router();

const MoviesController = require('../controller/MoviesController');

router.post("/titulo", MoviesController.listMoveisTitle);
router.post("/yeargender", MoviesController.listMoveisYearGender);
router.post("/listmoveisclassification", MoviesController.listMoveisClassification);

module.exports = router;