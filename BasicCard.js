exports.BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
}

exports.ClozeCard = function(text, cloze) {

    this.full = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, "...");
}

// Questions borrowed from: https://chartcons.com/100-history-trivia-questions-answers/

exports.questions = [
{
    full: "The deconstruction of the Berlin Wall began in 1989.",
    cloze: "1989"
}, 

{
    full: "Andrew Johnson became president after the assassination of Abraham Lincoln.",
    cloze: "Andrew Johnson"
},

{
	full: "Harvard is the oldest University in the USA - it was founded in 1636 in Cambridge Massachusetts",
	cloze: "Harvard"
},

{
	full: "The book Robinson Crusoe was published in London on April 25th, 1719.",
	cloze: "Robinson Crusoe"
},

{
	full: "Holy Roman Emperor Charles VI created the principality of Lichtenstein in 1719.",
	cloze: "Lichtenstein"
}

]
