const person = {
    firstName: "John",
    lastName: "Doe",
    age: 35;
    email: "john@gmail.com",
    address: {
      city: "Manikganj",
      zipCode: 1800
    },
    getBirthYear: function(){
      return 1987;
    }   
}

let value;

value = person;

// Specific value
value = person.firstName;
value = person['firstName'];
value = person.age;
value = person.address.city;
value = person.address.zipCode;
value = person.getBirthYear();
 

// output 
console.log(value);

