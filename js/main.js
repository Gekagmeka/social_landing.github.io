let burgerMenu = document.querySelector('.burger-menu');
let closeCross = document.querySelector('.close-link');
let mobileMenu = document.querySelector('.menu');
let closedBody = document.querySelector('body');
let headerLinks = document.querySelectorAll('.menu .link');
let seeMore = document.querySelector('.see-more');
let navGroup = document.querySelector('.nav-group');
//let moreBtn = document.querySelector('.more-btn');
let moreBtnAll = document.getElementsByClassName('more-btn');

//will be found only the first element with this class
let moreBtnShareList = document.querySelector('.more-btn + .share-list');

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

//see-more block js
seeMore.onclick = function(e) {
   seeMore.classList.toggle('active');
   e.preventDefault();
   seeMore.nextElementSibling.classList.toggle('hide-block');
   console.log(seeMore.nextElementSibling);
}

// moreBtn.onclick = function(e) {
//    //document.addEventListener('click',e => console.log(e.target))
//    moreBtnShareList.classList.toggle('active');
//    e.preventDefault();
// }

//added  Listener to each mareBtnAll
for (var i = 0; i < moreBtnAll.length; i++) {
   moreBtnAll[i].addEventListener('click', selectOptions);
}
//namely this - pushed button from all of moreBtnAll
function selectOptions() {
   this.classList.toggle('active');// this в данном случае будет указывать на кликнутый элемент.
   console.log(this);
   // moreBtnAll[i].classList.toggle('active');
}

// document.addEventListener('click', function(){
//    moreBtnAll[i].classList.toggle('active');
//    console.log(this);
// });
//see-more block jQuery
// $(".see-more").on('click', function(e) {
//    $(".see-more").toggleClass("active");
//    $(".see-more + .nav-group").toggleClass("hide-block");
// or
//    $(".see-more").next().toggleClass("hide-block");
//    e.preventDefault(); // to avoid transfering to the start after press see more link
// });



//(don't work - because need olny one unique class or id of each of them - then it will work)
// headerLinks.onclick = function() {
//    mobileMenu.classList.remove('active');
//    closedBody.classList.remove('close');
//    return false; //because after closing burger-menu, we are transfered to the start of the page
//    //or
//     // e.preventDefault();
// }



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
