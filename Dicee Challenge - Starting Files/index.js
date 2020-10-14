var dice_img1 = Math.floor((Math.random()*6) + 1);
var dice_img2 = Math.floor((Math.random()*6) + 1);
document.querySelector("img.img1").srcset="images/dice" + dice_img1 + ".png";
document.querySelector("img.img2").srcset="images/dice" + dice_img2 + ".png";
var whowins;
if (dice_img1 > dice_img2){
    whowins = "Player1 won!!!!";
}
else if (dice_img1 === dice_img2){
    whowins = "It's a Draw!!!!";
}
else {
    whowins = "Player2 won!!!!";
}document.querySelector("h1").innerHTML=whowins;
