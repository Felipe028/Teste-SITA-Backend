const MoviesModel = require('../model/MoviesModel');
const mongoose = require("mongoose");
const Ratings = mongoose.model("Ratings");

class MoviesController {

  async listMoveisTitle(req, res){
    await MoviesModel.find({title : { $regex: req.body.title, $options: 'i' }}, {_id: 0})
    .then(response => {
      if(response)
        return res.status(200).json(response);
      else
        return res.status(404).json({error: 'Movie not found'});
    })
    .catch(error => {
      return res.status(500).json(error);
    });
  }

  async listMoveisYearGender(req, res){
    await MoviesModel.find({title : { $regex: '('+req.body.year+')', $options: 'i' } , genres : { $regex: req.body.genre, $options: 'i' }})
    .then(response => {
      if(response)
        return res.status(200).json(response);
      else
        return res.status(404).json({error: 'Movie not found'});
    })
    .catch(error => {
      return res.status(500).json(error);
    });
  }

  async listMoveisClassification(req, res){
    let data = req.body.rating.toString()
      await Ratings.aggregate([
        {
          $lookup: {
            from: 'movies',
            localField: 'movieId',
            foreignField: 'movieId',
            as: 'movies'
          }
        },
        {
          $match: {
            rating : data
          }
        },
        {
          $sort: {
            movieId : -1
          }
        }
      ]).then(response => {
        if(response)
          return res.status(200).json(response);
        else
          return res.status(404).json({error: 'Movie not found'});
      })
      .catch(error => {
        return res.status(500).json(error);
      });
  }

}

module.exports = new MoviesController();