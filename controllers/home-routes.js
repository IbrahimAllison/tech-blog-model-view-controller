const router = require("express").Router();
const { BlogPost, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
  // These codes find all posts with associated usernames
    const blogPostData = await BlogPost.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    // The code converts post data to plain JavaScript object
    const posts = blogPostData.map((post) => post.get({ plain: true }));
    // The codes below render homepage template with posts and login status
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Codes to render individual blog post page.
router.get("/post/:id", withAuth, async (req, res) => {
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

    const post = blogPostData.get({ plain: true });
    // Codes to render post template with post data and login status
    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Codes to render dashboard page with all blog posts by current user
// It also find all posts by current user with associated usernames
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User, attributes: ["username"] }],
    });
    // Codes to convert blog post data to plain JavaScript object
    const blogPosts = blogPostData.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      blogPosts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Codes to render login page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});

router.get("/newBlogPost", (req, res) => {
  if (req.session.logged_in) {
    res.render("newpost");
    return;
  }
  res.redirect("/login");
});

// Codes to render the edit blog post page
router.get("/edit-post/:id", async (req, res) => {
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

    const post = blogPostData.get({ plain: true });

    res.render("editpost", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
