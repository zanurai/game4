//alert("hello");

let game1 = document.getElementById("game1");
let game2 = document.getElementById("game2");
const jumpSound = new Audio("jump.mp3");
const gameOverSound = new Audio("game.mp3");

function jump() {
    jumpSound.play();
    if (game1.classList != "animate") {
        game1.classList.add("animate");
    }

    setTimeout(function () {

        game1.classList.remove("animate")

    }, 500)
}

let check = setInterval(function () {

    let game1Top = parseInt(window.getComputedStyle(game1).getPropertyValue("top"));
    let game2Left = parseInt(window.getComputedStyle(game2).getPropertyValue("left"))

    if (game2Left < 20 && game2Left > 0 && game1Top >= 130) {
        game2.style.animation = "none";
        game2.style.display = "none";
        gameOverSound.play();
        alert("u loose");
    }
}, 100)