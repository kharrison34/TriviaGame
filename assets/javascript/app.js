var questions = [{
    question: "Who was Don's first secretary?",
    choices: ["lacey", "peggy", "amy", "jenny"],
    correctAnswer: "peggy",
}, {
    question: "What is Don's real name?",
    choices: ["Dan Wilson", "denis Wyman", "Dick Whitman", "dale Watson"],
    correctAnswer: "Dick Whitman",
}, {
    question: "What is the name of Don's daughter?",
    choices: ["sally", "stacey", "jane", "hillary"],
    correctAnswer: "sally",
},{
    question: "What is the name of Don's second wife?",
    choices: ["Marrisa", "Meghan", "Marina", "Mara"],
    correctAnswer: "Meghan",
},{
    question: "What is the name of Don's second son?",
    choices: ["Jeff", "Jerry", "Gene", "Jacob"],
    correctAnswer: "Gene",
},{
    question: "What is Mr. Sterling's first name?",
    choices: ["Robert", "Roger", "Richard", "Rielly"],
    correctAnswer: "Roger",

},{
    question: "What is the name of Mr. Sterling's first wife?",
    choices: ["Mona", "Margot", "Mary", "July"],
    correctAnswer: "Mona",

},{
    question: "Which copy-writer moonlights as a novelist?",
    choices: ["Ken Cosgrove", "Harry Crane", "Pete Campbell", "Lane Pryce"],
    correctAnswer: "Ken cosgrove",

},{ 
    question: "What war did Don fight in?",
    choices: ["Korea", "Vietnm", "WW2", "He didn't fight"],
    correctAnswer: "Korea",


}];

var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;



$("#timerStarts").hide();
$(".submitAnswer").hide();
$(".gameReset").hide();
$("#correctAnswers").hide();
$("#incorrectAnswers").hide();

function checkAnswer () { 
	for (var i = 0; i < questions.length; i++) {
		var userChoice = $("input[name = 'question-" + i +"']:checked");
		if (userChoice.val() == questions[i].correctAnswer) {
			correctAnswers++; 

			} else {
				incorrectAnswers++;
				
		}
	}
	$("#correctAnswers").append(" " + correctAnswers);
	$("#incorrectAnswers").append(" " + incorrectAnswers); 
};


function timer() {
	var seconds = 60;
	counter = setInterval (function() {
	$("#timerStarts").html('<h2> Time Remaining:' + seconds-- + '</h2>');
		if (seconds === -1) {
			$("#timerStarts").html("<h2> Out of Time! </h2>");
			clearInterval(counter);
			function delayScore(){
				$("#showQuestions").hide();
				$("#timerStarts").hide();
				$(".submitAnswer").hide();
				checkAnswer();
				$("#correctAnswers").show();
				$("#incorrectAnswers").show();
			}
			setTimeout(delayScore, 1000);
		}
	}, 1000);
	
};

$(".gameStart").on("click", function() {
	$(".gameStart").hide();
	displayCurrentQuestion();
	$("#timerStarts").show();
	timer();


});

function displayCurrentQuestion() {
	$(".submitAnswer").show();
	for (var i = 0; i < questions.length; i++) {
		$("#showQuestions").append("<h3>" + questions[i].question + "</h3");
		for (var j = 0; j < questions[i].choices.length; j++) {
			$("#showQuestions").append('<input type="radio" name="question'  + '-' + i + '" value="'+ questions[i].choices[j] + '"> '+ questions[i].choices[j] );

		}
	}
	$(".submitAnswer").on("click", function() {
		$("#showQuestions").hide();
		$("#timerStarts").hide();
		$(".submitAnswer").hide();
		checkAnswer();
		clearInterval(counter);
		$("#correctAnswers").show();
		$("#incorrectAnswers").show();

	});
};
