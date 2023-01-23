const sequelize = require('../config/connection');
const userData = require('./userData.json');
const gameData = require('./gameData.json')
const { User } = require('../models/')
const { Game } = require('../models/')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
    });

    process.exit(0);
};

const seedGames = async () => {
    await sequelize.sync({ force: true });

    await Game.bulkCreate(gameData, {
    individualHooks: true,
    returning: true,
    });

    process.exit(0);
};

seedDatabase();
seedGames();