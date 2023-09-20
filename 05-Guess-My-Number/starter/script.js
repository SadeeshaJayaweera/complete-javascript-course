'use strict';

//Lecture 1 - Selecting and Manipulation 🧑‍💻

//DOM Manipulation 
//seleecting an element 

/* console.log(document.querySelector('.message').textContent); // used to display the output in the consolee 


document.querySelector('.message').textContent = "🎉  That's the Correct Numbeer"; //changed the paragraph at message class


document.querySelector('.number').textContent = 20;

document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value = 10);// printing in the console  */



//Secret Number 
let secretNumber = Math.trunc(Math.random() *20 ) + 1; 
//displaying the secret number - every time - just for checking 
// document.querySelector('.number').textContent = number; 

let score = 20;
let highscore = 0;


// Lecture 2 - Handling Click Events 🧑‍💻


document.querySelector('.check').addEventListener('click',function () {
    const guess = Number(document.querySelector('.guess').value);//converting the string to a number 
    console.log(guess, typeof guess);// printing the type after converting to a number 

    // when There is no input 
    if(!guess)
    {
        document.querySelector('.message').textContent = '⛔️ Please Select a Number !';
        
    }
    //when Player wins 
    else if(guess===secretNumber)
    {
        document.querySelector('.message').textContent='🎉 Correct Number ✅';
        //Showing the Secret Number When Guessed COrrectly 
         document.querySelector('.number').textContent = secretNumber;

        //Manipulating CSS Styles Using JavaScript
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width='30rem';

        //highScore 
        if(score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        

    }
    //when guess is too High
    else if(guess !== secretNumber)

        if(score>1)
        {
            document.querySelector('.message').textContent= guess > secretNumber ? "🤒 Too High!" : "🪫 Too Low!";
            score--;
            document.querySelector('.score').textContent=score;
    
        }
        else
        {
            document.querySelector('.message').textContent='You Lost the Game 😰 ';
            document.querySelector('.score').textContent=0;
            
        }
   
      

    }
   

);

// Reseting the Content - Again Key 
document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('.score').textContent= 20;
    document.querySelector('.message').textContent= 'Start guessing...';
    document.querySelector('.number').textContent= '?';
    document.querySelector('.guess').value=null;

    //css Manipulation 
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width='15rem';

    //New Secret Number 
    score = 20;
    secretNumber = Math.trunc(Math.random() *20 ) + 1;


})