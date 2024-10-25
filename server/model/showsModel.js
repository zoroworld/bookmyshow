const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movies",
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
  ticketSeats: {
    type: Number,
    required: true,
  },
  bookedSeats: {
    type: Array,
    default: [],
  },
  theatre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "theatre",
    required: true,
  },
});

module.exports = mongoose.model("shows", showSchema);
