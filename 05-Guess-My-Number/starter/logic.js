// Secret Number 

const number = Math.trunc(Math.random() *20 ) + 1; 
// Logic Math.random() - gives a random number in decimal so *20 make it between 1 - 20
//hence 1 is added to make the range between 1-20 inculding the 20
//Math.trunc - used to make a non decimal number 

document.querySelector('.number').textContent = number;

// To check whether a number is entered/selected or not


document.querySelector('.check').addEventListener('click',function () {
    const guess = Number(document.querySelector('.guess').value);//converting the string to a number 
    console.log(guess, typeof guess);// printing the type after converting to a number 

    if(!guess)
    {
        document.querySelector('.message').textContent = '⛔️ Please Select a Number !';
    }
    else if(guess===secretNumber){
        document.querySelector('.message').textContent='🎉 Correct Number ✅';
    }
}
 );