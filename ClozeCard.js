var inquirer = require('inquirer');

var flashCards = require('./BasicCard.js');
// Gets the questions
var questions = require('./BasicCard.js').questions;

var clozeQuestions = [];

for (var i = 0; i < questions.length; i++) {
    var q = new flashCards.ClozeCard(questions[i].full, questions[i].cloze);
    clozeQuestions.push(q);
}

var currentQuestion = 0;

function askQuestion() {
    inquirer.prompt([{
            type: 'input',
            message: clozeQuestions[currentQuestion].partial + '\nAnswer: ',
            name: 'userGuess'
        }

    ]).then(function(answers) {
        console.log('\n');


        console.log(clozeQuestions[currentQuestion].full);
        console.log('-------------------------------------\n');

        if (currentQuestion < clozeQuestions.length - 1) {
            currentQuestion++;
            askQuestion();
        } else {
            console.log('Take a Break - Study Time is Over!');

        }
    })
}

askQuestion();
