const express = require("express");
const router = express.Router();
const Theatre = require("../model/theatreModel");

router.post("/add-theatre", async (req, res) => {
  try {
    const newTheatre = new Theatre(req.body);
    await newTheatre.save();
    res.send({
      success: true,
      message: "Theatre is added",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

router.get("/get-all-theatre", async (req, res) => {
  // Here we need owner details also who are users who is connect  users db
  try {
    const getAllTheatre = await Theatre.find().populate("owner");

    res.send({
      success: true,
      message: "All Theatre data :) !",
      data: getAllTheatre,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

router.put("/update-theatre", async (req, res) => {
  try {
    const theatre = await Theatre.findByIdAndUpdate(
      req.body.theatreId,
      req.body
    );

    res.send({
      success: true,
      message: "Updated theatre",
      data: theatre,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

router.delete("/delete-theatre", async (req, res) => {
  try {
    const deletetheatre = await Theatre.findByIdAndDelete(req.body.theatreId);

    res.send({
      success: true,
      message: "Theatre deleted from list",
      data: deletetheatre,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// All threaters buy by owner

router.get("/get-all-theatre-by-owner", async (req, res) => {
  try {
    const getAllTheatre = await Theatre.find({
      owner: req.body.owner,
    }).populate("owner");

    res.send({
      success: true,
      message: "All Theatre owner data :) !",
      data: getAllTheatre,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
