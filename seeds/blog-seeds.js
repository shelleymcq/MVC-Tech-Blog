const { Blog } = require('../models');

const blogData = [
    {
        title: 'Save Raada!',
        blog_text: 'The Empire has taken over the farming operations on the planet and are destroying the soil. There will be nothing left for the people of Raada!',
        user_id: 1,
    },
    {
        title: 'The Potential Dangers of Carbon Freezing',
        blog_text: 'I am just about to get the bounty of a lifetime when Vader decides he is going to freeze Solo. What am I going to do with a smuggler pospsicle?',
        user_id: 2,
    },
    {
        title: 'I know you thought I was a boy :D',
        blog_text: 'The true adventures of Enfys Nest at the beginning of the Rebellion against the Empire.',
        user_id: 3,
    },
]

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;