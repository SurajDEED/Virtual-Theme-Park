// alert("The page is working ");

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;


// Testing the array using alert
// alert(buttonColors[0]);
// alert(buttonColors[1]);
// alert(buttonColors[2]);  
// alert(buttonColors[3]);

$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

})


$(".btn").click(function handler() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
})

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }

  else {
    console.log("wrong");

    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function()
    {
      $("body").removeClass("game-over");
    },200)

    $("#level-title").text("Game over, Press any key to start ");
    startOver();
  }

}

function startOver()
{
  level=0;
  gamePattern=[];
  started=false;

}
function nextSequence() {

  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);


  var randomNumber = Math.floor(Math.random() * 4);
  // alert(randomNumber);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);


  $("#" + randomChosenColor).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);

  playSound(randomChosenColor);


}

function playSound(name) {

  var audio = new Audio(name + ".mp3");
  audio.play();
}


function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");

  }, 100)

}



