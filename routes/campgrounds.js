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

//ITB team routes  - show form to create new campground
router.get("/itb", middleware.isLoggedIn, function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/itb", { campgrounds: allCampgrounds });
    }
  });
});

router.post("/itbshow", function(req, res) {
  // get data from form and add to campgrounds array
  var team = req.body.team;
  var week = req.body.week;

  var P_Vol1 = req.body.P_Vol1,
    P_Vol2 = req.body.P_Vol2,
    P_Vol3 = req.body.P_Vol3,
    P_Vol4 = req.body.P_Vol4,
    P_Vol5 = req.body.P_Vol5,
    P_Vol6 = req.body.P_Vol6,
    P_Vol7 = req.body.P_Vol7,
    P_Vol8 = req.body.P_Vol8,
    P_Vol9 = req.body.P_Vol9,
    P_Vol10 = req.body.P_Vol10,
    P_Vol11 = req.body.P_Vol11,
    P_Vol12 = req.body.P_Vol12,
    P_Vol13 = req.body.P_Vol13,
    P_Vol14 = req.body.P_Vol14,
    P_Vol15 = req.body.P_Vol15,
    P_Vol16 = req.body.P_Vol16,
    P_Vol17 = req.body.P_Vol17,
    P_Vol18 = req.body.P_Vol18,
    P_Vol19 = req.body.P_Vol19,
    P_Vol20 = req.body.P_Vol20,
    P_Vol21 = req.body.P_Vol21,
    P_Vol22 = req.body.P_Vol22,
    P_Vol23 = req.body.P_Vol23,
    P_Vol24 = req.body.P_Vol24,
    P_Vol25 = req.body.P_Vol25,
    P_Vol26 = req.body.P_Vol26,
    P_Vol27 = req.body.P_Vol27,
    P_Vol28 = req.body.P_Vol28,
    P_Vol29 = req.body.P_Vol29,
    P_Vol30 = req.body.P_Vol30,
    P_Vol31 = req.body.P_Vol31,
    P_Vol32 = req.body.P_Vol32,
    P_Vol33 = req.body.P_Vol33,
    P_Vol34 = req.body.P_Vol34,
    P_Vol35 = req.body.P_Vol35,
    P_Vol36 = req.body.P_Vol36,
    P_Vol37 = req.body.P_Vol37,
    P_Vol38 = req.body.P_Vol38,
    P_Vol39 = req.body.P_Vol39;

  var P_HCount1 = req.body.P_HCount1,
    P_HCount2 = req.body.P_HCount2,
    P_HCount3 = req.body.P_HCount3,
    P_HCount4 = req.body.P_HCount4,
    P_HCount5 = req.body.P_HCount5,
    P_HCount6 = req.body.P_HCount6,
    P_HCount7 = req.body.P_HCount7,
    P_HCount8 = req.body.P_HCount8,
    P_HCount9 = req.body.P_HCount9,
    P_HCount10 = req.body.P_HCount10,
    P_HCount11 = req.body.P_HCount11,
    P_HCount12 = req.body.P_HCount12,
    P_HCount13 = req.body.P_HCount13,
    P_HCount14 = req.body.P_HCount14,
    P_HCount15 = req.body.P_HCount15,
    P_HCount16 = req.body.P_HCount16,
    P_HCount17 = req.body.P_HCount17,
    P_HCount18 = req.body.P_HCount18,
    P_HCount19 = req.body.P_HCount19,
    P_HCount20 = req.body.P_HCount20,
    P_HCount21 = req.body.P_HCount21,
    P_HCount22 = req.body.P_HCount22,
    P_HCount23 = req.body.P_HCount23,
    P_HCount24 = req.body.P_HCount24,
    P_HCount25 = req.body.P_HCount25,
    P_HCount26 = req.body.P_HCount26,
    P_HCount27 = req.body.P_HCount27,
    P_HCount28 = req.body.P_HCount28,
    P_HCount29 = req.body.P_HCount29,
    P_HCount30 = req.body.P_HCount30,
    P_HCount31 = req.body.P_HCount31,
    P_HCount32 = req.body.P_HCount32,
    P_HCount33 = req.body.P_HCount33,
    P_HCount34 = req.body.P_HCount34,
    P_HCount35 = req.body.P_HCount35,
    P_HCount36 = req.body.P_HCount36,
    P_HCount37 = req.body.P_HCount37,
    P_HCount38 = req.body.P_HCount38,
    P_HCount39 = req.body.P_HCount39;

  var A_Vol1 = req.body.A_Vol1,
    A_Vol2 = req.body.A_Vol2,
    A_Vol3 = req.body.A_Vol3,
    A_Vol4 = req.body.A_Vol4,
    A_Vol5 = req.body.A_Vol5,
    A_Vol6 = req.body.A_Vol6,
    A_Vol7 = req.body.A_Vol7,
    A_Vol8 = req.body.A_Vol8,
    A_Vol9 = req.body.A_Vol9,
    A_Vol10 = req.body.A_Vol10,
    A_Vol11 = req.body.A_Vol11,
    A_Vol12 = req.body.A_Vol12,
    A_Vol13 = req.body.A_Vol13,
    A_Vol14 = req.body.A_Vol14,
    A_Vol15 = req.body.A_Vol15,
    A_Vol16 = req.body.A_Vol16,
    A_Vol17 = req.body.A_Vol17,
    A_Vol18 = req.body.A_Vol18,
    A_Vol19 = req.body.A_Vol19,
    A_Vol20 = req.body.A_Vol20,
    A_Vol21 = req.body.A_Vol21,
    A_Vol22 = req.body.A_Vol22,
    A_Vol23 = req.body.A_Vol23,
    A_Vol24 = req.body.A_Vol24,
    A_Vol25 = req.body.A_Vol25,
    A_Vol26 = req.body.A_Vol26,
    A_Vol27 = req.body.A_Vol27,
    A_Vol28 = req.body.A_Vol28,
    A_Vol29 = req.body.A_Vol29,
    A_Vol30 = req.body.A_Vol30,
    A_Vol31 = req.body.A_Vol31,
    A_Vol32 = req.body.A_Vol32,
    A_Vol33 = req.body.A_Vol33,
    A_Vol34 = req.body.A_Vol34,
    A_Vol35 = req.body.A_Vol35,
    A_Vol36 = req.body.A_Vol36,
    A_Vol37 = req.body.A_Vol37,
    A_Vol38 = req.body.A_Vol38,
    A_Vol39 = req.body.A_Vol39;

  var A_HCount1 = req.body.A_HCount1,
    A_HCount2 = req.body.A_HCount2,
    A_HCount3 = req.body.A_HCount3,
    A_HCount4 = req.body.A_HCount4,
    A_HCount5 = req.body.A_HCount5,
    A_HCount6 = req.body.A_HCount6,
    A_HCount7 = req.body.A_HCount7,
    A_HCount8 = req.body.A_HCount8,
    A_HCount9 = req.body.A_HCount9,
    A_HCount10 = req.body.A_HCount10,
    A_HCount11 = req.body.A_HCount11,
    A_HCount12 = req.body.A_HCount12,
    A_HCount13 = req.body.A_HCount13,
    A_HCount14 = req.body.A_HCount14,
    A_HCount15 = req.body.A_HCount15,
    A_HCount16 = req.body.A_HCount16,
    A_HCount17 = req.body.A_HCount17,
    A_HCount18 = req.body.A_HCount18,
    A_HCount19 = req.body.A_HCount19,
    A_HCount20 = req.body.A_HCount20,
    A_HCount21 = req.body.A_HCount21,
    A_HCount22 = req.body.A_HCount22,
    A_HCount23 = req.body.A_HCount23,
    A_HCount24 = req.body.A_HCount24,
    A_HCount25 = req.body.A_HCount25,
    A_HCount26 = req.body.A_HCount26,
    A_HCount27 = req.body.A_HCount27,
    A_HCount28 = req.body.A_HCount28,
    A_HCount29 = req.body.A_HCount29,
    A_HCount30 = req.body.A_HCount30,
    A_HCount31 = req.body.A_HCount31,
    A_HCount32 = req.body.A_HCount32,
    A_HCount33 = req.body.A_HCount33,
    A_HCount34 = req.body.A_HCount34,
    A_HCount35 = req.body.A_HCount35,
    A_HCount36 = req.body.A_HCount36,
    A_HCount37 = req.body.A_HCount37,
    A_HCount38 = req.body.A_HCount38,
    A_HCount39 = req.body.A_HCount39;

  var prod1 = req.body.prod1;
  var prod2 = req.body.prod2;
  var prod3 = req.body.prod3;

  var couts1 = req.body.couts1;
  var couts2 = req.body.couts2;
  var couts3 = req.body.couts3;
  var couts4 = req.body.couts4;
  var couts5 = req.body.couts5;
  var couts6 = req.body.couts6;
  var couts7 = req.body.couts7;
  var couts8 = req.body.couts8;
  var couts9 = req.body.couts9;
  var couts10 = req.body.couts10;
  var couts11 = req.body.couts11;
  var couts12 = req.body.couts12;
  var couts13 = req.body.couts13;
  var couts14 = req.body.couts14;
  var couts15 = req.body.couts15;
  var couts16 = req.body.couts16;
  var couts17 = req.body.couts17;
  var couts18 = req.body.couts18;
  var couts19 = req.body.couts19;
  var couts20 = req.body.couts20;
  var couts21 = req.body.couts21;
  var couts22 = req.body.couts22;
  var couts23 = req.body.couts23;
  var couts24 = req.body.couts24;
  var couts25 = req.body.couts25;
  var couts26 = req.body.couts26;
  var couts27 = req.body.couts27;
  var couts28 = req.body.couts28;
  var couts29 = req.body.couts29;
  var couts30 = req.body.couts30;
  var couts31 = req.body.couts31;
  var couts32 = req.body.couts32;
  var couts33 = req.body.couts33;
  var couts34 = req.body.couts34;

  var author = {
    id: req.user._id,
    username: req.user.username
  };

  var newMetrics = {
    week: week,
    author: author,
    team: team,
    prod2: prod2,
    prod1: prod1,
    prod3: prod3,

    P_Vol1: P_Vol1,
    P_Vol2: P_Vol2,
    P_Vol3: P_Vol3,
    P_Vol4: P_Vol4,
    P_Vol5: P_Vol5,
    P_Vol6: P_Vol6,
    P_Vol7: P_Vol7,
    P_Vol8: P_Vol8,
    P_Vol9: P_Vol9,
    P_Vol10: P_Vol10,
    P_Vol11: P_Vol11,
    P_Vol12: P_Vol12,
    P_Vol13: P_Vol13,
    P_Vol14: P_Vol14,
    P_Vol15: P_Vol15,
    P_Vol16: P_Vol16,
    P_Vol17: P_Vol17,
    P_Vol18: P_Vol18,
    P_Vol19: P_Vol19,
    P_Vol20: P_Vol20,
    P_Vol21: P_Vol21,
    P_Vol22: P_Vol22,
    P_Vol23: P_Vol23,
    P_Vol24: P_Vol24,
    P_Vol25: P_Vol25,
    P_Vol26: P_Vol26,
    P_Vol27: P_Vol27,
    P_Vol28: P_Vol28,
    P_Vol29: P_Vol29,
    P_Vol30: P_Vol30,
    P_Vol31: P_Vol31,
    P_Vol32: P_Vol32,
    P_Vol33: P_Vol33,
    P_Vol34: P_Vol34,
    P_Vol35: P_Vol35,
    P_Vol36: P_Vol36,
    P_Vol37: P_Vol37,
    P_Vol38: P_Vol38,
    P_Vol39: P_Vol39,

    P_HCount1: P_HCount1,
    P_HCount2: P_HCount2,
    P_HCount3: P_HCount3,
    P_HCount4: P_HCount4,
    P_HCount5: P_HCount5,
    P_HCount6: P_HCount6,
    P_HCount7: P_HCount7,
    P_HCount8: P_HCount8,
    P_HCount9: P_HCount9,
    P_HCount10: P_HCount10,
    P_HCount11: P_HCount11,
    P_HCount12: P_HCount12,
    P_HCount13: P_HCount13,
    P_HCount14: P_HCount14,
    P_HCount15: P_HCount15,
    P_HCount16: P_HCount16,
    P_HCount17: P_HCount17,
    P_HCount18: P_HCount18,
    P_HCount19: P_HCount19,
    P_HCount20: P_HCount20,
    P_HCount21: P_HCount21,
    P_HCount22: P_HCount22,
    P_HCount23: P_HCount23,
    P_HCount24: P_HCount24,
    P_HCount25: P_HCount25,
    P_HCount26: P_HCount26,
    P_HCount27: P_HCount27,
    P_HCount28: P_HCount28,
    P_HCount29: P_HCount29,
    P_HCount30: P_HCount30,
    P_HCount31: P_HCount31,
    P_HCount32: P_HCount32,
    P_HCount33: P_HCount33,
    P_HCount34: P_HCount34,
    P_HCount35: P_HCount35,
    P_HCount36: P_HCount36,
    P_HCount37: P_HCount37,
    P_HCount38: P_HCount38,
    P_HCount39: P_HCount39,

    A_Vol1: A_Vol1,
    A_Vol2: A_Vol2,
    A_Vol3: A_Vol3,
    A_Vol4: A_Vol4,
    A_Vol5: A_Vol5,
    A_Vol6: A_Vol6,
    A_Vol7: A_Vol7,
    A_Vol8: A_Vol8,
    A_Vol9: A_Vol9,
    A_Vol10: A_Vol10,
    A_Vol11: A_Vol11,
    A_Vol12: A_Vol12,
    A_Vol13: A_Vol13,
    A_Vol14: A_Vol14,
    A_Vol15: A_Vol15,
    A_Vol16: A_Vol16,
    A_Vol17: A_Vol17,
    A_Vol18: A_Vol18,
    A_Vol19: A_Vol19,
    A_Vol20: A_Vol20,
    A_Vol21: A_Vol21,
    A_Vol22: A_Vol22,
    A_Vol23: A_Vol23,
    A_Vol24: A_Vol24,
    A_Vol25: A_Vol25,
    A_Vol26: A_Vol26,
    A_Vol27: A_Vol27,
    A_Vol28: A_Vol28,
    A_Vol29: A_Vol29,
    A_Vol30: A_Vol30,
    A_Vol31: A_Vol31,
    A_Vol32: A_Vol32,
    A_Vol33: A_Vol33,
    A_Vol34: A_Vol34,
    A_Vol35: A_Vol35,
    A_Vol36: A_Vol36,
    A_Vol37: A_Vol37,
    A_Vol38: A_Vol38,
    A_Vol39: A_Vol39,

    A_HCount1: A_HCount1,
    A_HCount2: A_HCount2,
    A_HCount3: A_HCount3,
    A_HCount4: A_HCount4,
    A_HCount5: A_HCount5,
    A_HCount6: A_HCount6,
    A_HCount7: A_HCount7,
    A_HCount8: A_HCount8,
    A_HCount9: A_HCount9,
    A_HCount10: A_HCount10,
    A_HCount11: A_HCount11,
    A_HCount12: A_HCount12,
    A_HCount13: A_HCount13,
    A_HCount14: A_HCount14,
    A_HCount15: A_HCount15,
    A_HCount16: A_HCount16,
    A_HCount17: A_HCount17,
    A_HCount18: A_HCount18,
    A_HCount19: A_HCount19,
    A_HCount20: A_HCount20,
    A_HCount21: A_HCount21,
    A_HCount22: A_HCount22,
    A_HCount23: A_HCount23,
    A_HCount24: A_HCount24,
    A_HCount25: A_HCount25,
    A_HCount26: A_HCount26,
    A_HCount27: A_HCount27,
    A_HCount28: A_HCount28,
    A_HCount29: A_HCount29,
    A_HCount30: A_HCount30,
    A_HCount31: A_HCount31,
    A_HCount32: A_HCount32,
    A_HCount33: A_HCount33,
    A_HCount34: A_HCount34,
    A_HCount35: A_HCount35,
    A_HCount36: A_HCount36,
    A_HCount37: A_HCount37,
    A_HCount38: A_HCount38,
    A_HCount39: A_HCount39,

    couts1: couts1,
    couts2: couts2,
    couts3: couts3,
    couts4: couts4,
    couts5: couts5,
    couts6: couts6,
    couts7: couts7,
    couts8: couts8,
    couts9: couts9,
    couts10: couts10,
    couts11: couts11,
    couts12: couts12,
    couts13: couts13,
    couts14: couts14,
    couts15: couts15,
    couts16: couts16,
    couts17: couts17,
    couts18: couts18,
    couts19: couts19,
    couts20: couts20,
    couts21: couts21,
    couts22: couts22,
    couts23: couts23,
    couts24: couts24,
    couts25: couts25,
    couts26: couts26,
    couts27: couts27,
    couts28: couts28,
    couts29: couts29,
    couts30: couts30,
    couts31: couts31,
    couts32: couts32,
    couts33: couts33,
    couts34: couts34
  };

  // Create a new campground and save to DB
  Campground.create(newMetrics, function(err, newlyCreated) {
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

router.get("/showITB_month", function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/showITB_month", { monthITB: allCampgrounds });
    }
  });
});

router.get("/aug", function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/aug", { monthITB: allCampgrounds });
    }
  });
});

router.get("/sep", function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/sep", { monthITB: allCampgrounds });
    }
  });
});

router.get("/oct", function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/oct", { monthITB: allCampgrounds });
    }
  });
});

router.get("/nov", function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/nov", { monthITB: allCampgrounds });
    }
  });
});

router.get("/dec", function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/dec", { monthITB: allCampgrounds });
    }
  });
});

router.get("/q3", function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/q3", { monthITB: allCampgrounds });
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
      res.redirect("/campgrounds/itbshow");
    } else {
      res.redirect("/campgrounds/itbshow");
    }
  });
});

//  profile
router.get("/profile", function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/profile", { campgrounds: allCampgrounds });
    }
  });
});

module.exports = router;
