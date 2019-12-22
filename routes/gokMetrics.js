var express = require("express");
var router = express.Router();
var Gok = require("../models/gok");
var middleware = require("../middleware");

//INDEX - show all campgrounds
router.get("/", function(req, res) {
  // Get all campgrounds from DB
  Gok.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("gok/index", { campgrounds: allCampgrounds });
    }
  });
});

// gok routes here
router.get("/gokcreate", middleware.isLoggedIn, function(req, res) {
  res.render("gok/gokcreate");
});

router.post("/gokshow", middleware.isLoggedIn, function(req, res) {
  // get data from form and add to campgrounds array
  var team = req.body.team;
  var week = req.body.week;
  var gok1 = req.body.gok1;
  var gok2 = req.body.gok2;
  var gok3 = req.body.gok3;
  var gok4 = req.body.gok4;
  var gok5 = req.body.gok5;
  var gok6 = req.body.gok6;
  var gok7 = req.body.gok7;
  var gok8 = req.body.gok8;
  var gok9 = req.body.gok9;
  var gok10 = req.body.gok10;
  var gok11 = req.body.gok11;
  var gok12 = req.body.gok12;
  var gok13 = req.body.gok13;
  var gok14 = req.body.gok14;
  var gok15 = req.body.gok15;
  var gok16 = req.body.gok16;
  var gok17 = req.body.gok17;
  var gok18 = req.body.gok18;
  var gok19 = req.body.gok19;
  var gok20 = req.body.gok20;
  var gok21 = req.body.gok21;
  var gok22 = req.body.gok22;
  var gok23 = req.body.gok23;
  var gok24 = req.body.gok24;

  var couts1 = req.body.couts1;
  var couts2 = req.body.couts2;
  var couts3 = req.body.couts3;
  var couts4 = req.body.couts4;
  var couts5 = req.body.couts5;
  var couts6 = req.body.couts6;

  var author = {
    id: req.user._id,
    username: req.user.username
  };
  var newMetrics = {
    week: week,
    author: author,
    team: team,
    gok1: gok1,
    gok2: gok2,
    gok3: gok3,
    gok4: gok4,
    gok5: gok5,
    gok6: gok6,
    gok7: gok7,
    gok8: gok8,
    gok9: gok9,
    gok10: gok10,
    gok11: gok11,
    gok12: gok12,
    gok13: gok13,
    gok14: gok14,
    gok15: gok15,
    gok16: gok16,
    gok17: gok17,
    gok18: gok18,
    gok19: gok19,
    gok20: gok20,
    gok21: gok21,
    gok22: gok22,
    gok23: gok23,
    gok24: gok24,

    couts1: couts1,
    couts2: couts2,
    couts3: couts3,
    couts4: couts4,
    couts5: couts5,
    couts6: couts6
  };

  // Create a new campground and save to DB
  Gok.create(newMetrics, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      //redirect back to campgrounds page
      console.log(newlyCreated);
      res.redirect("/gokmetrics/gokshow");
    }
  });
});

router.get("/gokshow", function(req, res) {
  // Get all campgrounds from DB
  Gok.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("gok/gokshow", { gokTeam: allCampgrounds });
    }
  });
});

router.get("/showGOK_month", function(req, res) {
  res.render("gok/showGOK_month");
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res) {
  //find the campground with provided ID
  Gok.findById(req.params.id)
    .populate("comments")
    .exec(function(err, foundCampground) {
      if (err) {
        console.log(err);
      } else {
        console.log(foundCampground);
        //render show template with that campground
        res.render("gok/show", { campground: foundCampground });
      }
    });
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkGokTeamOwnership, function(req, res) {
  Gok.findById(req.params.id, function(err, foundCampground) {
    res.render("gok/edit", { campground: foundCampground });
  });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkGokTeamOwnership, function(req, res) {
  // find and update the correct campground
  Gok.findByIdAndUpdate(req.params.id, req.body.campground, function(
    err,
    updatedCampground
  ) {
    if (err) {
      res.redirect("/gokmetrics");
    } else {
      //redirect somewhere(show page)
      res.redirect("/gokmetrics/" + req.params.id);
    }
  });
});

// DESTROY CAMPGROUND ROUTE:
router.delete("/:id", middleware.checkGokTeamOwnership, function(req, res) {
  Gok.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.redirect("/gokmetrics");
    } else {
      res.redirect("/gokmetrics");
    }
  });
});

module.exports = router;
