// This JavaScript File contains the Practice Codes of the Course 


let js = "amazing";
if(js=='amazing') 
{
  alert('Javascript is Amazing');
}
else{
  alert("Javascript is Boring for Dumbs");
}


console.log(40+100+100+100);
let FullName="Sadeesha Jayaweera";
console.log(FullName);



// some Operations Exercises Using JavaScript 
const now = 2023;
const ageSadee = now-2000;
const ageOneli = now-2004;

console.log(ageSadee, ageOneli);


const firstName = "Sadeesha";
const LastName = "Jayaweera";

console.log(firstName+" "+LastName );

//Operators  Precedence 

const averageAge = (ageSadee+ageOneli)/2; // this is in procedence order: if this is in ageSadee+ageOneli/2 = not correct due to procedunce 
console.log(ageSadee,ageOneli,averageAge);

// Strings and Template Literals 

const job = "Full Stack Developer";
const birthyear = 2000;

const Sadeesha = "I'm " +firstName+ " a " +job+ " and " +(2023-birthyear)+ " Years old !"
console.log(Sadeesha);

//Template Literals - The above can be Written Much easier with this

const newSadeesha = `I'm ${firstName} a ${job} and ${2023-birthyear} Years Old ! `;
console.log(newSadeesha);

// If and Else Statements 
const age = 10;
const isOldEnoght =(age>=19);
if(isOldEnoght)
{
  console.log("Sarah Can Start Driving License 🚗");
} 

else{
  const yearsRemaining =(19-age); 
  console.log(`Sarah is to Young to Start Driving License. Wait another ${yearsRemaining} years`);
}

// Type Conversion and Coersion 
// Type Conversion - When we manually convert from one type to other 

const inputyear = "2000";
console.log(Number(inputyear)+23); //inputyear string is converted to integer 


//Type Coersion -  When JavaScript automatically converts the types 

console.log("I am " + 23 + " Years old "); // in here number is also converted to string and display the output in string 
console.log("23" - "10" - "3");
console.log('23' / '2');


//Truthy and Falsy Values

//5 Falsy values: 0,'',undefined,null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money=0; //since money is 0 - falsy value the output will display false statment 
if(money)
{
  console.log("Don't Spend it all !");
}
else{
  console.log("You Should get a Job !");
}

let height; //undefined which is a falsy statement
if(height)
{
  console.log("YAY! Height is Defined");
}
else{
  console.log("Height is UNDEFINED");
}

//Equality Operators: == vs ===

//== - this is a coersion operator which will only whether the value is matching 
const DogAge ='15';
if(DogAge==15)
{
  console.log("The Dog is 15 Years Older"); //the above the string will converted to number and print the output
}


// ==== - this is a strict equal operator which match whether the data type and the value is matching 

const favourite = Number(prompt("Please Enter a Favourite Number"));
console.log(typeof(favourite));

if(favourite===23)
{
  console.log("Cool!, 23 is an Amazing Number "); // this will  be displayed since it is not a string - input has been converted to number 
}
else if(favourite===100)
{
  console.log("Cool!, 100 is an Amazing Number ");
}
else{
  console.log("Not a Cool Number");
}



// Boolean Operations & Logical Operators 

const hasDrivingLicense = true;
const hasGoodVision = true;

if(hasDrivingLicense && hasGoodVision)
{
  console.log("You are Good to Go For the Final Trial");
}
else if(hasDrivingLicense && !hasGoodVision)
{
  console.log("Please use a Spectacle");
}
else if(!hasDrivingLicense && hasGoodVision)
{
  console.log("Please get a Driving License");
}
else if(hasDrivingLicense || hasGoodVision)
{
  console.log("We Cannot Pass You to the next Stage something is Missing");
}
else
{
  console.log("Please Get Both Driving License and a Spectacle");
}

// Switch Statements 
const day ="monday";
switch(day)
{
  case "monday": //day==="monday"
  console.log('Plan Course Structure');
  console.log('Go to Coding Meetup');
  break;

  case "tuesday":
  console.log('Playing Games');
  break;

  case "Wedneesday":
  console.log('Coding');
  break;

  case "Thursday":
  console.log('Coding');
  break;

  case "Friday":
  console.log('Coding');
  break;

  case "Saturday":
  console.log('Coding');
  break;

  case "Sunday":
  console.log('Coding');
  break;

  default:
    console.log('Not a Valid Day');
}

//Statements and Expressions 



//The Conditional (ternary) Operator  - This is a one line code of substittution fot if else statement
const Myage = 22;
Myage >=18 ? console.log('I Like to drink wine  🍷' )
: console.log('I Like to Drink Water 💧');

