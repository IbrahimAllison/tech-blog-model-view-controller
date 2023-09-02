const { Post } = require("../models");

const postData = [
  {
    title: "My First Tech Blog Post",
    content: "This is the content of my first tech blog post.",
    user_id: 1,
  },
  {
    title: "My Second Tech Blog Post",
    content: "This is the content of my second tech blog post.",
    user_id: 2,
  },
  {
    title: "My Third Tech Blog Post",
    content: "This is the content of my third tech blog post.",
    user_id: 3,
  },
  {
    title: "My Fourth Tech Blog Post",
    content: "This is the content of my fourth tech blog post.",
    user_id: 4,
  },
  {
    title: "My Fifth Tech Blog Post",
    content: "This is the content of my fifth tech blog post.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;