const { Sequelize, DataTypes } = require('sequelize');
//const sequelize = new Sequelize(require('../config/dbConfig'));
const sequelize = require('../config/sequelizeSync')
const ContactDetails = require('./contactDetails')

const Employee = sequelize.define('employee', {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  department: {
    type: DataTypes.STRING,
  },
});

Employee.hasMany(ContactDetails, {as: 'contactDetails'})

/*Employee.sync().then(() => {
    console.log('employee model synced');
}).catch((err) => {
  console.error('Error syncing Employee model:', err);
})*/

module.exports = Employee;