const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

// Set up routes
router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;