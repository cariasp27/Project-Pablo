const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: false },
  section: { type: String, required: false },
  body: {type: String},
  date: { type: Date, default: Date.now }
});

const BlogPost = mongoose.model("BlogPost", blogSchema);

module.exports = BlogPost;
