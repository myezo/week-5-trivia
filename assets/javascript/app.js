$(document).ready(function(){


var questions = [
{
   question : "What football team won the Super Bowl in 2016?",
   teams : ["Broncos", "Panthers", "Patriots", "Giants"],
   correct : "Broncos"
},

{
	question : "What baseball team won the World Series in 2016?", 
	teams : ["Dodgers", "Yankees", "Cubs", "Cardinals"],
	correct : "Cubs"
},

{
	question : "What hockey team won the NHL championship in 2016?",
	teams : ["Rangers", "Penguins", "Sharks", "Blackhawks"],
	correct : "Penguins"
}];


var questionCounter = 0;
var currentQuestion = 0;
var numChoices = questions[currentQuestion].teams.length;
var answers = questions[currentQuestion].teams;
var correct = 0;
var incorrect = 0;
var thirty = 30;
var five = 5;


$('#start-button').on('click', function(){
	//thirtySeconds();
	//console.log(questions[0].teams[0]);
	
	$("#start-button").remove();
	$('#question').append(questions[currentQuestion].question);
	

	for(var i = 0; i < numChoices; i++){
		console.log(answers[i]);
		var footballDiv = $('<p>');
		//footballDiv.attr('data-team', answers[i]);
		footballDiv.text(answers[i]);
		$('#answers').append(footballDiv);

		/*$(footballDiv).hover(function() {
  			$(this).css("background-color","red");
		});*/

			$(footballDiv).click(function(){
				console.log(this.textContent);
				if (this.textContent == questions[currentQuestion].correct){
		          	$('#question').empty();
		          	$('#answers').empty();
		          	$('#start-button').empty();
		          	$('#question').text("Correct!");
					$('#answers').html("<img src='http://extras.mnginteractive.com/live/media/site36/2012/1230/20121230_062534_demaryius-thomas-broncos.gif'>");

				}else{
					alert("no");
				}

	    	});
	}	

});


function fiveSeconds(){
	var fiveCounter = setInterval(fiveSeconds, 1000);
	//setTimeout(fiveSeconds, 1000 * 5);
	five -= 1;
	console.log(five);
	//$('#timer').html(five);
	if(five == 0){
        clearInterval(fiveCounter);
    }
}


function thirtySeconds(){
	var thirtyCounter = setInterval(thirtySeconds, 1000);
	//setTimeout(thirtySeconds, 1000 * 30);
	thirty -= 1;
	console.log(thirty);
	$('#timer').html(thirty);
	if(thirty == 0){
        clearInterval(thirtyCounter);
    }
}


});



