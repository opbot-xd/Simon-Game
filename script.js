start()
var comp_seq=[]
var user_seq=[]
var game_no=false
var level=0
var leveluser=0
var current=0
function start(){
    comp_seq=[]
    user_seq=[]
    game_no=false
    level=0
    leveluser=0
    current=0
    $(document).ready(function () {
    $(document).on({
        click: gameon,
        keyup: gameon,
    });
    });
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function gameon() {
  console.log("hello")
  game_no=true
  $(document).off("click");
  $(document).off("keyup");
  seq()  
}
function seq(){
    leveluser=0
    user_seq=[]
    level++
    let si="Level "+level
    $(".text").text(si);
    let i = randomNumber(1,5)
    comp_seq.push(i)
    animate(i)
}
$(".box").click(function (e) { 
  leveluser++
  var userin = $(this).attr("id");
  animate(userin[1])
  user_seq.push(userin[1])
  check()
});

function check(){
  if(user_seq[leveluser-1]==comp_seq[leveluser-1]){
    if(leveluser==level){
      setTimeout(function () {
        seq();
      }, 1000);
    }
  }
  else{
    $(".text").text("Game over. Click anywhere to restart");
    start()

  }
}
function animate(i){

    $("#b"+i).addClass("pressed");
    setTimeout(function () {
        $("#b" + i).removeClass("pressed");
      }, 400);
}
