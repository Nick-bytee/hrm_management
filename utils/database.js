const Sequelize = require('sequelize')

const sequelize = new Sequelize('hrm_management', 'root', 'Root123@#', {host : 'localhost', dialect : 'mysql'})

module.exports = sequelize