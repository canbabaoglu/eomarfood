/* --------------------- INITIALIZE LAYOUT ------------------*/

$( document ).ready(function() {
    
    // Give the page s to load and then initialize Tabs
    setTimeout( function() {
    	initializeTab(0);
    	setHomeSectionMinHeight();
		setBannerTop();	
    }, 500); 

    // Reinitialize the page after 1.5s for slower connections
    setTimeout( function() {
    	initializeTab(0);
    	setHomeSectionMinHeight();
		setBannerTop();	
    }, 1500); 

    // Reinitialize the page after 3s for slower connections
    setTimeout( function() {
    	initializeTab(0);
    	setHomeSectionMinHeight();
		setBannerTop();	
    }, 3000); 
	
});

/* --------------------- HELPER FUNCTIONS -------------------- */

//get home section height
function getHomeHeight() {
	var homeHeight = $(window).height() - $(".header-row").height();
	if (homeHeight > 676) homeHeight = 676;
	return homeHeight;
}


// set home section min height
function setHomeSectionMinHeight() {
	
	var homeHeight = getHomeHeight();
	
	homeHeight = homeHeight + "px";
	$(".home-row, .slideshow-row").css("min-height", homeHeight);
}


function setBannerTop() {
	var bannerHeight = $(".banner-message-row").height();
	var difference = getHomeHeight() - bannerHeight;
	var top = Math.floor(difference * 4/5) + "px";
	$(".banner-message-row").css("top", top);
} 


function verticalAlign(parentElement, childElement) {
	var parentElementHeight = $(parentElement).height();
	var childElementHeight = $(childElement).height();
	var childPaddingTop = ((parentElementHeight - childElementHeight)/2) + "px";
	$(childElement).css("padding-top", childPaddingTop);
} 



