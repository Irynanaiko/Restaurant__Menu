const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Categories = sequelize.define('categories', {
    id: {type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true},
    name: {type: DataTypes.STRING, unique:true, allowNull: false}
});
 
const Items = sequelize.define('items', {
    id: {type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true},
    name: {type: DataTypes.STRING, unique:true, allowNull: false, unique:true},
    descr: {type: DataTypes.STRING, unique:true},
    weight: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    available: {type: DataTypes.BOOLEAN, defaultValue: true}
});

const Restaurant_info = sequelize.define('restaurant_info', { 
    id: {type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true},
    name: {type: DataTypes.STRING, unique:true, allowNull: false},
    email: {type: DataTypes.STRING, unique:true, allowNull: false},
    website: {type: DataTypes.STRING, unique:true, allowNull: false},
    logo: {type: DataTypes.STRING, unique:true, allowNull: false},
    address: {type: DataTypes.STRING, unique:true, allowNull: false},
    wifi: {type: DataTypes.STRING, unique:true, allowNull: false}
});

Categories.hasMany(Items);
Items.belongsTo(Categories);

module.exports = {
    Categories,
    Items,
    Restaurant_info
}