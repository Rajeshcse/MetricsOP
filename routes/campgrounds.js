var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

//INDEX - show all campgrounds
router.get("/", function(req, res) {
  // Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/index", { campgrounds: allCampgrounds });
    }
  });
});

//CREATE - add new campground to DB
router.post("/itbshow", middleware.isLoggedIn, function(req, res) {
  // get data from form and add to campgrounds array
  var team = req.body.team;
  var week = req.body.week;
  var pv1 = req.body.pv1;
  var pv2 = req.body.pv2;
  var pv3 = req.body.pv3;
  var pv4 = req.body.pv4;
  var pv5 = req.body.pv5;
  var pv6 = req.body.pv6;
  var pv7 = req.body.pv7;
  var pv8 = req.body.pv8;
  var pv9 = req.body.pv9;
  var pv10 = req.body.pv10;
  var pv11 = req.body.pv11;
  var pv12 = req.body.pv12;
  var pv13 = req.body.pv13;
  var pv14 = req.body.pv14;
  var pv15 = req.body.pv15;
  var pv16 = req.body.pv16;
  var pv17 = req.body.pv17;
  var pv18 = req.body.pv18;
  var pv19 = req.body.pv19;
  var pv20 = req.body.pv20;
  var pv21 = req.body.pv21;
  var pv22 = req.body.pv22;
  var pv23 = req.body.pv23;
  var pv24 = req.body.pv24;
  var pv25 = req.body.pv25;
  var pv26 = req.body.pv26;
  var pv27 = req.body.pv27;
  var pv28 = req.body.pv28;
  var pv29 = req.body.pv29;
  var pv30 = req.body.pv30;
  var pv31 = req.body.pv31;
  var pv32 = req.body.pv32;
  var pv33 = req.body.pv33;
  var pv34 = req.body.pv34;
  var pv35 = req.body.pv35;
  var pv36 = req.body.pv36;
  var pv37 = req.body.pv37;
  var pv38 = req.body.pv38;
  var pv39 = req.body.pv39;
  var pv40 = req.body.pv40;
  var pv41 = req.body.pv41;
  var pv42 = req.body.pv42;
  var pv43 = req.body.pv43;
  var pv44 = req.body.pv44;
  var pv45 = req.body.pv45;
  var pv46 = req.body.pv46;
  var pv47 = req.body.pv47;
  var pv48 = req.body.pv48;
  var pv49 = req.body.pv49;
  var pv50 = req.body.pv50;
  var pv51 = req.body.pv51;
  var pv52 = req.body.pv52;
  var couts1 = req.body.couts1;
  var couts2 = req.body.couts2;
  var author = {
    id: req.user._id,
    username: req.user.username
  };
  var newCampground = {
    week: week,
    author: author,
    team: team,
    pv1: pv1,
    pv2: pv2,
    pv3: pv3,
    pv4: pv4,
    pv5: pv5,
    pv6: pv6,
    pv7: pv7,
    pv8: pv8,
    pv9: pv9,
    pv10: pv10,
    pv11: pv11,
    pv12: pv12,
    pv13: pv13,
    pv14: pv14,
    pv15: pv15,
    pv16: pv16,
    pv17: pv17,
    pv18: pv18,
    pv19: pv19,
    pv20: pv20,
    pv21: pv21,
    pv22: pv22,
    pv23: pv23,
    pv24: pv24,
    pv25: pv25,
    pv26: pv26,
    pv27: pv27,
    pv28: pv28,
    pv29: pv29,
    pv30: pv30,
    pv31: pv31,
    pv32: pv32,
    pv33: pv33,
    pv34: pv34,
    pv35: pv35,
    pv36: pv36,
    pv37: pv37,
    pv38: pv38,
    pv39: pv39,
    pv40: pv40,
    pv41: pv41,
    pv22: pv42,
    pv43: pv43,
    pv44: pv44,
    pv45: pv45,
    pv46: pv46,
    pv47: pv47,
    pv48: pv48,
    pv49: pv49,
    couts1: couts1,
    couts2: couts2
  };

  // Create a new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      //redirect back to campgrounds page
      console.log(newlyCreated);
      res.redirect("/campgrounds");
    }
  });
});

//NEW - show form to create new campground
router.get("/new", middleware.isLoggedIn, function(req, res) {
  res.render("campgrounds/new");
});

