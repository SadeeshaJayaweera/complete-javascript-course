'use strict';

//Scoping in Pratice - Lecture 🧑‍💻

/* function calcAge(birthYear){
    const age = 2023 - birthYear;
    console.log(firstName); // Firstname is accessible since it is a global variable 
    return age;
} */

function calcAge(birthYear){
    const age = 2023 - birthYear;

    function printAge(){
        let output = `${firstName} You are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;

            //Creating a new Variable with the same name as Outer Scope's Variable 
            const firstName = 'steven';

            //Reassigning outer scope's Variable
            output = 'NEW OUTPUT';
            
            const str = `oh, and you're not a millenial, ${firstName}`;
            console.log(str);
        }
        //console.log(str); not accessible as it is outside the block (if condition)
        console.log(millenial); // is accesible since var bypass the block and work if its in the same function 
    }
    printAge(); /* it can access the age and birthyear variables since they are within the scope 
    firstname is not in the scope so it check for the global scope to find it  */
    return age;


}

/* console.log(millenial);not work not in the function  */


const firstName = 'Sadeesha';
calcAge(1992);

//Not in Global Scope 
/* console.log(age); //no access outside the scope and not a global variable  */



// Hoisting - Lecture 🧑‍💻

// Hoisting and TDZ in Practice

// Variables
console.log(me); //undefined 
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3)); //only this type of functions can only work before the declaration 
// console.log(addExpr(2, 3));
// console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

/* const addExpr = function (a, b) {
  return a + b;
}; */

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


///////////////////////////////////////
//This Keyword Practice - Lecture 🧑‍💻

// The this Keyword in Practice - ⛔️ check seperately same calcAge function defined abovee 
console.log(this);

/* const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
}; */
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

/* const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
}; 
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

*/

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
      // console.log(this);
      console.log(2037 - this.year);
  
      // Solution 1
      // const self = this; // self or that
      // const isMillenial = function () {
      //   console.log(self);
      //   console.log(self.year >= 1981 && self.year <= 1996);
      // };
  
      // Solution 2
      const isMillenial = () => {
        console.log(this);
        console.log(this.year >= 1981 && this.year <= 1996);
      };
      isMillenial();
    },
  
    greet: () => {
      console.log(this);
      console.log(`Hey ${this.firstName}`);
    },
  };
  jonas.greet();
  jonas.calcAge();
  
  // arguments keyword
  const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
  };
  addExpr(2, 5);
  addExpr(2, 5, 8, 12);
  
  var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
  };

//   addArrow(2, 5, 8);


  // Primitivee Vs Objects - Lecture 🧑‍💻

  // Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge); // 

const me2 = {
  name: 'Jonas',
  age: 30,
};


/* in here the friend and me is defined equal both will get same memory addreess stores in ths stack so when a change 
is made to any value one of us it will reflect to both objects */

const friend = me2;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me2);  



// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //create a new object exactly same as jessica2 with same values 
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');// This does not work for object inside an object as it changes on both objects as example family obj changes on both objects 
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);