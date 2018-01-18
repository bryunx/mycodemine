//Create an array with object with questions/answers
var questions = [
	{
		question: "What team does Steph Curry play for?",
		answer: "warriors"
	},
	{
		question: "What is Steph Curry's jersey number?",
		answer: "30"
	},
	{
		question: "50/5=?",
		answer: "10"
	},
	{
		question: "Are you a human?",
		answer: "yes"
	},
	{
		question: "Unscramble the word 'nas ocsicnarf'",
		answer: "san francisco"
	},
	{
		question: "Who's faster? Rabbit or Turtle?",
		answer: "rabbit"
	},
	{
		question: "Are Tesla vechicle electric?",
		answer: "yes"
	},
	{
		question: "How many days are in a year?",
		answer: "365"
	},
	{
		question: "How many colors are in RGBIV",
		answer: "5"
	},
	{
		question: "What planet are you from?",
		answer: "earth"
	},
]

//Create a for loop to print out questions and answers
for(i=0; i<questions.length; i++) {

//Create a variable that would equal questions
	q=questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

//Create a function
function getInfo() {
//Create 2 variables for correct and incorrect
	var correct=0;
	var incorrect=0;
//Create another for loop to verify the answers
	for(var i=0; i<questions.length; i++) {
//Create 3 variables
	//First for correct answers
		var realAnswers = questions[i].answer
	//Second that the user puts in
		var userAnswers = document.getElementById('answer' + [i]).value.toLowerCase()
	//Third to add class if they get the questions correct/incorrect
		var questionResults = document.getElementById('question' + [i])
//If statement
		if(realAnswers == userAnswers) {
			questionResults.className = 'correct'
			correct++
		} else {
			questionResults.className = 'incorrect'
			incorrect++
		}
	}
//Grab Id's to display correct/incorrect
	document.getElementById('correct').textContent = "You got " + correct + " correct."
	document.getElementById('incorrect').textContent = "You got " + incorrect + " incorrect."
}



