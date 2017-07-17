window.addEventListener("load", doFirst, false);

function doFirst() {
   document.querySelector('.friend_gosearch').addEventListener("click", gosearch, false);
   document.querySelector('.friend_filter').addEventListener("click", filter, false);
   document.querySelector('.friend_random').addEventListener("click", random, false);
   document.getElementById('gofilt').addEventListener("click", gofilt, false);
}

function gosearch() {
   $('.friend_result').animate({
      opacity: 0,
      left: '-1280px'
   }, 1000, function () {
      $('.friend_result').animate({
         opacity: 1,      
         left: '0'
      }, 2000);
   });
}

function filter() {
   var filter = document.querySelector('.friend_filter');
   var filterOn = document.querySelector('.friend_filteron');
   if (filterOn.style.display === 'block') {
      filter.style.display = 'block';
      filterOn.style.display = 'none';
   } else {
      filter.style.display = 'none';
      filterOn.style.display = 'block';
   }
}

function random() {
   $('.friend_result').animate({
      opacity: 0,
      left: '-1280px'
   }, 1000, function () {
      $('.friend_result').animate({
         opacity: 1,      
         left: '0'
      }, 2000);
   });
}

function gofilt() {
   var filter = document.querySelector('.friend_filter');
   var filterOn = document.querySelector('.friend_filteron');

   if (filterOn.style.display === 'block') {
      filter.style.display = 'block';
      filterOn.style.display = 'none';
   } else {
      filter.style.display = 'none';
      filterOn.style.display = 'block';
   }
   gosearch();
}