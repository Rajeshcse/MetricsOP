var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   week: String,
   month: String,
   couts1:String,couts2:String,couts3:String,couts4:String,couts5:String,couts6:String,couts7:String,couts8:
    String,couts9:String,couts10:String,couts11:String,couts12:String,
    pv1:Number,
    pv2:Number,
    pv3:Number,
    pv4:Number,
    pv5:Number,
    pv6:Number,
    pv7:Number,
    pv8:Number,
    pv9:Number,
    pv10: Number,
    pv11: Number,
    pv12:Number,
    pv12:Number,pv13:Number,pv14:Number,pv15:Number,pv16:Number,pv17:Number,pv18:Number,pv19:Number,pv20:Number,pv21:Number,
    pv22:Number,pv23:Number,pv24:Number,pv25:Number,pv26:Number,pv27:Number,pv28:Number,pv29:Number,pv30:Number,pv31:Number,
    pv32:Number,pv33:Number,pv34:Number,pv35:Number,pv36:Number,pv37:Number,pv38:Number,pv39:Number,pv40:Number,pv41:Number,
    pv42:Number,pv43:Number,pv44:Number,pv45:Number,
    
   created: { type :Date , default: Date },
   
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

module.exports = mongoose.model("Campground", campgroundSchema);



