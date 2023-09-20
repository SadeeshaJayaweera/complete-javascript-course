'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay'); //modal overlay
const btnsOpenModal = document.querySelectorAll('.show-modal'); //modals Open Buttons
const btnCloseModal = document.querySelector('.close-modal'); //Modals Close Buttons



//Just for a Practice 
/* for(let i=0; i<btnsOpenModal.length; i++)
{
    console.log(btnsOpenModal[i].textContent);
    
}
 */


/* 
About JavaScript classList Property 😋 -Working With Classes 

The classList JavaScript is a read-only property that is used to return CSS classes in the form of an array.

The classList JavaScript allows us to add, remove, replace, toggle or check whether the specified CSS class is present or not. */



// Normal Unstructured way of coding the modal - button open 
/* 
for(let i=0; i<btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click' , function()
{
    console.log('Button Clicked');
    modal.classList.remove('hidden');//show the hidden post 
    overlay.classList.remove('hidden');//blinds the background and open the pop
}); */


// Normal Unstructured way of coding the modal - button Close

/* btnCloseModal.addEventListener('click',function ()
{
    modal.classList.add('hidden');//close the modal when clicked on the X
    overlay.classList.add('hidden');//close the model when clicked on the overlay(out of the box)
});

overlay.addEventListener('click',function ()
{
    modal.classList.add('hidden');//close the modal when clicked on the X
    overlay.classList.add('hidden');//close the model when clicked on the overlay(out of the box)
}); */


//Organized and Structured Way of Ding this ✅ ✅ ✅ 

//Defining Functions for Modal Open, Close and Overlay 

//Modal Closing Function 

const ModalClose = function()
{
    modal.classList.add('hidden'); //Hiding the Css Hidden class by add property which will close the modal after clicking X
    overlay.classList.add('hidden');// Hiding the Css Hidden Class by add property when clicked outside the Modal 
};

//Modal Open Function 

const ModalOpen = function()
{
    modal.classList.remove('hidden');// Showing the Css Hidden Class by Remove property which shows the modal visible 
    overlay.classList.remove('hidden');//Enabling the Overlay of thee Modal 
};

  


//Calling the Functions 

for(let i=0; i<btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click' , ModalOpen);  //Open Modal


btnCloseModal.addEventListener('click', ModalClose);
overlay.addEventListener('click', ModalClose);

//Handling theKey Press Events 
document.addEventListener('keydown', function(e){
    console.log(e.key); //to check the key pressed 
    if(e.key === 'Escape')
    {
        if(!modal.classList.contains('hidden')) // if the pressed Key is esc and modal is not closed it will be closed
        {
            ModalClose();
        }
    }
});