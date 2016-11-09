$( document ).ready(function() {
	//initializeTab(0);
});

/* ----------------------------------------------------------------- */
/* ----------------------- NAVIGATING TABS ------------------------- */
/* ----------------------------------------------------------------- */

$(".tab").click(function() {
	var tabIndex = $(this).index();
	moveToTab(tabIndex);
	initializeTab(tabIndex);
});

/* ----------------------------------------------------------------- */
/* ----------------------- HELPER FUNCTIONS ------------------------ */
/* ----------------------------------------------------------------- */

function getActiveTabIndex() {
	return $(".tab.active").index();
}


function moveToTab(index) { 
	$(".tab, .tab-content").removeClass("active");
	$(".tab").eq(index).addClass("active");
	$(".tab-content").eq(index).addClass("active");
}

function initializeTab(index) {
	
	var tabCopyCol = $('.tab-copy-col').eq(index);
	var tabImageCol = tabCopyCol.prev();
	var width = $('.tab-content').width() - tabImageCol.width();
	
	tabCopyCol.width(width);

	var storyContainer = $('.story-container').eq(index); 
	var parent = storyContainer.parent();
	    	
	verticalAlign(parent, storyContainer);
}




	


	





	