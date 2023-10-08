'use strict';

// Lecture 1 - Default Parameters 🧑‍💻

const bookings = [];  // empty array to add the values 

const createBooking = function (
  flightNum,
  numPassengers = 1, //if the parameter is null the default value will be 1 
  price = 199 * numPassengers
) 
{
  // ES5 - way to make defaullt values 
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking); // displaying the values in the console 
  bookings.push(booking); //inserting the values to the array 
};

//calling the function 

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000); //undefined used to make specific parameter value null

 console.log('\n');
 
//Lecture 2 - How Passing Arguments Works: Value vs Objects 🧑‍💻

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

//Lecture 3 - First Class Vs Higher order Functions 🧑‍💻
/*
  --First Class Functions --

   Javascript treat functions as first-class citizens 
   This means that functions are simply values
   Functions are another type of object 

   --Higher Order Functionns ---
   A function that receives another function as an argument that 
   returns a new function or both 

   This is only be possible because of first class functions 
   see the bellow example 

   const greet = () => console.log('Hey Jonas );  function expression
   btnClose.addEventListener('click' ,greet); in here addEventListner is a High order 
   funnction which greet is a call back function 

   which means when the btn is clicked first and display the greeting function 

   Another example - function that returns new function 
   function count (){ // Higher order function
    let counter = 0;
    return function(){   // returned function 
      counter ++;
    };
   }
*/

//Lecture 4 - Functions Accepting Callback Functions 🧑‍💻

//str is a string parameter replace and toLowerCase are built in funnctions 
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

//toUpperCase, split and Join are bulit in functions 
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function

// This function returns a parameters as a string and a function 
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

//calling the functions 
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

//calling the functionn thrice using the for each Loop 
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

// Lecture 5 - Functions Returning Functions 🧑‍💻

const greet = function (greeting){
  return function(name){
    console.log(`${greeting} ${name}`);
  };
};

//calling the function

const greeterHey = greet('Hey'); 
// This function calls function inside the greet function as greeterHey Variable is equal to the greet function 
greeterHey('Sadeesha'); 
greeterHey('Oneli');

// Another way to call the function 
greet('Hello')('Sadeesha'); // this passes the parameters directly to both funnctions 

//converting the above function to arrow function  - My solution 
// without a variable assigning to arrow functionn it will not work due to strict mode in js 

/* const greet = (greeting) => {   
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
}; */

// Arrow Function Jonas Solution 
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas'); //calling the arrow funnction

// Lecture 6 - The Call and Apply Methods 🧑‍💻

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');  // Therefore we use call method to select the object which to store and access data 

// Call method
book.call(eurowings, 23, 'Sarah Williams');//call method selects the eurowings object
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');//call the lufthansa object 
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');


// Apply method - Practically Not Used as Call is the most prefered 
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // can do the same above using the call method 

// Lecture 7 - The Bind Method 🧑‍💻

// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// solution for the above two code blocks from one function code block 
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate; // value = value + (value * rate )
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); //123
console.log(addVAT2(23));  //28.29


//Lecture 8 - Coding Challenge 🧑‍💻

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    // Type of the answer should be a number, not be a number out of the array and increasing the position of the answer array
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));


//Bonus Part
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
