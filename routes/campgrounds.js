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
  res.render("campgrounds/itb");
});

router.post("/itbshow", function(req, res) {
  // get data from form and add to campgrounds array
  var team = req.body.team;
  var week = req.body.week;

  
  var pv1 = req.body.pv1 , pv2 = req.body.pv2 ,pv3 = req.body.pv3 ,pv4 = req.body.pv4 ,pv5 = req.body.pv5 , pv6 = req.body.pv6, 
  pv7 = req.body.pv7, pv8 = req.body.pv8, pv9 =req.body.pv9, pv10 =req.body.pv10, pv11 = req.body.pv11,
  pv12= req.body.pv12,  pv13 = req.body.pv13, pv14 = req.body.pv14, pv15 = req.body.pv15,
  pv16= req.body.pv16, pv17 = req.body.pv17, pv18 = req.body.pv18, pv19 = req.body.pv19, pv20 = req.body.pv20, pv21 = req.body.pv21,
  pv22= req.body.pv22,pv23 = req.body.pv23,  pv24 = req.body.pv24, pv25 = req.body.pv25, pv26 = req.body.pv26, pv27 = req.body.pv27, 
  pv28 = req.body.pv28, pv29 = req.body.pv29, pv30 = req.body.pv30, pv31 = req.body.pv31, pv32 = req.body.pv32, pv33 = req.body.pv33,
  pv34 = req.body.pv34, pv35 = req.body.pv35, pv36 = req.body.pv36,pv37 = req.body.pv37, pv38 = req.body.pv38,
  pv39 = req.body.pv39,pv40 = req.body.pv40, pv41 = req.body.pv41, pv42 = req.body.pv42, pv43 = req.body.pv43,
  pv44 = req.body.pv44,pv45 = req.body.pv45, pv46 = req.body.pv46, pv47 = req.body.pv47, pv48 = req.body.pv48,
  pv49 = req.body.pv49,pv50 = req.body.pv50, pv51 = req.body.pv51, pv52 = req.body.pv52;


  var prod1 =  req.body.prod1;
  prod1 = (req.body.pv3 / req.body.pv4)/5 ;
  
  var prod2 = req.body.prod2;
  var prod3 = req.body.prod3;

  var couts1 = req.body.couts1;
  var couts2 = req.body.couts2;


  var author = {
    id: req.user._id,
    username: req.user.username
  };

  var newMetrics = {
    week: week,
    author: author,
    team: team,
    prod2:prod2,
    prod1:prod1,
    prod3:prod3,
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
      res.redirect("/campgrounds");
    } else {
      res.redirect("/campgrounds");
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
