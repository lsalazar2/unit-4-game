



$(document).ready(function () {

 // Define Functions

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function start_game() {
    var totalscore =0;
    wins=0;
    losses=0;
    var randomNum = getRandomInt(19,120); // Get a random number from 19-120 to compare total score with
    console.log(randomNum);
      
    $("#score").text(randomNum); //store random number for current game's score

    for (var i = 0; i < 4; i++) {
      var crystals[i] = getRandomInt(1,9); //get 4 random #s for crystals 1-4

      var crystalBtn = $("<button>");

      crystalBtn.addClass("crystal-button crystal crystal-button-image");
      
      crystalBtn.attr("data-crystal", crystal[i]);

      crystalBtn.text(crystal[i]);

      $("#buttons").append(crystalBtn);

    }
  }
  
  //Start new game
  start_game();

  //Press one of 4 crystal buttons

  $(".crystal-button").on("click", function() {

  //Calculate score and put on webpage
    var crystalvalue = ($(this).attr());
    crystalvalue = parseint(crystalvalue);
    totalscore += crystalvalue;
    $("#total").text(totalscore);

    if (totalscore === randomNum){
      wins++;
      document.write ("You won!!");
      $(#Wins).text(wins);
    }
    
    else if (totalscore > randomNum) {
      losses++;
      document.write ("You lost");
      $(#Losses).text(losses);
    }  
  }

  });

</script>