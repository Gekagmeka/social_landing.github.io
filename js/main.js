let burgerMenu = document.querySelector('.burger-menu');
let closeCross = document.querySelector('.close-link');
let mobileMenu = document.querySelector('.menu');
let closedBody = document.querySelector('body');
let headerLinks = document.querySelectorAll('.menu .link');
let seeMore = document.querySelector('.see-more');
let navGroup = document.querySelector('.nav-group');
//let moreBtn = document.querySelector('.more-btn');
let moreBtnAll = document.getElementsByClassName('more-btn');
let mobileBlock = document.getElementById('mob-info');
let storiesBlock = document.getElementsByClassName('stories');

//will be found only the first element with this class
let moreBtnShareList = document.querySelector('.more-btn + .share-list');

mobileBlock.addEventListener('click', function(){
   mobileBlock.classList.toggle('active');
   //// we have many elements with class .stories - for this reason 
   //// we need to sort these one's and add each of them class .active
   // var elements = document.getElementsByClassName("stories");
   // for (var i = 0; i < elements.length; i++) {
   //    elements[i].classList.toggle("active");
   // }
});

//show/hide mob block with animation
$('.mobile-info').on('click', function(){
	$('.mobile-info ~ .stories').slideToggle();
});

// after switching mobile and desktop versions - our mobile block has it's common styles - display: none;
// and on desktop version there are always right sidebar
const minWidth = window.matchMedia("(min-width: 768px)");
function checkWidth(e) {
  // Check if the media query is true
  if (e.matches) {
   $('.mobile-info ~ .stories').css({'display' : 'block'});
  } else {
   $('.mobile-info ~ .stories').css({'display' : 'none'});
 }
}
// Register event listener
minWidth.addListener(checkWidth);
// Initial check
checkWidth(minWidth);


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


// function stopDefAction(e) {
//    e.preventDefault();
// }