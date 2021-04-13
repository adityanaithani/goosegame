const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const audio = new Audio('bonk.mp3');

function jump() {
    if (dino.classList != "jump"){
    dino.classList.add("jump");

    setTimeout(function () {
        dino.classList.remove("jump");
    }, 300);
    }
}

let isAlive = setInterval(function () {
    // get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    // get current cactus X position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    //detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        //coliision
        audio.play();
        if(!alert('You let the goose die :(')){window.location.reload();}

    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
})

