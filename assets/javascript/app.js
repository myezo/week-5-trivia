$(document).ready(function(){


var currentQuestion = 0;



var questions = [
{
   question : "What football team won the Super Bowl in 2016?",
   answers : ["Broncos", "Panthers", "Patriots", "Giants"],
   correct : 0
},

{
	question : "What baseball team won the World Series in 2016?", 
	answers : ["Dodgers", "Yankees", "Cubs", "Cardinals"],
	correct : 2
},

{
	question : "What hockey team won the NHL championship in 2016?",
	answers : ["Rangers", "Penguins", "Sharks", "Blackhawks"],
	correct : 1
}];

var numChoices = questions[currentQuestion].answers.length;
console.log(numChoices);

$('#start-button').on('click', function(){
	
	$("#start-button").remove();
	$('#question').append(questions[currentQuestion].question);
	//$('#answers').append(questions[currentQuestion].answers);


	

/*	
	for(var i = 0; i < football[teams].length; i++) {
	    var footballDiv = $('<div>');
	    footballDiv.attr('data-team', football.teams[i]);
	    footballDiv.text(football.teams[i]);
	    $("#answers").append(footballDiv);

		    $(footballDiv).click(function(){
				console.log(footballDiv.attr);
			});
	}
*/
});






});