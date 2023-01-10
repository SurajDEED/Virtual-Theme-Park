
var numberOfButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);


    function handleClick() {
       
        var innerhtml = this.innerHTML;
      
        makeSound(innerhtml);
        animate(innerhtml);

    }
}

document.addEventListener("keydown", function (sound) {

    makeSound(sound.key);
    animate(sound.key);

});



function makeSound(key) {

    switch (key) {
        case "w":

            var tom1 = new Audio("tom-1.mp3");
            tom1.play();

            break;


        case "a":

            var crash = new Audio("crash.mp3");
            crash.play();

            break;

        case "s":

            var kick = new Audio("kick-bass.mp3");
            kick.play();

            break;

        case "d":

            var snare = new Audio("snare.mp3");
            snare.play();

            break;

        case "j":

            var tom4 = new Audio("tom-4.mp3");
            tom4.play();

            break;

        case "k":

            var tom2 = new Audio("tom-2.mp3");
            tom2.play();

            break;

        case "l":

            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;

    }


}


function animate(but) {
    var store = document.querySelector("." + but);
    store.classList.add("pressed");

    setTimeout(function () {
        store.classList.remove("pressed");
    }, 100);


}

