var mongoose = require("mongoose");
var gokSchema = new mongoose.Schema({
  team: String,
  gokcouts1: String,
  gokcouts2: String,
  gokcouts3: String,
  gokcouts4: String,
  gokcouts5: String,
  gokcouts6: String,
  gokcouts7: String,
  gokcouts8: String,
  gokcouts9: String,
  gokcouts10: String,
  gokcouts11: String,
  gokcouts12: String,
  gok1: Number,
  gok2: Number,
  gok3: Number,
  gok4: Number,
  gok5: Number,
  gok6: Number,
  gok7: Number,
  gok8: Number,
  gok9: Number,
  gok10: Number,
  gok11: Number,
  gok12: Number,
  gok12: Number,
  gok13: Number,
  gok14: Number,
  gok15: Number,
  gok16: Number,
  gok17: Number,
  gok18: Number,
  gok19: Number,
  gok20: Number,
  gok21: Number,
  gok22: Number,
  gok23: Number,
  gok24: Number,
  gok25: Number,
  gok26: Number,
  gok27: Number,
  gok28: Number,
  gok29: Number,
  gok30: Number,

  created: { type: Date, default: Date },
  week: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Gok", gokSchema);
