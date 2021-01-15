var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImageSource = "images/" + "dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImageSource2);


if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = "👌Player 1 won!";
} else if(randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 won!🐱‍👤";
} else {
  document.querySelector("h1").innerHTML = "🤦‍♂️You're both losers!🤦‍♀️";
}

function refresh(){
        window.location.reload("Refresh")
      }
