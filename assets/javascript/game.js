
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
    alert("New Game");
    totalscore = 0;
    $("#total").text(totalscore);

    randomNum = getRandomInt(19, 120); // Get a random number from 19-120 to compare total score with
    console.log("random #:" + randomNum);

    $("#score").text(randomNum); //store random number for current game's score

    $("#crystals").empty();

    for (var i = 0; i < 4; i++) {
      var crystal = getRandomInt(1, 9); //get 4 random #s for crystals 1-4
      console.log("random crystal value #:" + crystal);
      var imageCrystal = $("<img>"); 
    // First each crystal will be given the class ".crystal-image" defined in CSS.

      imageCrystal.addClass("crystal-image");

      // Each imageCrystal will be given a src link to the crystal image defined in the image array above
   
      imageCrystal.attr("src", image[i]);

      // Each imageCrystal will be given a data attribute called data-crystal.
    
      imageCrystal.attr("data-crystal", crystal);

    // Last, each crystal image (with classes and attributes) will get added to the page.

      $("#crystals").append(imageCrystal);
  
    }
  }

  function isgameover() {
    console.log("isgameover call ");
    if (totalscore === randomNum) {
      wins++;
      $("#Wins").text(wins);
      alert("You win!!");
      start_game();
    }

    else if (totalscore > randomNum) {
      losses++;
      $("#Losses").text(losses);
      alert("You lost");
      start_game();
    }
    else {
      console.log("continue playing");
      //keep playing wait for next click
    }
  }

//Start new game
start_game();

//Press one of 4 crystal buttons

  $(document).on("click","img",function(){
  //Calculate score and put on webpage
  var crystalvalue = ($(this).attr("data-crystal"));

  crystalvalue = parseInt(crystalvalue);

  totalscore += crystalvalue;

  $("#total").text(totalscore);

  isgameover();

});
//check if you won or lost

});