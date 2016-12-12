$(document).ready(function(){


var questions = [
{
   question : "What football team won the Super Bowl in 2016?",
   teams : ["Broncos", "Panthers", "Patriots", "Giants"],
   correct : "Broncos",
   image: "<img src='http://extras.mnginteractive.com/live/media/site36/2012/1230/20121230_062534_demaryius-thomas-broncos.gif'>",
   correctAnswers: "The Denver Broncos won the Super Bowl!"
},

{
	question : "What baseball team won the World Series in 2016?", 
	teams : ["Dodgers", "Yankees", "Cubs", "Cardinals"],
	correct : "Cubs",
	image: "<img src='https://media.giphy.com/media/l0MYCYe23pOlaK21G/giphy.gif'>",
	correctAnswers: "The Chicago Cubs won the World Series!"
},

{
	question : "What hockey team won the Stanely Cup in 2016?",
	teams : ["Rangers", "Penguins", "Sharks", "Blackhawks"],
	correct : "Penguins",
	image: "<img src='http://2.cdn.nhle.com/penguins/images/upload/2015/02/malkin2.19.15web.gif'>",
	correctAnswers: "The Pittsburgh Penguins won the Stanley Cup!"
},

{
	question : "Which basketball team won the NBA Championship in 2016?",
	teams : ["Warriors", "Spurs", "Cavaliers", "Raptors"],
	correct : "Cavaliers",
	image: "<img src='https://67.media.tumblr.com/3cd636d3ecce901a48fb2cbc69440519/tumblr_nee7i0IAHm1s3gys4o1_400.gif'>",
	correctAnswers: "The Clevland Cavaliers won the NBA Championship!"
}];


var currentQuestion = 0;
var currentTeamsLength;
var currentTeams;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var count = 30;
var counter;
var five = 5;
var answersDiv;



$('#start-button').on('click', function(){
	displayQuestion();
	$(this).remove();
});


function displayQuestion(){
	
	currentTeamsLength = questions[currentQuestion].teams.length;
	currentTeams = questions[currentQuestion].teams;
	
	runThirty();
	
	$('#question').append(questions[currentQuestion].question);

	for(var i = 0; i < currentTeamsLength; i++){
		console.log(currentTeams[i]);
		answersDiv = $('<p>');
		answersDiv.text(currentTeams[i]);
		$('#answers').append(answersDiv);
	}
}



$(document).on('click', '#answers p', function(){
	console.log(this.textContent);

	clearInterval(counter);
	count = 30;
	runFiveSec();
	$('#timer').empty();
	$('#question').empty();
	$('#answers').empty();
	$('#start-button').empty();
	$('#correct-answer').html(questions[currentQuestion].correctAnswers);
	$('#answers').html(questions[currentQuestion].image);

	if (this.textContent == questions[currentQuestion].correct){
	  $('#question').text("Correct!");
		correct++;
	}else{
	  $('#question').text("Incorrect!");
		incorrect++;
	}
});



function clearStuff(){
	$('#timer').empty();
	$('#fiveSec').empty();
	$('#answers').empty();
	$('#correct-answer').empty();
	$('#question').empty();
}



function outOfTime(){
	$('#answer').text("You ran out of time!");
	unanswered++;
}


function runThirty(){
	counter = setInterval(questionTimer, 1000);
}


function questionTimer(){
	count--;
	$("#timer").html("Time remaining: " + count);
	if(count === 0){
		clearInterval(counter);
		count = 30;
		outOfTime();
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
		if(currentQuestion < questions.length){
			displayQuestion();
		}else{
			displayResults();
		}		
	}
}


function displayResults(){
	$('#timer').html("Correct answers: " + correct);
	$('#fiveSec').html("Incorrect answers: " + incorrect);
	$('#question').html("Unaswered: " + unanswered);
	$('#correct-answer').empty();
	$('#answers').append('<input type="button" class="btn btn-primary" id="play-again" value="Play Again">');
}




});