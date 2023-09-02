const User = require("./user");
const BlogPost = require("./blogPost");
const Comment = require("./comment");

// The codes define the associations between the models
User.hasMany(BlogPost, {
  foreignKey: "user_id", 
});

BlogPost.belongsTo(User, {
  foreignKey: "user_id", 
});

Comment.belongsTo(User, {
  foreignKey: "user_id", 
});

Comment.belongsTo(BlogPost, {
  foreignKey: "post_id", 
});

BlogPost.hasMany(Comment, {
  foreignKey: "post_id", 
});

User.hasMany(Comment, {
  foreignKey: "user_id", 
});

module.exports = { User, BlogPost, Comment };