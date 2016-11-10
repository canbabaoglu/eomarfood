
$(".contact-row form").submit(function(event) {
	event.preventDefault();

	var form = $(this);

	

    $('.contact-row .send-button').attr('disabled', 'disabled');

    $.ajax({
		type     : "POST",
		url      : form.prop('action'),
		data     : form.serialize(),
		dataType : "json",
		success  : processJson, 
		error    : connectionError 
	});

	function processJson(response) {

		if (response.type == "success") {
			hideShow(".contact-form-row", ".contact-row .confirmation-row");	
		} else if (response.type == "error") {
			hideShow(".contact-form-row", ".contact-row .error-row");
		}	
	}; 

	
	function connectionError() {
		hideShow(".contact-form-row", ".contact-row .error-row");
	};

	
	function hideShow(hideDiv, showDiv) {
		$(hideDiv).fadeOut(1000);
		setTimeout( function(){
			$(showDiv).fadeIn(1000);
		},1000);
	}
	
	
	
});  




