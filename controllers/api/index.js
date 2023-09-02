const router = require("express").Router();
const customUserRoutes = require("./user-routes");
const tailoredPostRoutes = require("./post-routes");
const customCommentRoutes = require("./comment-routes");

// Code snippets for setting up the routes
router.use("/users", customUserRoutes); 
router.use("/posts", tailoredPostRoutes); 
router.use("/comments", customCommentRoutes); 

module.exports = router;