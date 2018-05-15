//business logic
var randomNumber= function(){
  return Math.floor(Math.random()*6)+1;
}

function Playerscore(currentscore, newscore,realscore){
  this.currentscore = currentscore;
  this.newscore = newscore;
  this.realscore = realscore;
}

var firstPlayer = new Playerscore(0,0,0);
var secondPlayer = new Playerscore(0,0,0);

Playerscore.prototype.totalscore = function(){
  this.newscore+=this.currentscore
}








//UI logic
$(document).ready(function(){


  $(".roll-dice1").click(function(){
  firstPlayer.currentscore =  randomNumber();
  firstPlayer.newscore+=firstPlayer.currentscore;
    $(".score1").text(firstPlayer.currentscore);
    $(".currscore1").text(firstPlayer.newscore);

    if(firstPlayer.currentscore == 1){
      $(".roll-dice1").prop("disabled",true);
      $(".hold-score1").prop("disabled",true);
      $(".roll-dice2").prop("disabled",false);
      $(".hold-score2").prop("disabled",false);
      alert("OOPS!Your dice rolled on number 1.Its player 2's turn to roll the dice!");
    }

})

  $(".hold-score1").click(function(){
    firstPlayer.realscore += firstPlayer.newscore;
    $(".player-score1").text(firstPlayer.realscore);
    firstPlayer.currentscore=0;
    firstPlayer.newscore=0;
    $(".roll-dice1").prop("disabled",true);
    $(".hold-score1").prop("disabled",true);
    $(".roll-dice2").prop("disabled",false);
    $(".hold-score2").prop("disabled",false);
    alert("Player 2's turn")
    if (firstPlayer.realscore >= 100){
      alert("YEEE! Player 1 has Won the Game!")
    }
  });



    $(".roll-dice2").click(function(){
    secondPlayer.currentscore =  randomNumber();
    secondPlayer.newscore+=secondPlayer.currentscore;
      $(".score2").text(secondPlayer.currentscore);
      $(".currscore2").text(secondPlayer.newscore);

      if(secondPlayer.currentscore == 1){
        $(".roll-dice2").prop("disabled",true);
        $(".hold-score2").prop("disabled",true);
        $(".roll-dice1").prop("disabled",false);
        $(".hold-score1").prop("disabled",false);
        alert("OOPS!Your dice rolled to number 1.Its player 1's turn to roll the dice!");
      }
  })

    $(".hold-score2").click(function(){
      secondPlayer.realscore += secondPlayer.newscore;
      $(".player-score2").text(secondPlayer.realscore);
      secondPlayer.currentscore=0;
      secondPlayer.newscore=0;
      $(".roll-dice2").prop("disabled",true);
      $(".hold-score2").prop("disabled", true);
      $(".roll-dice1").prop("disabled",false);
      $(".hold-score1").prop("disabled",false);
      alert("Player 1's turn");
      if(secondPlayer.realscore >=100 ){
        alert("YEEEY! Player 2 has Won the Game")
      }
    });

});
