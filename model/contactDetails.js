const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelizeSync')

const ContactDetails = sequelize.define('contactDetails', {
    type: {
        type: DataTypes.STRING,
      },
    value: {
        type: DataTypes.STRING,
    },
});

/*ContactDetails.sync().then(() => {
    console.log('Contact synced');
}).catch((err) => {
  console.error('Error syncing Contact model:', err);
})*/

module.exports = ContactDetails;