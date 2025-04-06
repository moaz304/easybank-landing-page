const btnHamburger = document.querySelector('#btnHamburger'); // Select the hamburger button
const body = document.querySelector('body'); // Select the body
const header = document.querySelector('.header'); // Select the header
const overlay = document.querySelector('.overlay'); // Select the overlay
const fadeElems = document.querySelectorAll('.has-fade'); // Select elements that will fade in/out

btnHamburger.addEventListener('click', function() {
  console.log('click hamburger'); // Log when the hamburger button is clicked

  if (header.classList.contains('open')) { // If menu is already open, close it
    body.classList.remove('noscroll'); // Allow scrolling
    header.classList.remove('open'); // Remove the 'open' class from the header
    
    fadeElems.forEach(function(element) { // Loop through elements with fade effects
      element.classList.remove('fade-in'); // Remove fade-in class
      element.classList.add('fade-out'); // Add fade-out class
    });
  } else { // If menu is not open, open it
    body.classList.add('noscroll'); // Disable scrolling
    header.classList.add('open'); // Add 'open' class to the header
    
    fadeElems.forEach(function(element) { // Loop through elements with fade effects
      element.classList.remove('fade-out'); // Remove fade-out class
      element.classList.add('fade-in'); // Add fade-in class
    });
  }  
});
