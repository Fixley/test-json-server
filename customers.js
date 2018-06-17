// customers
const faker = require('faker');

function generateCustomers() {
  const customers = [];
  
  for (let id = 1; id <= 50; id += 1) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let phoneNumber = faker.phone.phoneNumberFormat();
    
    customers.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "phone": phoneNumber
    });
  }
  
  return { "customers": customers };

}

module.exports = generateCustomers;