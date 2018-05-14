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
})

  $(".hold-score1").click(function(){
    $(".score1").text();
  });



    $(".roll-dice2").click(function(){
    secondPlayer.currentscore =  randomNumber();

      $(".score2").text(secondPlayer.currentscore);
      $(".player-score2").text();


    });
});
