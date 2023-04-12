const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(require('../config/dbConfig'));

const Employee = sequelize.define('employee', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING
});

Employee.sync().then(() => {
    console.log('User model synced');
}).catch((err) => {
  console.error('Error syncing User model:', err);
})

module.exports = Employee;