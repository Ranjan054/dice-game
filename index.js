var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImages = "dice"+ randomNumber1 + ".png";

var imagesFile = "images/"+ randomImages;

var select = document.querySelectorAll("img")[0];

select.setAttribute("src", imagesFile);
//second image editing

var randomNumber2 = Math.floor(Math.random()*6)+1;

var selectImages2 = "images/dice" + randomNumber2 + ".png"

var select = document.querySelectorAll("img")[1].setAttribute("src", selectImages2);

//if else statement
if( randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎉🚩 Player 1 win!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 win🎉🚩";

}
else {
  document.querySelector("h1").innerHTML = "DRAW!!!";
}
