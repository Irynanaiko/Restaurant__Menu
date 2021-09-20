require('dotenv').config({path:__dirname+'/server/.env'});
const { Sequelize } = require('sequelize');

    
    module.exports = new Sequelize(
        "postgres://postgres:postgres@localhost/restaurant_menu",
        {   
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }
); 