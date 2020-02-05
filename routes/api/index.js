const router = require("express").Router();
const blogRoutes = require("./blog.js");

// blog routes
router.use("/blog", blogRoutes);

module.exports = router;
