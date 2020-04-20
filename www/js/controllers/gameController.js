myApp
.controller('gameController', ['$scope', '$state', function($scope, $state) {

    var cols = document.getElementsByClassName("col-demo");
    
    cols[0].addEventListener("click", function() {
        alert(this.innerHTML);
    });

    // for(let i=0; i< abbrArray.length; i++) {
    // document.getElementsByTagName("abbr")[i].style.color = "#ff8e00";
    //   document.getElementsByTagName("abbr")[i].style.backgroundColor = "#fff8e1";
    //   document.getElementsByTagName("abbr")[i].style.textDecorationLine = "none";
    //   document.getElementsByTagName("abbr")[i].addEventListener("click", function(){
    //     let obj = {
    //       title: this.title,
    //       word: this.innerHTML,
    //       }
    //     window.postMessage(
    //       JSON.stringify(obj)
    //     );
    //   });

    var box1=document.getElementById("box1"),
    box2=document.getElementById("box2"),
    box3=document.getElementById("box3"),
    box4=document.getElementById("box4"),
    box5=document.getElementById("box5"),
    box6=document.getElementById("box6"),
    box7=document.getElementById("box7"),
    box8=document.getElementById("box8"),
    box9=document.getElementById("box9"),
turn=document.getElementById("turn"),
table=document.getElementsByTagName("table"),
cell=document.getElementsByTagName("td"),
check=true,
checkWinner=false,
count=0;


function populate (board) {
if(count<10) {
 if(count<=9 && checkWinner==false) {
 if(board.innerHTML=="") {
      if(check==true) {
          check=false;
          board.innerHTML="X";
          turn.innerHTML="Its O turn";
          count++; 
          findWinner(board);
          if(checkWinner==true) {
            turn.innerHTML="X is Winner";
          }
    } else {
    count++; 
          nextPlayer(board);
    }
  }
 if(count==9) {   	 
          turn.innerHTML="Its a Draw";
 }
 }

} 

}

function nextPlayer (board) {
check=true;
   board.innerHTML="O";
turn.innerHTML="Its X turn";
findWinner(board);
if(checkWinner==true) {
      turn.innerHTML="O is Winner";
}
}

function findWinner (board) {

if((box1.innerHTML!="" && box1.innerHTML==box2.innerHTML && box1.innerHTML==box3.innerHTML)) {
    set(box1,box2,box3);
}
if((box4.innerHTML!="" && box4.innerHTML==box5.innerHTML && box4.innerHTML==box6.innerHTML)) {
    set(box4,box5,box6);
}
if((box7.innerHTML!="" && box7.innerHTML==box8.innerHTML && box7.innerHTML==box9.innerHTML)) {
    set(box7,box8,box9);
}
 
if ((box1.innerHTML!="" && box1.innerHTML==box4.innerHTML && box1.innerHTML==box7.innerHTML)) {
    set(box1,box4,box7);
}
if((box2.innerHTML!="" && box2.innerHTML==box5.innerHTML && box2.innerHTML==box8.innerHTML)) {
    set(box2,box5,box8);
} 
if((box3.innerHTML!="" && box3.innerHTML==box6.innerHTML && box3.innerHTML==box9.innerHTML)) {
    set(box3,box6,box9);
}
if((box1.innerHTML!="" && box1.innerHTML==box5.innerHTML && box1.innerHTML==box9.innerHTML)) {
    set(box1,box5,box9);
}         
if((box3.innerHTML!="" && box3.innerHTML==box5.innerHTML && box3.innerHTML==box7.innerHTML))  {
    set(box3,box5,box7);
}   
    
   

} 

function set(cell1,cell2,cell3) {
checkWinner=true;
   count=10;
   cell1.classList.add("winner");
   cell2.classList.add("winner");
   cell3.classList.add("winner");
   
}

function init(elmnt) {
populate(elmnt);
}

function playAgain() {
    box1.innerHTML="";
box2.innerHTML="";
box3.innerHTML="";
box4.innerHTML="";
box5.innerHTML="";
box6.innerHTML="";
box7.innerHTML="";
box8.innerHTML="";
box9.innerHTML="";
turn.innerHTML="Its X turn";
checkWinner=false;
check=true;
count=0;
box1.classList.remove("winner");
box2.classList.remove("winner");
box3.classList.remove("winner");
box4.classList.remove("winner");
box5.classList.remove("winner");
box6.classList.remove("winner");
box7.classList.remove("winner");
box8.classList.remove("winner");
box9.classList.remove("winner");



}
}]);
