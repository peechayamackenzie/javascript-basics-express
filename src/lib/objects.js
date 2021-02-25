const numbers = require("./numbers");

const createPerson = (name, age) => {
  return person = {
    name: name, 
    age: age
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object.age;
};

const hasProperty = (property, object) => {
  return property in object;
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(a => a.age);
};

const findByName = (name, people) => {
  return people.find(names => names.name === name);
};

const findHondas = cars => {
  return cars.filter(honda => honda.manufacturer === 'Honda');
};

const averageAge = people => {
  let Age = people.map(a => a.age);
  totalage = Age.reduce((acc, age) => (acc + age), 0);
  return totalage / people.length;
};

const createTalkingPerson = (name, age) => {
  let person = {
    name: name,
    age: age,
    introduce: function(friend) {
      return "Hi " + friend + ", my name is " + name + " and I am " + age + "!"
    }
  };
  return person
};

/*Solution from Miguel
const createTalkingPerson = (name, age) => {
  this.name = name;
  this.age = age;
  this.introduce = (Fred) => {
      return "Hi " + Fred + ", my name is " + this.name + " and I am " + this.age + "!"
    }
   return this;
  };*/

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
