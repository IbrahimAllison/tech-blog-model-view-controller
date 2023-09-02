const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// The codes snippets below create a new comment
router.post("/", withAuth, async (req, res) => {
  try {    
    // The code snippets will create a new comment with the provided data
    const createdComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    // The code will send a response with the new comment data
    res.status(200).json(createdComment);
  } catch (err) {
  
    res.status(400).json(err);
  }
});

module.exports = router;