// VARIABLES
var compLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;

var guessesLeft = 9;
var userChoices = [];

// GAME
document.onkeyup = function(event) {

    var userGuess = event.key;

    var compChoice = compLetters[Math.floor(Math.random() * compLetters.length)];

    if (userGuess === compChoice) {
        alert "YOU WIN!";
        wins ++;
        guessesLeft = 9;
        userChoices = [];
    }

    if (userGuess != compChoice) {
        guessesLeft --;
        userChoices.push(userGuess);
    }

    if (guessesLeft === 0) {
        alert "YOU LOSE!";
        guessesLeft = 9;
        losses ++;
        userChoices = [];
    }


    // DISPLAY VARIABLES
    var html =
    "<h1> The Psychic Game </h1>" +
	"<p>Guess what letter I'm thinking of!</p>" + 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +   
    "<p>Guesses left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: : " + userChoices + "</p>";

    document.querySelector('#game').innerHTML = html;

}
