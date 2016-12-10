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


var currentQuestion = 0;
var numChoices = questions[currentQuestion].teams.length;
var answers = questions[currentQuestion].teams;
var correct = 0;
var incorrect = 0;
count = 7;
var counter;
var five = 5;



function startGame(){
	$('#start-button').on('click', function(){
		displayQuestion();
		runThirty();
	});
}


startGame();


function displayQuestion(){
	$("#start-button").remove();
	$('#question').append(questions[currentQuestion].question);

	for(var i = 0; i < numChoices; i++){
		console.log(answers[i]);
		var answersDiv = $('<p>');
		answersDiv.text(answers[i]);
		$('#answers').append(answersDiv);

			$(answersDiv).click(function(){
				console.log(this.textContent);
				if (this.textContent == questions[currentQuestion].correct){

					$('#timer').remove();
					runFiveSec();
					$('#question').empty();
					$('#answers').empty();
					$('#start-button').empty();
		          	$('#question').text("Correct!");
					$('#answers').html("<img src='http://extras.mnginteractive.com/live/media/site36/2012/1230/20121230_062534_demaryius-thomas-broncos.gif'>");
					correct++;
				}else{
					stop();
					$('#timer').remove();
					runFiveSec();
					$('#question').empty();
		          	$('#answers').empty();
		          	$('#start-button').empty();
		          	$('#question').text("Incorrect! The Denver Broncos Won!");
					$('#answers').html("<img src='http://extras.mnginteractive.com/live/media/site36/2012/1230/20121230_062534_demaryius-thomas-broncos.gif'>");
					incorrect++;
				}
			});
	}
}


function secondQuestion(){
	currentQuestion = 1;
	count = 7;
	runThirty();
	$('#question').append(questions[currentQuestion].question);

		for(var i = 0; i < numChoices; i++){
		console.log(answers[i]);
		var answersDiv = $('<p>');
		answersDiv.text(answers[i]);
		$('#answers').append(answersDiv);
		}
}



function clearStuff(){
	$('#question').text("Ran out of time!");
	$('#answers').html("<img src='http://extras.mnginteractive.com/live/media/site36/2012/1230/20121230_062534_demaryius-thomas-broncos.gif'>");
	incorrect++;
}


function runThirty(){
	counter = setInterval(questionTimer, 1000);
}


function questionTimer(){
	count--;
	$("#timer").html("Time remaining: " + count);
	if(count === 0){
		clearInterval(counter);
		clearStuff();
	}
}


function runFiveSec(){
	counter = setInterval(fiveSeconds, 1000);
}


function fiveSeconds(){
	five--;
	$("#fiveSec").html("Next question in: " + five);
	if(five === 0){
		clearInterval(counter);
		secondQuestion();
	}
}


function stop() {
    clearInterval(number);
    $('#timer').html(" ");
}





});