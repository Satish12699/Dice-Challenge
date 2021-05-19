var randomNumber1= Math.floor(Math.random() * 6) + 1; //generates random numbers 

var randomDiceImage="dice"+ randomNumber1 +".png" ; //Dice1 - Dice6

var randomImageSource= "images/"+ randomDiceImage;  // images/Dice1 - Dice6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);  //for image1





var randomNumber2 = Math.floor(Math.random() * 6) + 1;  //generates random numbers 

var randomDiceImage2 = "dice"+ randomNumber2 + ".png";  //Dice1 - Dice6

var randomImageSource2 = "images/"+ randomDiceImage2;  // images/Dice1 - Dice6

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2); //for image2


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h3").innerHTML = "🎉player1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h3").innerHTML = "player2 wins🎉";
}
else
{
    document.querySelector("h3").innerHTML = "Draw!";
}