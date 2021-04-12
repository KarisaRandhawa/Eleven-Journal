const Sequelize = require ('sequelize');

const sequelize = new Sequelize("postgres://postgres:bdc75cfba590445cb9a516e33d592d4b@localhost:5432/eleven-journal");

module.exports = sequelize;