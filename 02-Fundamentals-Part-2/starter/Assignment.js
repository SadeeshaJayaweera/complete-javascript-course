'use strict';
// This File Contains all the answers to the Assignment Section - Funcamentals 2
console.log('\n');

// Lecture - Functions 🧑‍💻
function describeCountry(country, population, capitalCity)
{
    console.log(`" ${country} has ${population} million people and its capital city is  ${capitalCity} "`);
}

//calling the function 
describeCountry("Sri Lanka", 21, "Sri Jayawardhanapura",);
describeCountry("USA", 331, "New York");
describeCountry("Canada",38.5,"Ottawa");

console.log('\n');

// Lecture - Function Declaration vs Expressions 🧑‍💻
function percentageOfWorld1(population)
{
    const Percentage = (population/7900)*100.;
    return Percentage.toFixed(2);
}

//Calling Function 
let population =21;
const SriLanka = percentageOfWorld1(population)

console.log(`Sri Lanka has ${population} million people, so it's about ${SriLanka} of the World Population`);

population = 331;
const USA = percentageOfWorld1(population);

console.log(`America has ${population} million people, so it's about ${USA} of the World Population`);

population = 38;
const Canada = percentageOfWorld1(population);

console.log(`Canada has ${population} million people, so it's about ${Canada} of the World Population`);

// Function Expression 
const percentageOfWorld2 = function(population)
{
    const Percentage = (population/7900)*100.;
    return Percentage;
}

population = 331;
const US = percentageOfWorld2(population);

console.log(`USA has ${population} million people, so it's about ${US.toFixed(2)} of the World population `);

// Lecture - Arrow Function 🧑‍💻

// in here i called yhe function inside the console rather defining a variable 
const percentageOfWorld3 = (population) =>   population/7900*100; 
console.log(`USA has ${population} million people, so it's at ${percentageOfWorld3(331).toFixed(2)}`);

//Lecture - Functions Calling Other Functions 🧑‍💻
function describePopulation(country, population)
 {
    const percentageofWorld1 = function (population) {
        const Percentage = (population / 7900) * 100;
        return Percentage;
    }

    const Percentage = percentageofWorld1(population); // Calculate the percentage

    console.log(`${country} has ${population} million people, which is about ${Percentage.toFixed(2)}% of the World`);
}

// Calling the function
describePopulation("Sri Lanka", 21);
describePopulation("USA", 331);
describePopulation("Canada", 38);

// Lecture - Introduction to Arrays 🧑‍💻

const populations = [21,331,28,40];
console.log(populations);

console.log(populations.length === 4); // check whether array has 4 elemets or not
const percentages = [
percentageOfWorld1(populations[0]),
percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]),
percentageOfWorld1(populations[3])
];
console.log(percentages);

// Lecture - Basic Array Operations (Methods) 🧑‍💻
const neighbours = ['india', 'Pakistan', 'Japan'];
neighbours.push('utopia'); //adding a new country to the array
neighbours.pop(); //removing the added country
console.log(neighbours);
//checking Germany Exist in the array
if(!neighbours.includes('Germany'))
{
    console.log('Probably not a Central European Country ');
}

//chaning the value of inex of Japan to US 
neighbours[neighbours.indexOf('Japan')] = 'United States';
console.log(neighbours);


//Lecture - Introduction to Objects 🧑‍💻
const myCountry = {
    country: 'Sri Lanka',
    capital: 'Sri Jayawardhanapura',
    language:'sinhala ',
    population:21,
    neighbours:'China,Japan,canada',
    describe : function(){
        console.log(`${this.country},'s capital is ${this.capital} and has ${this.population} million Population`)
    },
    checkIsland : function(){
        this.isIsland=this.neighbours.length===0 ? true:false;
    }
};


//Lecture - Dot vs Bracket Notation 🧑‍💻

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, 3 neighbouring countries ${myCountry.neighbours} `);// Dot Notation 
console.log(`${myCountry['country']} has ${myCountry['population']} million ${myCountry['language']} speaking people, 3 neighbouring countries ${myCountry['neighbours']} `); // Bracket Notation 

console.log(`${myCountry.population=23}`);//increased population by 2 
console.log(myCountry.population);
console.log(`${myCountry['population']=21}`);//decrease population by 2
console.log(myCountry.population);

// Lecture - Object Methods 🧑‍💻

myCountry.describe(); //calling the describe method created on the object
myCountry.checkIsland();
console.log(myCountry.isIsland); //calling the new property calles isIsland

//Lecture - Iteration: The For Loop 🧑‍💻
for(let vote =1; vote<=50; vote ++)
{
    console.log(`Voter number ${vote} is currently voting`);
}


//Lecture - Looping Arrays, Breaking and Continuing 🧑‍💻
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
    ];

    for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);


//Lecture - The While Loop 🧑‍💻
const percentages3 = [];
let i = 0;

while (i < populations.length) {
const perc = percentageOfWorld1(populations[i]);
percentages3.push(perc);
i++;}
console.log(percentages3);