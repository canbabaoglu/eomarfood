$( document ).ready(function() {

	var i              = 0;
	var j              = 0;
	var noSlides       = $('.slideshow-row').length;
	var transitionTime = 1000;
	var slideTime      = 4500;
	var repeat         = 250;

	function runSlides() {
		setTimeout(function() {
			nextSlide(i, transitionTime);
			$('.banner-cta').hide();
			$('.banner-message').show();
			j++;
			i++;
			if (i == noSlides) i=0;
			if (j < repeat) runSlides();
		}, slideTime);
	}

	runSlides();
});

function nextSlide(index, duration) {
	var noSlides = $('.slideshow-row').length;
	var currentSlide = $('.slideshow-row').eq(index);

	currentSlide.fadeOut(duration);

	setTimeout(function() {
		if (index == noSlides - 1) $('.slideshow-row').eq(0).fadeIn(duration);

		currentSlide.next().fadeIn(duration);
	}, duration);
}








