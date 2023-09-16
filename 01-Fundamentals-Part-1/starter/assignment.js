// Assignment Answers for JavaScript Fundamentals - Part 1 
console.log(`


`)
// Lecture - Values and Variables - Questions 
let country = "Sri Lanka";
let continent ="Asia Pacific";
let population =20;

console.log("My Country is: ",country);
console.log("My Continent is: ",continent);
console.log("Population is: ",population);

console.log("\n");


// Lecture - Data Types - Questions 
let isIsland = true;
const language = "Sinhala" // let language; - this is a undefined data type 

//how to check a type of data type
console.log(typeof "sinhala");
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log("Is a Island: ",isIsland);
console.log("My Country is: ",country);
console.log("Population is: ", population);
console.log("The Language is: ",language);

console.log("\n");

//Lecture - let,const and var 
population = 21 ; //changed the population to 21 million which is defined as inital to 20 milliom above 
console.log(population);

console.log("\n");

// Lecture - Basic Operations - Questions 
let halfPopulation =(population/2);
console.log("Half Population of the Country " +halfPopulation);

console.log(halfPopulation+1);

let finlandPopulation = 33;
console.log("Is Sri Lanka Has More Population than Finland: ", population>finlandPopulation); //check whether the population of sri lanka is greater than the population of finland 

const AveragePopulation=33;
console.log("Is Sri Lanka Has Less People Than an Average Country: ",AveragePopulation>population);

const description ="Portugal is in Europe, and its 11 million people speak Portugese";

console.log("\n");


// Lecture - Strings and Template Literals 
const newdescription = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(newdescription);

console.log("\n");

//Lecture - If and Else Statements 
if(population>130)
{
    console.log("Sri Lanka's Population is Above Average");

}
else
{
    console.log("Sri Lanka's Population is " +population+ " millions below Average "); 
}

console.log("\n");

// Lecture - Type Conversion and Coercion 

// '9' - '5'; // 4
// '19' - '13' + '17'; //617
// '19' - '13' + 17; //23
// '123' < 57; //false
// 5 + 6 + '4' + 9 - 4 - 2; //1143

console.log("\n");

// Lecture - Equality Operators: == vs ====

let numNeighbours = Number(prompt("How Many Neighbour Countries does your country have ?"));
if(numNeighbours===1)  /// input will be converted to a number to compare
{
    console.log("Only 1 Border")
}
else if(numNeighbours>1)
{
    console.log("More than 1 border")
}
else{
    console.log("No Border");
}

console.log("\n");

// Lecture - Logical Operators 

if(language=="English" && population<50 && !isIsland)
{
    console.log("You Should Live in Sri Lanka");
}

else
{
    console.log("Sri Lanka Doesn't Meet Your Criteria");
}

console.log("\n");

// Lecture - The Switch Statement 

language; // assigned sinhala in the above

switch (language)
{
    case "mandarin":
    {
        console.log("Most Number of Native Speakers");
        break;
    }

    case "spanish":
        {
            console.log("2nd Place in number of native speakers");
            break;
        }

    case "english":
        {
            console.log("3rd Place");
            break;
        }
    
    case "hindi":
        {
            console.log("Number 4");
            break;
        }
    
    case "arabic":
        {
            console.log("5th Most Spoken Language");
            break;
        }
    
    case "Sinhala":
        {
            console.log("It's a Very Attractive Language");
            break;
        }

    default:
        {
            console.log("Great Languages too");
        }
}


console.log("\n");

//Lecture - Conditional (Ternary) Operator 
console.log(
    `${country}'s population is ${population > 33 ? 'above' : 'below '} average `
);
