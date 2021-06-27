function playSound(objectPressed) {

    switch (objectPressed) {
        case "w":
            var audioCrash = new Audio("sounds/crash.mp3");
            audioCrash.play();
            break;
        
        case "a":
            var audioKick = new Audio("sounds/kick-bass.mp3");
            audioKick.play();
            break;
        
        case "s":
            var audioSnare = new Audio("sounds/snare.mp3");
            audioSnare.play();
            break;

        case "d":
            var audioTom1 = new Audio("sounds/tom-1.mp3");
            audioTom1.play();
            break;

        case "j":
            var audioTom2 = new Audio("sounds/tom-2.mp3");
            audioTom2.play();
            break;

        case "k":
            var audioTom3 = new Audio("sounds/tom-3.mp3");
            audioTom3.play();
            break;
        
        case "l":
            var audioTom4 = new Audio("sounds/tom-4.mp3");
            audioTom4.play();
            break;
    
        default:
            console.log("wtf did you press");
            break;
    }
}


function onClicked() {
    var buttonPressed = this.innerHTML;

    console.log(buttonPressed, this);
    playSound(buttonPressed);
    buttonAnim(buttonPressed);
    
}


function onKeyPress(event) {

    var keyPressed = event.key

    console.log(keyPressed);
    playSound(keyPressed);
    buttonAnim(keyPressed);
}


function buttonAnim(thing) {

    document.querySelector("." + thing).classList.add("pressed");

    setTimeout(removeButtonAnim, 100, thing);
}


function removeButtonAnim(thing) {

    document.querySelector("." + thing).classList.remove("pressed");
}





document.addEventListener('keydown', onKeyPress);
// document.addEventListener('keyup', resetButton);

var drumAmount = document.querySelectorAll(".drum").length;

for (var index = 0; index < drumAmount; index++) {

    document.querySelectorAll(".drum")[index].addEventListener("click", onClicked);
}
