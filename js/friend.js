window.addEventListener("load", doFirst, false);

function doFirst() {
   document.querySelector('.gosearch').addEventListener("click", gosearch, false);
   document.querySelector('.filter').addEventListener("click", filter, false);
   document.querySelector('.random').addEventListener("click", random, false);
   document.getElementById('gofilt').addEventListener("click", gofilt, false);
}

function gosearch() {

}

function filter() {
   var filter = document.querySelector('.filter');
   var filterOn = document.querySelector('.filteron');
   console.log(filter, filterOn);
   if (filterOn.style.display === 'block') {
      filter.style.display = 'block';
      filterOn.style.display = 'none';
   } else {
      filter.style.display = 'none';
      filterOn.style.display = 'block';
   }
}

function random() {

}

function gofilt() {
   var filter = document.querySelector('.filter');
   var filterOn = document.querySelector('.filteron');

   if (filterOn.style.display === 'block') {
      filter.style.display = 'block';
      filterOn.style.display = 'none';
   } else {
      filter.style.display = 'none';
      filterOn.style.display = 'block';
   }

}