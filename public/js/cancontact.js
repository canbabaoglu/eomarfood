
$(".contact-row form").submit(function(event) {
	event.preventDefault();

	
	//get input field values data to be sent to server
    post_data = {
        'name'          : $('input[name=name]').val(), 
        'email'         : $('input[name=email]').val(), 
        'phoneNo'       : $('input[name=phoneNo]').val(),  
        'message_body'  : $('textarea[name=message_body]').val()
    };

    $('.contact-row .send-button').attr('disabled', 'disabled');

    $.ajax({
		type: "POST",
		url: "http://eomarfoodlaravel.cangostudios.com/leads",
		data: post_data,
		dataType: "json",
		success: processJson, 
		error: connectionError 
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