router.post("/itbshow", middleware.isLoggedIn, function(req, res) {
  // get data from form and add to campgrounds array
  var team = req.body.team;
  var week = req.body.week;
  var pv1 = req.body.pv1;
  var pv2 = req.body.pv2;
  var pv3 = req.body.pv3;
  var pv4 = req.body.pv4;
  var pv5 = req.body.pv5;
  var pv6 = req.body.pv6;
  var pv7 = req.body.pv7;
  var pv8 = req.body.pv8;
  var pv9 = req.body.pv9;
  var pv10 = req.body.pv10;
  var pv11 = req.body.pv11;
  var pv12 = req.body.pv12;
  var pv13 = req.body.pv13;
  var pv14 = req.body.pv14;
  var pv15 = req.body.pv15;
  var pv16 = req.body.pv16;
  var pv17 = req.body.pv17;
  var pv18 = req.body.pv18;
  var pv19 = req.body.pv19;
  var pv20 = req.body.pv20;
  var pv21 = req.body.pv21;
  var pv22 = req.body.pv22;
  var pv23 = req.body.pv23;
  var pv24 = req.body.pv24;
  var pv25 = req.body.pv25;
  var pv26 = req.body.pv26;
  var pv27 = req.body.pv27;
  var pv28 = req.body.pv28;
  var pv29 = req.body.pv29;
  var pv30 = req.body.pv30;
  var pv31 = req.body.pv31;
  var pv32 = req.body.pv32;
  var pv33 = req.body.pv33;
  var pv34 = req.body.pv34;
  var pv35 = req.body.pv35;
  var pv36 = req.body.pv36;
  var pv37 = req.body.pv37;
  var pv38 = req.body.pv38;
  var pv39 = req.body.pv39;
  var pv40 = req.body.pv40;
  var pv41 = req.body.pv41;
  var pv42 = req.body.pv42;
  var pv43 = req.body.pv43;
  var pv44 = req.body.pv44;
  var pv45 = req.body.pv45;
  var pv46 = req.body.pv46;
  var pv47 = req.body.pv47;
  var pv48 = req.body.pv48;
  var pv49 = req.body.pv49;
  var pv50 = req.body.pv50;
  var pv51 = req.body.pv51;
  var pv52 = req.body.pv52;
  var couts1 = req.body.couts1;
  var couts2 = req.body.couts2;
  var author = {
    id: req.user._id,
    username: req.user.username
  };
  var newCampground = {
    week: week,
    author: author,
    team: team,
    pv1: pv1,
    pv2: pv2,
    pv3: pv3,
    pv4: pv4,
    pv5: pv5,
    pv6: pv6,
    pv7: pv7,
    pv8: pv8,
    pv9: pv9,
    pv10: pv10,
    pv11: pv11,
    pv12: pv12,
    pv13: pv13,
    pv14: pv14,
    pv15: pv15,
    pv16: pv16,
    pv17: pv17,
    pv18: pv18,
    pv19: pv19,
    pv20: pv20,
    pv21: pv21,
    pv22: pv22,
    pv23: pv23,
    pv24: pv24,
    pv25: pv25,
    pv26: pv26,
    pv27: pv27,
    pv28: pv28,
    pv29: pv29,
    pv30: pv30,
    pv31: pv31,
    pv32: pv32,
    pv33: pv33,
    pv34: pv34,
    pv35: pv35,
    pv36: pv36,
    pv37: pv37,
    pv38: pv38,
    pv39: pv39,
    pv40: pv40,
    pv41: pv41,
    pv22: pv42,
    pv43: pv43,
    pv44: pv44,
    pv45: pv45,
    pv46: pv46,
    pv47: pv47,
    pv48: pv48,
    pv49: pv49,
    couts1: couts1,
    couts2: couts2
  };

  // Create a new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      //redirect back to campgrounds page
      console.log(newlyCreated);
      res.redirect("/campgrounds/itbshow");
    }
  });
});

router.get("/itbshow", function(req, res) {
  // Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/itbshow", { campgrounds: allCampgrounds });
    }
  });
});

router.get("/gok", middleware.isLoggedIn, function(req, res) {
  res.render("campgrounds/gok");
});

router.get("/showITB_month", middleware.isLoggedIn, function(req, res) {
  res.render("campgrounds/showITB_month");
});

router.get("/gokshow", function(req, res) {
  // Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/gokshow", { campgrounds: allCampgrounds });
    }
  });
});

router.get("/metadata", middleware.isLoggedIn, function(req, res) {
  res.render("campgrounds/metadata");
});
router.get("/series", middleware.isLoggedIn, function(req, res) {
  res.render("campgrounds/series");
});
router.get("/itb", middleware.isLoggedIn, function(req, res) {
  res.render("campgrounds/itb");
});
router.get("/kcq", middleware.isLoggedIn, function(req, res) {
  res.render("campgrounds/kcq");
});
router.get("/xray", middleware.isLoggedIn, function(req, res) {
  res.render("campgrounds/xray");
});

router.get("/reports", function(req, res) {
  res.render("campgrounds/reports");
});

router.get("/profile", function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/profile", { campgrounds: allCampgrounds });
    }
  });
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res) {
  //find the campground with provided ID
  Campground.findById(req.params.id)
    .populate("comments")
    .exec(function(err, foundCampground) {
      if (err) {
        console.log(err);
      } else {
        console.log(foundCampground);
        //render show template with that campground
        res.render("campgrounds/show", { campground: foundCampground });
      }
    });
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(
  req,
  res
) {
  Campground.findById(req.params.id, function(err, foundCampground) {
    res.render("campgrounds/edit", { campground: foundCampground });
  });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res) {
  // find and update the correct campground
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(
    err,
    updatedCampground
  ) {
    if (err) {
      res.redirect("/campgrounds");
    } else {
      //redirect somewhere(show page)
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
});

// DESTROY CAMPGROUND ROUTE:
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res) {
  Campground.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.redirect("/campgrounds");
    } else {
      res.redirect("/campgrounds");
    }
  });
});

module.exports = router;
