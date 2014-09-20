$(document).ready(function(){
	$("#start").click (function(){
		$('#build p').remove();

			var start = $('#entry').val();
			var end = 100;
			
			

			for(i=start; i < end; i++){
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
			$('#entry').val("");
		});
	$('#inner').keypress(function(e){
    if(e.which == 13){
    	$('#build p').remove();
    	var start = $('#entry').val();
			var end = 101;
			
			

			for(i=start; i < end; i++){
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
			$('#entry').val("");
		};

    });


	});
	
		
		
	
	