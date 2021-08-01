const { User } = require('../models');

const userData = [
    {
        name: 'Ahsoka Tano',
        email: 'ahsoka@gmail.com',
        password: 'password123',
    },
    {
        name: 'Boba Fett',
        email: 'boba@gmail.com',
        password: 'password123',
    },
    {
        name: 'Enfys Nest',
        email: 'enfys@gmail.com',
        password: 'password123',
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;