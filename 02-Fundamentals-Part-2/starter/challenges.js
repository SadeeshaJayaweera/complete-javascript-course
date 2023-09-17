//Challenge 1 🎉

// Arrow function to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test data
const scoreDolphins = calcAverage(85, 90, 89);
const scoreKoalas = calcAverage(88, 91, 110);

// Function to check the winner and log the result
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};

console.log("\n");

// Test the checkWinner function with the calculated averages
checkWinner(scoreDolphins, scoreKoalas);

//My Solution for the Challeneg with Arrow Function and Function Declaration 

/* const calcAverage = (score1,score2,score3) => {
  const averageScore =(score1+score2+score3)/3;
  return averageScore;
}

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas  = calcAverage(85,54,41);

function checkWinner(avgDolphins, avgKoalas)
{
  if(avgDolphins >= avgKoalas*2)
  {
      console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  }
  else if(avgKoalas >= avgDolphins*2)
  {
      console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  }
  else
  {
      console.log(`No Team Wins`);
  }
}

checkWinner(scoreDolphins,scoreKoalas); */


// Challenge 2 🎉

/* Write your code below. Good luck! 🙂 */
function calcTip(billValue)
{
    if(billValue>50 && billValue<300)
    {
         const Tip = (billValue*0.15);
         return Tip; 
    }
    else
    {
         const Tip = (billValue*0.20);
         return Tip;
    }
}


const bills = [125,555,44];

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

const total=[(bills[0]+tips[0]),(bills[1]+tips[1]),(bills[2]+tips[2])];

console.log(total);

// Another way to do the same with this function declaration with a avarible assigned 

/* const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill*0.15 :
  bill * 0.2;
}
// //Arrow Function 
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill*0.15 : bill * 0.2;


const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total=[(bills[0]+tips[0]),(bills[1]+tips[1]),(bills[2]+tips[2])]; */

// Challenge 3 🎉

// My Solution for the Challeneg 
/* Write your code below. Good luck! 🙂 */

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
};

function calcBMI(mass, height) {
  const bmi = mass / (height * height);
  return bmi;
}

const BMIMark = calcBMI(mark.mass, mark.height);
const BMIJohn = calcBMI(john.mass, john.height);

function higherBMI(BMIMark, BMIJohn) {
  if (BMIMark > BMIJohn) {
      console.log(`${mark.fullName}'s BMI ${BMIMark.toFixed(2)} is higher than ${john.fullName}'s BMI ${BMIJohn.toFixed(2)}`);
  } else {
      console.log(`${john.fullName}'s BMI ${BMIJohn.toFixed(2)} is higher than ${mark.fullName}'s BMI ${BMIMark.toFixed(2)}`);
  }
}

higherBMI(BMIMark, BMIJohn);


//Jonas Solution for the Challenge 

/* const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}

 */

//Challenge 4 🧑‍💻 - This is bit average challenge 

/* const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
 
 
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
 
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
 
console.log(bills, tips, totals);
 
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
 
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
 */


