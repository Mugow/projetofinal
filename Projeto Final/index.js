var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "A":
        case "a":
            var leftCrash = new Audio("assets/sounds/leftCrash.mp3");
            leftCrash.play();
            break;
        case "S":
        case "s":
            var tom1 = new Audio("assets/sounds/tom1.mp3");
            tom1.play();
            break;
        case "D":
        case "d":
            var snare = new Audio("assets/sounds/snare.mp3");
            snare.play();
            break;
        case "J":
        case "j":
            var tom3 = new Audio("assets/sounds/tom3.mp3");
            tom3.play();
            break;
        case "K":
        case "k":
            var tom2 = new Audio("assets/sounds/tom2.mp3");
            tom2.play();
            break;
        case "L":
        case "l":
            var kickbass = new Audio("assets/sounds/kickbass.mp3");
            kickbass.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}