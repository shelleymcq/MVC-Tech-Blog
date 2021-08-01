const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Blog, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

// I don't want to delete a user's comments, but I'm not sure how that would work???
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Blog, Comment };
