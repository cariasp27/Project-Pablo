const router = require("express").Router();
const blogRoutes = require("./blog");

// Book routes
router.use("/blog", blogRoutes);

module.exports = router;
