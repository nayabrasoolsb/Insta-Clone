const moggoose = require("mongoose");
var moment = require("moment");
const instaSchema = moggoose.Schema({
  name: { type: String, required: true },
  location: String,
  imageUrl: {
    imageUrl: { type: String },
    public_id: { type: String, required: true },
  },
  date: { type: Date, default: Date.now() },
  description: String,
});

const InstaPost = moggoose.model("InstaPost", instaSchema);

module.exports = InstaPost;
