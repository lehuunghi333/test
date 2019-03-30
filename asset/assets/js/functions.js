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


jQuery(document).ready(function ($) {

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function (e) {
        moveLeft();
        e.preventDefault();
    });

    $('a.control_next').click(function (e) {
        moveRight();
        e.preventDefault();
    });

});    
