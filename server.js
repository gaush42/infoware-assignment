const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./config/sequelizeSync');

const app = express()
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000

const Employee = require('./model/employee')
const ContactDetails = require('./model/contactDetails')
const dataGenerator = require('./dataGenerator')

async function syncTables() {
  try {
    await sequelize.sync({ force: false });
    console.log('Tables synced successfully');
  } catch (error) {
    console.error('Error syncing tables', error);
  }
}

/*const createEmployeeWithContactDetails = async () => {
  const employee = await Employee.create({
    firstName: 'Bajaj',
    lastName: 'Doe',
    department: 'CEO',
  });

  await ContactDetails.bulkCreate([
    //{ type: 'phone', value: '123-456-7890', EmployeeId: employee.id },
    { type: 'email', value: 'bdoe@example.com', EmployeeId: employee.id },
  ]);

  console.log('Employee and contact details created');
};*/

syncTables();
//createEmployeeWithContactDetails();
//dataGenerator();

app.listen(PORT, () => {
    console.log('Server started on port 3000');
  });

