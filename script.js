// First Dice


var a = Math.random()
var randomNumber1 = Math.floor((a*6)+1)

var randomDIceImage= "dice"+randomNumber1+".png";
var randomImageSource = "images/" + randomDIceImage;

var Image1 = document.querySelector(".img1");
Image1.setAttribute("src", randomImageSource);


// Second Dice


var b = Math.random()
var randomNumber2 = Math.floor((b*6)+1)

var randomDIceImage2= "dice"+randomNumber2+".png";
var randomImageSource2 = "images/" + randomDIceImage2;

var Image2 = document.querySelector(".img2");
Image2.setAttribute("src", randomImageSource2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 Wins!🚩"
}
if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩"
}
if (randomNumber1===randomNumber2) {
    document.querySelector("h1").innerHTML="Draw! "
}
