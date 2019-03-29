var sliItems = document.querySelectorAll('#sliderul li button');
var slideItem = document.getElementsByClassName('my-bg');
var sumslider = sliItems.length;
var numberSide = 0;
var btnNext = document.querySelector('#btn-Next');
var btnPrev = document.querySelector('#btn-Prev');

btnNext.addEventListener('click', nextSlider, false);
btnPrev.addEventListener('click', prevSlider, false);

for (var i = 0; i < sliItems.length; i++) {
  sliItems[i].addEventListener('click', showslider);
}

function showslider() {
  for (var i = 0; i < slideItem.length; i++) {
    slideItem[i].classList.remove('is-active');
  }
  for (var j = 0; j < sliItems.length; j++) {
    slideItem[$(this).data('number')].classList.add('is-active');
    numberSide = $(this).data('number');
  }
}

function nextSlider() {
  for (var i = 0; i < slideItem.length; i++) {
    slideItem[i].classList.remove('is-active');
  }
  numberSide++;
  if (numberSide == sumslider) { numberSide = 0 }
  slideItem[numberSide].classList.add('is-active');
};

function prevSlider() {
  for (var i = 0; i < slideItem.length; i++) {
    slideItem[i].classList.remove('is-active');
  }
  numberSide--;
  if (numberSide < 0) { numberSide = sumslider - 1 }
  slideItem[numberSide].classList.add('is-active');
};

var autoSlider = setInterval(nextSlider, 4000);
