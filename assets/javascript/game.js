// VARIABLES
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;

var guessesLeft = 9;
var userChoices = [];

// GAME
document.onkeyup = function(event) {

    var userGuess = event.key;

    var compChoice = letters[Math.floor(Math.random() * letters.length)];

    if (letters.indexOf(userGuess) > -1) {

        if (userGuess === compChoice) {
            wins ++;
            guessesLeft = 9;
            userChoices = [];
        }

        if (userGuess !== compChoice) {
            guessesLeft --;
            userChoices.push(userGuess);
        }

        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses ++;
            userChoices = [];
        }
    
    }

    // DISPLAY NEW VARIABLES
    var html =
    "<h1>The Psychic Game</h1>" +
	"<p>Guess what letter I'm thinking of!</p>" + 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +   
    "<p>Guesses left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: : " + userChoices + "</p>";

    document.querySelector("#game").innerHTML = html;

}
