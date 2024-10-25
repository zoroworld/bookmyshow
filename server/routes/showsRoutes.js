const express = require("express");
const router = express.Router();
const Shows = require("../model/showsModel");

router.post("/add-shows", async (req, res) => {
  try {
    const newShow = new Shows(req.body);
    await newShow.save();

    res.send({
      success: true,
      message: "New show has been added",
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});

router.get("/get-all-shows", async (req, res) => {
  // Here we need owner details also who are users who is connect  users db
  try {
    const getAllshows = await Shows.find().populate("movie theatre");

    res.send({
      success: true,
      message: "All shows data :) !",
      data: getAllshows,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
