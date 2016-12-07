$(document).ready(function(){


var football = ["Broncos", "Panthers", "Patriots", "Giants"];


$('#start-button').on('click', function(){
	
	$("#start-button").remove();
	$('#question').append('<div>What football team won the Super Bowl in 2016?</div>')
	
	for(var i = 0; i < football.length; i++) {
	    var footballDiv = $('<div>');
	    footballDiv.attr('data-team', football[i]);
	    footballDiv.text(football[i]);
	    $("#answers").append(footballDiv);

		    $(footballDiv).click(function(){
				console.log(footballDiv.attr);
			});
	}

	

});


});