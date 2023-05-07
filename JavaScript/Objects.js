// Amigosecode

var person = {
  firstName: 'Jamila',
  age: 21,
  isFemale: true,
  balance: 100.32,
  dob: new Date(2000, 1, 28).toJSON(),
  address: {
    city: 'London',
    postCode: 'SW9',
  },
};

console.log(person.firstName);
console.log(person.age);
console.log(person.balance);
console.log(person.address.city);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));

//Asraful Haq

const student = [
  [01, 'Asraf', 20, 'Mirpur'],
  [02, 'Jillur', 10, 'uttora'],
  [03, 'Rahim', 120, 'Gulsan'],
  [04, 'Karim', 200, 'Danmondi'],
];

for (let i = 0; i < student.length; i++) {
  console.log(student[i]);
}

const student = {
  roll: 1,
  name: 'Asraful Haque',
  age: 10,
  location: 'Mirpur',
};

console.log(`My name is ${student.name} & I am ${student.age} years old`);

