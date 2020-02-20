// Crystal Values
var crystal = {
  purple: {
    name: "Purple",
    value: 0
  },
  green: {
    name: "Green",
    value: 0
  },
  blue: {
    name: "Blue",
    value: 0
  },
  pink: {
    name: "Pink",
    value: 0
  }
};

var yourScore = 0;
var goalScore = 0;

var winCount = 0;
var lossCount = 0;

var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function() {
  // Reset current score
  yourScore = 0;
  // set new target score
  goalScore = getRandom(19, 120);
  // set diffferent values for each of crystals
  crystal.purple.value = getRandom(1, 12);
  crystal.green.value = getRandom(1, 12);
  crystal.blue.value = getRandom(1, 12);
  crystal.pink.value = getRandom(1, 12);
  // change HTML
  $("#yourScore").html(yourScore);
  $("#goalScore").html(goalScore);

  //test
  console.log("---------");
  console.log("Goal Score: " + goalScore);
  console.log(
    "Purple: " +
      crystal.purple.value +
      " | Green: " +
      crystal.green.value +
      " | Blue: " +
      crystal.blue.value +
      " | Pink: " +
      crystal.pink.value
  );
  console.log("---------");
};

var addValues = function(crystal) {
  yourScore = yourScore + crystal.value;
  console.log("Your Score:  " + yourScore);

  $("#yourScore").html(yourScore);

  checkWin();
};

var checkWin = function() {
  if (yourScore > goalScore) {
    alert("Sorry, you lose!");
    console.log("You lose!");
    lossCount++;
    $("#lossCount").html(lossCount);
    startGame();
  } else if (yourScore == goalScore) {
    alert("You win!");
    console.log("You win!");
    winCount++;
    $("#winCount").html(winCount);
    startGame();
  }
};
startGame();

$("#purple").click(function() {
  addValues(crystal.purple);
});

$("#green").click(function() {
  addValues(crystal.green);
});

$("#blue").click(function() {
  addValues(crystal.blue);
});

$("#pink").click(function() {
  addValues(crystal.pink);
});
