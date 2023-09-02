const router = require("express").Router();
const { BlogPost, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Code snippets to get all posts with associated username
router.get("/", async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get blog post data by ID with associated username and comments
router.get("/:id", async (req, res) => {
  try {
    const blogPostData = await BlogPost.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });
    if (!blogPostData) {
      res.status(404).json({ message: "There is no blog post identified with that id!" });
      return;
    }
    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Code snippets to create a new blog post with authenticated user
router.post("/", withAuth, async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Codes to Update an existing blog post with an authenticated user
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatedBlogPost = await BlogPost.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updatedBlogPost) {
      res.status(404).json({ message: "There is no blog post identified with that id!" });
      return;
    }
    res.status(200).json(updatedBlogPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Code snippets to delete a blog post with an authenticated user
router.delete("/:id", withAuth, async (req, res) => {
  try {
    // The codes below delete all comments related to the blog post.
    await Comment.destroy({
      where: { post_id: req.params.id },
    });

    const deletedBlogPost = await BlogPost.destroy({
      where: { id: req.params.id },
    });

    if (!deletedBlogPost) {
      res.status(404).json({ message: "There is no blog post identified with that id!" });
      return;
    }
    res.status(200).json(deletedBlogPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;