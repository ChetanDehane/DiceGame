function play() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".dice .img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".dice .img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
    if(randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "&#9760&#65039Draw!&#9760&#65039";
    }else if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "&#128681 Player1 Wins!";
    }else {
        document.querySelector("h1").innerHTML = "Player 2 Wins!&#128681";
    }
}

function reset() {
    document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
    document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
    document.querySelector("h1").innerHTML = "Ready Set Roll";
}
