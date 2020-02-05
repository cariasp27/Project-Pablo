const router = require("express").Router();
const blogController = require("../../controllers/blogController");

// Matches with "/api/blog"
router.route("/getrecentfeed")
  .get(blogController.findAll)
  .post(blogController.create);

router
  .route("/:id")
  .get(blogController.findById)
  .put(blogController.update)
  .delete(blogController.remove);

module.exports = router;
