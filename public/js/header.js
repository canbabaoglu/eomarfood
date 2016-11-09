// USE SMALL HEADER WHEN USER SCROLLS AWAY FROM TOP
$(window).scroll(function() {

	if ($(window).scrollTop() > $(".header-row").height() ) {
		$(".header-logo").hide();
		$(".header-scroll-logo").show();
	} else {
		$(".header-logo").show();
		$(".header-scroll-logo").hide();
	}
});


// NAVIGATE TO CORRESPONDING SECTION WHEN USER CLICKS ON NAV ITEM
$(".header-nav li").click(function() {

	//set values
	var currentNavIndex = getcurrentNavIndex();
	var newNavIndex = $(this).index();
	var difference = Math.abs(currentNavIndex - newNavIndex);
	var startHeights = getSectionStartHeights();
	var animationSpeed = 1000 * difference;

	//adjust active nav item
	$(".header-nav li").removeClass("active");
	$(this).addClass("active");

	//scroll to right area on the page 
	$(window.opera ? 'html' : 'html, body').animate({
		scrollTop: startHeights[newNavIndex]
	},animationSpeed);
});


// AUTO ADJUST ACTIVE NAV WHEN USER SCROLLS
$(window).scroll(function() {
	var startHeights = getSectionStartHeights();

	//when user scrolls deactivate all nav items
	$(".header-nav li").removeClass("active");

	//depending on the users location activate the right nav item
	if ( $(window).scrollTop() < startHeights[1] * 3 / 4 ) {
		$(".header-nav li").eq(0).addClass('active');
	} else if ( $(window).scrollTop() < startHeights[2] * 3 / 4 ) {
		$(".header-nav li").eq(1).addClass('active');
	} else if ( $(window).scrollTop() < startHeights[3] * 3 / 4 ) {
		$(".header-nav li").eq(2).addClass('active'); 
	} else {
		$(".header-nav li").eq(3).addClass('active'); 
	}	
	

});

// NAVIGATE TO NEXT SECTION FROM SLIDE SHOW

$('.banner-message').mouseenter(function(){
	$(this).hide();
	$(this).next().show();
});

$('.banner-cta').mouseout(function(){
	$(this).hide();
	$(this).prev().show();
});

$('.banner-cta').click(function() {
	var startHeights = getSectionStartHeights();
	var lastIndex = startHeights.length -1 ;	

	$(window.opera ? 'html' : 'html, body').animate({
		scrollTop: startHeights[1]
	},1000);
});


/* --------------------- HELPER FUNCTIONS -------------------- */

function adjustActiveNav() {
	$(".header-nav li").removeClass("active");
	$(this).addClass("active");
}

function getcurrentNavIndex() {
	return $(".header-nav .active").index();
}

function getSectionStartHeights() {

	var smallHeaderHeight = $(".header-scroll-logo").height() + 30 + 22;
	var aboutUsStartHeight = smallHeaderHeight + $(".home-row").height();
	var productLinesStartHeight = aboutUsStartHeight + $(".about-us-row").height();
	var contactStartHeight = productLinesStartHeight + $(".product-lines-row").height();

	var startHeights = [0, aboutUsStartHeight, productLinesStartHeight, contactStartHeight];

	return startHeights;
}
