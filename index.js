document.querySelector("body").addEventListener("click", changephoto);

function changephoto() {
  var randomNumber1 = Math.random();
  randomNumber1 = (randomNumber1 * 6) + 1;
  randomNumber1 = Math.floor(randomNumber1);
  var x = document.querySelectorAll("img");
  x[0].src = "images/dice" + randomNumber1 + ".png";

  var randomNumber2 = Math.random();
  randomNumber2 = (randomNumber2 * 6) + 1;
  randomNumber2 = Math.floor(randomNumber2);
  var x = document.querySelectorAll("img");
  x[1].src = "images/dice" + randomNumber2 + ".png";
  console.log(randomNumber1, randomNumber2);
  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').textContent = " 🚩 player one win ";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').textContent = "  player two win 🚩 ";
  }else {
    document.querySelector('h1').textContent = " 🚩 won won 🚩 ";
  }
}
