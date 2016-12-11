$(document).ready(function(){


var questions = [
{
   question : "What football team won the Super Bowl in 2016?",
   teams : ["Broncos", "Panthers", "Patriots", "Giants"],
   correct : "Broncos",
   image: "<img src='http://extras.mnginteractive.com/live/media/site36/2012/1230/20121230_062534_demaryius-thomas-broncos.gif'>"
},

{
	question : "What baseball team won the World Series in 2016?", 
	teams : ["Dodgers", "Yankees", "Cubs", "Cardinals"],
	correct : "Cubs",
	image: "<img src='https://media.giphy.com/media/l0MYCYe23pOlaK21G/giphy.gif'>"
},

{
	question : "What hockey team won the Stanely Cup in 2016?",
	teams : ["Rangers", "Penguins", "Sharks", "Blackhawks"],
	correct : "Penguins",
	image: "<img src='http://2.cdn.nhle.com/penguins/images/upload/2015/02/malkin2.19.15web.gif'>"
}];


var currentQuestion = 0;
var currentTeamsLength;
var currentTeams;

var correct = 0;
var incorrect = 0;
var count = 7;
var counter;
var five = 5;
var answersDiv;


$('#start-button').on('click', function(){
	displayQuestion();
});



function displayQuestion(){
	currentTeamsLength = questions[currentQuestion].teams.length;
	currentTeams = questions[currentQuestion].teams;
	runThirty();
	$("#start-button").remove();
	$('#question').append(questions[currentQuestion].question);

	for(var i = 0; i < currentTeamsLength; i++){
		console.log(currentTeams[i]);
		var answersDiv = $('<p>');
		answersDiv.text(currentTeams[i]);
		$('#answers').append(answersDiv);
	}
}



$(document).on('click', '#answers p', function(){
	console.log(this.textContent);
		if (this.textContent == questions[currentQuestion].correct){
			
			runFiveSec();
			$('#timer').empty();
			$('#question').empty();
			$('#answers').empty();
			$('#start-button').empty();
		    $('#question').text("Correct!");
			$('#answers').html(questions[currentQuestion].image);
			correct++;
			}else{
				
				runFiveSec();
				$('#timer').empty();
				$('#question').empty();
		        $('#answers').empty();
		        $('#start-button').empty();
		        $('#question').text("Incorrect!");
				$('#answers').html(questions[currentQuestion].image);
				incorrect++;
				}
});



function clearStuff(){
	$('#timer').empty();
	$('#fiveSec').empty();
	$('#answers').empty();
	$('#question').empty();
}


function runThirty(){
	counter = setInterval(questionTimer, 1000);
}


function questionTimer(){
	count--;
	$("#timer").html("Time remaining: " + count);
	if(count === 0){
		clearInterval(counter);
		count = 7;
	}
}


function runFiveSec(){
	counter = setInterval(fiveSeconds, 1000);
	$('#timer').empty();
}


function fiveSeconds(){
	five--;
	$("#fiveSec").html("Next question in: " + five);
	if(five === 0){
		clearInterval(counter);
		clearStuff();
		currentQuestion++;
		five = 5;
		displayQuestion();
	}
}




});