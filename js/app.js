$(document).ready(function(){
	
	
	var fizzy = function () {
		var start = 1
		var end = $('#entry').val();
		$('#build p').remove();
		if (($('#entry').val()) > 100 || ($('#entry').val()) < 0 || ($('#entry').val()) % 1 !=0 ){
			alert('Make sure you enter a whole number between 1 and 100');
		}

		else{
			for(i=start; i <= end; i++){
					if (i%3 == 0 && i%5 == 0){
						$('#build').append('<p>FizzBuzz<p>');
					}
					else if (i%3==0){
						$('#build').append('<p>Fizz<p>');
					}
					else if (i%5 == 0){
						$('#build').append('<p>Buzz<p>');
					}
					else{
						$('#build').append('<p>'+i+'<p>');
					}
				};
		};
		$('#entry').val("");
		
	};

	$("#start").click (function(){
		fizzy()	
	});

	$('#inner').keypress(function(e){
	if(e.which == 13){	
		fizzy()
	};
    });


});
	
		
		
	
	