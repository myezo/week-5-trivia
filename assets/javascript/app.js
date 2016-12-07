$(document).ready(function(){


var currentQuestion = 0;

var football = {
	question: "What football team won the Super Bowl in 2016?",
	teams : ["Broncos", "Panthers", "Patriots", "Giants"],
	answer : 0
}

$('#start-button').on('click', function(){
	
	$("#start-button").remove();
	$('#question').append(football.question);
	
	for(var i = 0; i < football[teams].length; i++) {
	    var footballDiv = $('<div>');
	    footballDiv.attr('data-team', football.teams[i]);
	    footballDiv.text(football.teams[i]);
	    $("#answers").append(footballDiv);

		    $(footballDiv).click(function(){
				console.log(footballDiv.attr);
			});
	}

	

});


});