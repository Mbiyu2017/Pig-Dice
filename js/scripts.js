//business logic
var randomNumber= function(){

  return Math.floor(Math.random()*6) +1;
}














//UI logic
$(document).ready(function(){
  $("#roll-dice").click(function(){
var random = randomNumber();
    $("#score").text(random);
  });
});
