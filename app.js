var connectDB = require("./config/db");
connectDB();

var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  flash = require("connect-flash"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  methodOverride = require("method-override"),
  Campground = require("./models/campground"),
  Gok = require("./models/gok"),
  Comment = require("./models/comment"),
  User = require("./models/user"),
  seedDB = require("./seeds");
// mongodb+srv://rparaman:<password>@cluster0-owy2w.mongodb.net/test?retryWrites=true&w=majority
//requiring routes
var commentRoutes = require("./routes/comments"),
  campgroundRoutes = require("./routes/campgrounds"),
  gokRoutes = require("./routes/gokMetrics"),
  indexRoutes = require("./routes/index");

mongoose.connect("mongodb://localhost/yelp_camp_v10", { useMongoClient: true });
// mongoose.connect(
//   "mongodb+srv://rparaman:Geek123@cluster0-owy2w.mongodb.net/test?retryWrites=true",
//   {
//     useNewUrlParser: true,
//     useCreateIndex: true
//   }
// );
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); //seed the database
// PASSPORT CONFIGURATION
app.use(
  require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/gokMetrics", gokRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
