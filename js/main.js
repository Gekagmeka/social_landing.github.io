let burgerMenu = document.querySelector('.burger-menu');
let closeCross = document.querySelector('.close-link');
let mobileMenu = document.querySelector('.menu');
let closedBody = document.querySelector('body');
let headerLinks = document.querySelector('.link');

burgerMenu.onclick = function() {
   mobileMenu.classList.add('active');
   closedBody.classList.add('close');
}

closeCross.onclick = function() {
   mobileMenu.classList.remove('active');
   closedBody.classList.remove('close');
   return false; //because after closing burger-menu, we are transfered to the start of the page
   //or
    // e.preventDefault();
}

//(don't work - because need olny one unick class or id - then it will work)
headerLinks.onclick = function() {
   mobileMenu.classList.remove('active');
   closedBody.classList.remove('close');
   return false; //because after closing burger-menu, we are transfered to the start of the page
   //or
    // e.preventDefault();
}



//to avoid the transfering to the start of the page (don't work)
// headerLinks.addEventListener('click', function(event) {
//    event.preventDefault();
// });

// function stopDefAction(e) {
//    e.preventDefault();
// }


// if (mobileMenu.classList.contains('active')) {
//    closedBody.classList.add('close');
//    }
//    else {
//       closedBody.classList.remove('close');
//    }