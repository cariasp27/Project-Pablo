
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

// Define Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// Serve static assests
if (process.env.NODE_ENV === "production") {
    app.use (express.static("client/build"));
}
// Routes
app.use(routes);

// Connect to the Mongo Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project-pablo")

// Start the API Server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  