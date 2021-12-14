let burgerMenu = document.querySelector('.burger-menu');
let closeCross = document.querySelector('.close-link');
let mobileMenu = document.querySelector('.menu');
let closedBody = document.querySelector('body');
let headerLinks = document.querySelectorAll('.menu .link');
let seeMore = document.querySelector('.see-more');
let navGroup = document.querySelector('.nav-group');
let mobileBlock = document.getElementById('mob-info');
let storiesBlock = document.getElementsByClassName('stories');
let moreBtn = document.querySelectorAll('.more-btn');


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

//.nav .list .link
//headerLinks
for (let elem of headerLinks) {
   elem.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
   });
}

//see-more block js
seeMore.onclick = function(e) {
   seeMore.classList.toggle('active');
   e.preventDefault();
   seeMore.nextElementSibling.classList.toggle('hide-block');
   console.log(seeMore.nextElementSibling);
}


function stopDefAction(e) {
   e.preventDefault();
}


//numbers
let allLikes = 262;
let allViews = 22;
let allPosts = 11;
let likes = 'likes';
let views = 'views';
let posts = 'posts';
let sumBlock = document.querySelector('.sum-block');
let sumText = document.querySelector('.sum-text');
let btnInfo = document.querySelector('.button-info');

// to get attribute ID
// function ddd(){
//    $(".button-info").on("click", function(){
//        let myId = $(this).attr("id");
//       console.log(myId);
//    });
// };


//.button-info
sumBlock.textContent = `${allLikes}`;
sumText.textContent = ` ${likes} this week`;

$('.button-info').on('click', function(e){
   if ('.button-info.active') {
      $('.button-info').removeClass('active');
      $(this).toggleClass('active');
   }
   let myId = $(this).attr("id");

   switch (myId) {
      case ('info-likes'):
         sumBlock.textContent = `${allLikes}`;
         sumText.textContent = ` ${likes} this week`;
         break;
      case ('info-views'):
         sumBlock.textContent = `${allViews}`;
         sumText.textContent = ` ${views} this week`;
         break;
      case ('info-posts'):
         sumBlock.textContent = `${allPosts}`;
         sumText.textContent = ` ${posts} this week`;
         break;
   }
   e.preventDefault();
});




//added  Listener to each mareBtnAll
// 1 variant (strange)
   // let moreBtnAll = document.getElementsByClassName('more-btn');
   // for (var i = 0; i < moreBtnAll.length; i++) {
   //    moreBtnAll[i].addEventListener('click', selectOptions);
   // }
   // //namely this - pushed button from all of moreBtnAll
   // function selectOptions() {
   //       this.classList.toggle('active');// this в данном случае будет указывать на кликнутый элемент.
   //       console.log(this);
   //    }
// 2 variant
   // get whole collection with .more-btn
   // // need to select this collection and take ckick to the current checked
   // for ( let moreEachBtn of moreBtn ) {
   //    moreEachBtn.addEventListener('click', function() {
   //       deleteActiveMoreBtn();
         
   //       moreEachBtn.classList.add('active');
   //    });
   // }
   // //need to delete from the other btn .active during the click -> function()
   // function deleteActiveMoreBtn() {
   //    for (let allBtn of moreBtn) {
   //       allBtn.classList.remove('active');
   //    }
   // }
   // // click on document
   // $(document).on("click", function(e){
   //    if (!$(e.target).closest('.more-btn').length) {
   //       $('.more-btn').removeClass('active');
   //    } 
   //  });
// 3 variant
   // const list = document.querySelectorAll('.more-btn')
   //    list.forEach(item =>{
   //       item.addEventListener('click', (e) =>{
   //          list.forEach(el=>{
   //             el.classList.remove('active');
   //          });
   //       item.classList.add('active')
   //    })
   // })
   // $(document).on("click", function(e){
   //       if (!$(e.target).closest('.more-btn').length) {
   //          $('.more-btn').removeClass('active');
   //       } 
   //     });
// 4 variant

document.addEventListener('click', e => {
  const btn = e.target.closest('.more-btn');
// with metho .forEach()
     moreBtn.forEach(n => {
      // add/remove class .active when the next condition works n === btn && !n.classList.contains('active')
       n.classList.toggle('active', n === btn && !n.classList.contains('active'));
      });
});

// ****
// document.addEventListener('click', e => {
//   const btn = e.target.closest('.more-btn');
//   document.querySelectorAll('.more-btn').forEach(n => {
//     n.classList.toggle('active', n === btn && !n.classList.contains('active'));
//   });
// });
// OR
   //   document.addEventListener('click', e => {
   //   const btn = e.target.closest('.more-btn');
   //   document.querySelectorAll('.more-btn').forEach(n => {
   //     n.classList.toggle('active', !n.classList.contains('active'));
   //   });
   // });
// *****