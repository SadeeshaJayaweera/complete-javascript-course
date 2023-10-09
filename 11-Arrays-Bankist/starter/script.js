'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; */

/////////////////////////////////////////////////

//Lecture 1 - Simple Array Methods 🧑‍💻

//As same as Strings arrays has similar methods 
 let arr = ['a', 'b' ,'c', 'd', 'e'];

 // SLICE - Method - Does not change the primary Array 
 console.log(arr.slice(2)); // slice use to select part of the array without changing the primary array 
 console.log(arr.slice(2,4));//starter index and end index which prints elements between them 
 console.log(arr.slice(-2));
 console.log(arr.slice(-1)); 
 console.log(arr.slice(1, -2));
 console.log(arr.slice());
 console.log([...arr]);

//SPLICE - Method - Does change the Primary Array (Mutate)

console.log(arr.splice(2));
arr.splice(-1); // Removes the last element of the array
console.log(arr);
arr.splice(1, 2);// Removes the elements between the index of 1 and 2 
console.log(arr);

// REVERSE - Method (Mutate)

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);


// CONCAT - Method - Does Not Mutate and make a one array with all the elements 
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // another way to acheive concat (Spread Operator)

// JOIN - Method 
console.log(letters.join(' - '));// Join Elemets within the array 

//Lecture 2 - The new at Method  🧑‍💻

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

// getting last array element
console.log(arr3[arr3.length - 1]);//Getting the element in index -1 and display inn an array
console.log(arr3.slice(-1)[0]);//getting the elemnent in index -1 and display the value 

// This is the new method of getting a specif element of an array 
console.log(arr3.at(-1));

// At Method also works for Strings 
console.log('jonas'.at(0));
console.log('jonas'.at(-1));

//Lecture 3 -  Looping Arrays: ForEach 🧑‍💻
 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const [i, movement ] is an array and i use to make the movement (index of the elements )
//Movement is a variable to store data of the array temporily 
//entries() method is used to get both the index i and the movement 
for (const [i, movement] of movements.entries()) 
{
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// The Same using the ForEach Method 

console.log('\n');

// we can use any parameter name rather movement 
// Function parameter order should not change as 1. variable, 2. index, 3. array
// The difference between these two methods is forEach does not allow break from the loop and iterates all the elemenst of the array 
// arr is just to demonstrate the order and to stick with it 
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// Hpw the Mov takes the elements from the array and run the function 
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...