var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var gameStarted = false;
var level = 0;

$(document).on("keyup", function () {
  if (!gameStarted) {
    gameStarted = true;
    nextSequence();
  }
});

$(".btn").click(function () {
  userChosenColor = $(this).attr("id");
  if (userChosenColor === randomChosenColor) {
    playSound(userChosenColor);
  } else {
    playSound("wrong");
  }
  animationPress(userChosenColor);
});

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}

function playSound(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function animationPress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
