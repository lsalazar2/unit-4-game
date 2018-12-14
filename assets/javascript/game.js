
$(document).ready(function () {

  //Define global variables at top
  var totalscore = 0;
  var wins = 0;
  var losses = 0;
  var randomNum = 0;
  var image = ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"];

  // Define Functions

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function start_game() {
    totalscore = 0;
    wins = 0;
    losses = 0;
    alert("game started");

    var randomNum = getRandomInt(19, 120); // Get a random number from 19-120 to compare total score with
   

    $("#score").text(randomNum); //store random number for current game's score

    for (var i = 0; i < 4; i++) {
      var crystal = getRandomInt(1, 9); //get 4 random #s for crystals 1-4
      var imageTag = $("<img>"); 

      imageTag.addClass("crystal-image");
      // Each imageCrystal will be given a src link to the crystal image
      imageTag.attr("crystal-image", imageTag);
      
      imageTag.attr("src", image[i]);

      imageTag.attr("data-crystal", crystal);

      //imageTag.text(crystal[i]);

      $("#crystals").append(imageTag);

    }
  }

  function isgameover() {
    if (totalscore === randomNum) {
      wins++;
      document.write("You won!!");
      $("#Wins").text(wins);
    }

    else if (totalscore > randomNum) {
      console.log("total score:" + totalscore, "randomnum:" + randomNum);
      losses++;
      document.write("You lost");
      $("#Losses").text("losses");
    }
    else {
      console.log("continue playing");
      //keep playing
    }
  }

//Start new game
start_game();

//Press one of 4 crystal buttons

$(".crystal-image").on("click", function () {
  console.log("clicked on crystal");

  //Calculate score and put on webpage
  var crystalvalue = $(this).attr("data-crystal");
  crystalvalue = parseInt(crystalvalue);

  totalscore += crystalvalue;
  $("#total").text(totalscore);
  isgameover();
});

});