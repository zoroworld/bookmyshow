const express = require('express');
const router = express.Router();
const Movie = require('../model/movieModel');


// create  a movie (Post)
// read a movie
   // by id
   // all
// update a movie
   // by id params
// delete a movie
   // by id params

router.post('/add-movie' , async(req, res) => {
    try {
        const newMovie = new Movie(req.body);
        await newMovie.save();

        res.send({
            success: true,
            message: 'New movie has beed added'
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
});

router.get('/get-all-movie' , async(req, res) => {
    try {
        const getAllMovie = await Movie.find();

        res.send({
            success: true,
            message: 'All movie',
            data: getAllMovie
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
});

router.get('/movie/:id' , async (req, res) => {
    try {
        const singleMovie = await Movie.findById(req.params.id);
        res.send({
            success: true,
            message: 'Single movie movie',
            data: singleMovie
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
});


router.put('/update-movie' , async(req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.body.movieId, req.body);

        res.send({
            success: true,
            message: 'updated movie',
            data: movie
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
});

router.delete('/delete-movie' , async(req, res) => {
    try {
        const deletemovie = await Movie.findByIdAndDelete(req.body.movieId);

        res.send({
            success: true,
            message: 'movie deleted',
            data: deletemovie
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
});


module.exports = router;