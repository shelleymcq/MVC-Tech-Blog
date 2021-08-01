const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'That is crazy!!',
        user_id: 2,
        blog_id: 1,
    },
    {
        comment_text: 'I refuse to believe it! Not the Anakin I know!',
        user_id: 1,
        blog_id: 2,
    },
    {
        comment_text: 'Will wonders never cease!!',
        user_id: 1,
        blog_id: 3,
    },

]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;