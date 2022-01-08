let numberOfGuessesLeft = 20;
let secretNumber = Math.floor(Math.random() * 20 + 1);
let highScore = 0;
console.log(secretNumber);

function youWin() {
  document.getElementById("message").innerHTML = "you win";
  document.getElementById("secretNumber").innerHTML = secretNumber;
  document.body.style.backgroundColor = "#FFFF33";

}

function youLose() {
  document.getElementById("guessesLeft").innerHTML = "<p> 0 </p>";
  document.getElementById("message").innerHTML = "you lose";
  document.getElementById("secretNumber").innerHTML = secretNumber;
}

function checkHighScore() {
  if (numberOfGuessesLeft > highScore) {
    highScore = numberOfGuessesLeft;
    document.getElementById("highScore").innerHTML = highScore;
  }
}

function function1() {
  numberOfGuessesLeft -= 1;
  let myGuess = document.getElementById("numberGuess1").value;

  if (myGuess < 21 && myGuess > 0) {
    if (numberOfGuessesLeft > 0) {
      document.getElementById("guessesLeft").innerHTML = "<p>" + numberOfGuessesLeft + "</p>";
      if (myGuess < secretNumber) {
        document.getElementById("message").innerHTML = "too low";
      } else if (myGuess > secretNumber) {
        document.getElementById("message").innerHTML = "too high";
      } else {
        youWin();
        checkHighScore();
      }
    } else {
      youLose();
    }
  } else {
    document.getElementById("message").innerHTML = "Not A Valid Guess";
  }
}

function setGame(){
  numberOfGuessesLeft = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.getElementById("numberGuess1").value = "";
  document.getElementById("message").innerHTML = "Good Luck";
  document.getElementById("secretNumber").innerHTML = "?";
  console.log(secretNumber);
  document.body.style.backgroundColor = "#E5F6DF";
}
