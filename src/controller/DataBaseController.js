const GenomeTagsModel = require('../model/GenomeTagsModel');
const LinksModel = require('../model/LinksModel');
const MoviesModel = require('../model/MoviesModel');
const RatingsModel = require('../model/RatingsModel');

//Bibliotecas para importar arquivo .csv
const neatCsv = require('neat-csv');
const fs = require('fs')

class GenomeTagsController {

  async create(req, res){

    const promiseGenomeTags = new Promise((resolve) => {
        fs.readFile('./src/assets/xlsx/genome-tags.csv', async(err, data) => {
            const genomeTags = []
            genomeTags.push(await neatCsv(data))
            resolve(genomeTags)
        })
    })

    const promiseLinks = new Promise((resolve) => {
      fs.readFile('./src/assets/xlsx/links.csv', async(err, data) => {
          const links = []
          links.push(await neatCsv(data))
          resolve(links)
      })
    })

    const promiseMovies = new Promise((resolve) => {
      fs.readFile('./src/assets/xlsx/movies.csv', async(err, data) => {
          const movies = []
          movies.push(await neatCsv(data))
          resolve(movies)
      })
    })

    const promiseRatings = new Promise((resolve) => {
      fs.readFile('./src/assets/xlsx/ratings.csv', async(err, data) => {
          const ratings = []
          ratings.push(await neatCsv(data))
          resolve(ratings)
      })
    })

    Promise.all([promiseGenomeTags, promiseLinks, promiseMovies, promiseRatings])
    .then((response) => {
      new Promise((resolve, reject) => {
       
        let varGenomeTags = response[0]
        varGenomeTags = varGenomeTags[0]
        // varGenomeTags.length

        let varLinks = response[1]
        varLinks = varLinks[0]
        // varLinks.length

        let varMovies = response[2]
        varMovies = varMovies[0]
        // varMovies.length

        let varRatings = response[3]
        varRatings = varRatings[0]
        // varRatings.length

        const promiseInsertGenomeTags = new Promise((resolve, reject) => {
          varGenomeTags.forEach((dados) => {
            const genometags = new GenomeTagsModel(dados);
            genometags.save()
          })
          resolve("GenomeTags success")
        })

        const promiseInsertLinks = new Promise((resolve, reject) => {
          varLinks.forEach((dados) => {
            const links = new LinksModel(dados);
            links.save()
          })
          resolve("Links success")
        })

        const promiseInsertMovies = new Promise((resolve, reject) => {
          varMovies.forEach((dados) => {
            const movies = new MoviesModel(dados);
            movies.save()
          })
          resolve("Movies success")
        })

        const promiseRatings = new Promise((resolve, reject) => {
          varRatings.forEach((dados) => {
            const ratings = new RatingsModel(dados);
            ratings.save()
          })
          resolve("Ratings success")
        })

        Promise.all([promiseInsertGenomeTags, promiseInsertLinks, promiseInsertMovies, promiseRatings])
        .then((responseInsert) => {
          resolve(responseInsert)
        })
        .catch((err) => {
          console.log(err)
        })
        
        
      }).then((response2) => {
        return res.status(200).json(response2);
      })
      

    });
  }

}

module.exports = new GenomeTagsController();