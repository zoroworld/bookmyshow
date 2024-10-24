const mongoose = require('mongoose');

// title , dscription, genre, duration, language, releasedate, poster
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    descripton:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    language:{
        type: String,
        required: true
    },
    releasedate:{
        type: Date,
        required: true
    },
    poster:{
        type: String,
        required: true
    }
   
})


module.exports = mongoose.model('movies', movieSchema);