const { faker } = require('@faker-js/faker');
const Employee = require('./model/employee');
const ContactDetail = require('./model/contactDetails');

async function generateEmployees() {
  try {
    let c = 0;
    for (let i = 0; i < 20; i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const department = faker.name.jobTitle();

      const employee = await Employee.create({
        firstName,
        lastName,
        department,
      });

      const email = faker.internet.email(firstName, lastName);
      const phone = faker.phone.phoneNumberFormat();

      const contactDetail1 = await ContactDetail.create({
        type: 'email',
        value: email,
        employeeId: employee.id,
      });

      if(c===2){
        const contactDetail2 = await ContactDetail.create({
            type: 'phone',
            value: phone,
            employeeId: employee.id,
        });
        c=0;
      }
      c++;

      console.log(`Employee ${firstName} ${lastName} created `);
    }
  } catch (error) {
    console.error('Error creating employees', error);
  }
}

module.exports = generateEmployees;