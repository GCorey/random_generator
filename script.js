var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("I am thinking of a number between 1 and 6. What is it?");
if (parseInt(guess) === randomNumber ) {
  alert("You guessed the number!");
} else {
  alert("Sorry man, the number was " + randomNumber);
  
} 