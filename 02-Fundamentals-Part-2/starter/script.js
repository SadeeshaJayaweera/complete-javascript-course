'use strict'; //Good Programming Practice to find the bugs in the code.

function logger()
{
    console.log("My Name is Sadeesha");
}

//callung / running / invoking function 
logger();
logger();
logger();

console.log("\n");

function fruitProcessor(apples,oranges)
{
    console.log(apples,oranges); //a simple block of code 
    const juice = `Juice with ${apples} Apples and ${oranges} Oranges. `;
    return juice;
}


//calling the paramerized function 
const juice1 = fruitProcessor(2,6);  //assigninng the return data to a variable called juice1
console.log(juice1);

const juice2 = fruitProcessor(3,3);
console.log(juice2);


console.log(fruitProcessor(5,7)); // Printing the Return Value without assigning the data to a variable 

console.log("\n");


// Lecture - Function Declarations vs Expressions 🧑‍💻

//Function Declaration 
function calcAge1(birthYear)
{
    return 2023-birthYear;
}

const age1 = calcAge1(2000);

//Function Expressions

const calcAge2 = function (birthYear)
{
    return 2023-birthYear;
}

const age2 = calcAge2(2000);

//Printing the Both Functions 
console.log(age1,age2);


// This is an Additional Code Wrote to get the input From the User

/* function CalculateAge(birthYear)
{
    birthYear =prompt("Please Enter Your Birth Year");
    const age=(2023-birthYear);
    return age;
}


const SadeeshaAge = CalculateAge();
console.log(SadeeshaAge);
 */