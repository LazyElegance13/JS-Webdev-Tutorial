var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var player1_link = "./images/dice" + randomNumber1 + ".png";
var element = document.querySelector('.img1');
element.setAttribute('src', player1_link);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var player2_link = "./images/dice" + randomNumber2 + ".png";
var element2 = document.querySelector('.img2');
element2.setAttribute('src', player2_link);

var winning_message = "🚩 Player 1 Wins!";
if (randomNumber1 < randomNumber2) {
winning_message = 'Player 2 Wins! 🚩';
} else if (randomNumber1 == randomNumber2) {
  winning_message = "Draw!";
}

document.querySelector('h1').innerHTML = winning_message;