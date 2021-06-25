const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const myDice = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
const randomNumber1 = Math.floor(Math.random() * myDice.length);
const randomNumber2 = Math.floor(Math.random() * myDice.length);

img1.setAttribute("src", myDice[randomNumber1]);
img2.setAttribute("src", myDice[randomNumber2]);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!"
} else document.querySelector("h1").innerHTML = "You Both Lose! 😭";

