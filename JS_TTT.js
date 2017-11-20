//Note that the game is set up to where you can click a button to play again instead of it automatically starting again. Although the user story technically says that the game should reset as soon as it is over, I think that having the option to click a button and to give the user the option to reset the game as soon as it is over should suffice for the user story.

var XorO = "";
var letter = ""; //this is redundant with "letterCell1, 2, 3, etc. but once again, it works :D
var usedCell1 = 0;
var usedCell2 = 0;
var usedCell3 = 0;
var usedCell4 = 0;
var usedCell5 = 0;
var usedCell6 = 0;
var usedCell7 = 0;
var usedCell8 = 0;
var usedCell9 = 0;
var aiTurn = "";
var letterCell1 = "";
var letterCell2 = "";
var letterCell3 = "";
var letterCell4 = "";
var letterCell5 = "";
var letterCell6 = "";
var letterCell7 = "";
var letterCell8 = "";
var letterCell9 = "";
var arr=[]; //may be ok to define the following inside the function and not needed outside of it?
var pickACell;
var index;
var whoGoesFirst;
var winner = "no";
var disabled = "nope";

function pickX() {
  document.getElementById("table").style.display = "table"; //makes the game board visible and formats as a table
  document.getElementById("winStatement").style.display = "initial"; //displays the empty paragraph that will display if there is a winner
  XorO = "text1"; //makes X display when you click on a table cell
  $("#X-or-O-Select").css("display", "none");
  $("#X-And-O-Button-Container").css("display", "none"); //these 2 lines remove the "Would you like to play as x or o" options
  whoGoesFirst = Math.floor(Math.random()*2);
  if (whoGoesFirst == 1) {
    document.getElementById("winner").innerHTML = "You go first!";
  } else if (whoGoesFirst == 0) {
    document.getElementById("winner").innerHTML = "You go second!";
    disabled = "yep";
    setTimeout(aiMove, 1500);
  }
}

function pickO() {
  document.getElementById("table").style.display = "table"; //makes the game board visible and formats as a table
  document.getElementById("winStatement").style.display = "initial"; //displays the empty paragraph that will display if there is a winner
  XorO = "text2"; //makes O display when you click on a table cell
    $("#X-or-O-Select").css("display", "none");
  $("#X-And-O-Button-Container").css("display", "none"); //these 2 lines remove the "Would you like to play as x or o" options
  whoGoesFirst = Math.floor(Math.random()*2);
  if (whoGoesFirst == 1) {
    document.getElementById("winner").innerHTML = "You go first!";
  } else if (whoGoesFirst == 0) {
    document.getElementById("winner").innerHTML = "You go second!";
    disabled = "yep";
    setTimeout(aiMove, 1500);
  }
}

function placeLetter1() {
  if (usedCell1 == 0) {
  if (disabled == "nope") {
    disabled = "yep";
  if (XorO == "text1") {
    letter = "text1x";
    letterCell1 = "X";
    document.getElementById("winner").innerHTML = "O's move!";
  } else if (XorO == "text2") {
    letter = "text1o";
    letterCell1 = "O";
    document.getElementById("winner").innerHTML = "X's move!";
  } //places x or o in the corresponding div element
  document.getElementById(letter).style.display = "inline"; //inline or block is ok, not sure if there is an "optimal" choice here
  usedCell1 = 1; //prevents this function from being run again until reset is hit
    checkIfWinner();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  if (aiTurn !="yes") {
    setTimeout(aiMove, 2000); //ai will make a move in 3 seconds (new)
  } else {
      aiTurn = "no"; //i think i need this here but not sure
  } //end if aiTurn != yes
  } //end if disabled == nope
  } //end if usedCell1
}

function placeLetter2() {
  if (usedCell2 == 0) {
  if (disabled == "nope") {
    disabled = "yep";
  if (XorO == "text1") {
    letter = "text2x";
    letterCell2 = "X";
    document.getElementById("winner").innerHTML = "O's move!";
  } else if (XorO == "text2") {
    letter = "text2o";
    letterCell2 = "O";
    document.getElementById("winner").innerHTML = "X's move!";
  } //places x or o in the corresponding div element
  document.getElementById(letter).style.display = "inline"; //inline or block is ok, not sure if there is an "optimal" choice here
  usedCell2 = 1; //prevents this function from being run again until reset is hit
    checkIfWinner();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  if (aiTurn !="yes") {
    setTimeout(aiMove, 2000); //ai will make a move in 3 seconds (new)
  } else {
    aiTurn = "no"; //i think i need this here but not sure
  } //end if aiTurn != yes
  } //end if disabled == nope
  } //end if usedCell2
}

function placeLetter3() {
  if (usedCell3 == 0) {
  if (disabled == "nope") {
    disabled = "yep";
  if (XorO == "text1") {
    letter = "text3x";
    letterCell3 = "X";
    document.getElementById("winner").innerHTML = "O's move!";
  } else if (XorO == "text2") {
    letter = "text3o";
    letterCell3 = "O";
    document.getElementById("winner").innerHTML = "X's move!";
  } //places x or o in the corresponding div element
  document.getElementById(letter).style.display = "inline"; //inline or block is ok, not sure if there is an "optimal" choice here
  usedCell3 = 1; //prevents this function from being run again until reset is hit
    checkIfWinner();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  if (aiTurn !="yes") {
    setTimeout(aiMove, 2000); //ai will make a move in 3 seconds (new)
  } else {
    aiTurn = "no"; //i think i need this here but not sure
  }//end if aiTurn != yes
  } //end if disabled == nope
  } //end if usedCell3
}

function placeLetter4() {
  if (usedCell4 == 0) {
  if (disabled == "nope") {
    disabled = "yep";
  if (XorO == "text1") {
    letter = "text4x";
    letterCell4 = "X";
    document.getElementById("winner").innerHTML = "O's move!";
  } else if (XorO == "text2") {
    letter = "text4o";
    letterCell4 = "O";
    document.getElementById("winner").innerHTML = "X's move!";
  } //places x or o in the corresponding div element
  document.getElementById(letter).style.display = "inline"; //inline or block is ok, not sure if there is an "optimal" choice here
  usedCell4 = 1; //prevents this function from being run again until reset is hit
    checkIfWinner();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  if (aiTurn !="yes") {
    setTimeout(aiMove, 2000); //ai will make a move in 3 seconds (new)
  } else {
    aiTurn = "no"; //i think i need this here but not sure
  } //end if aiTurn != yes
  } //end if disabled == nope
  } //end if usedCell4
}

function placeLetter5() {
  if (usedCell5 == 0) {
  if (disabled == "nope") {
    disabled = "yep";
  if (XorO == "text1") {
    letter = "text5x";
    letterCell5 = "X";
    document.getElementById("winner").innerHTML = "O's move!";
  } else if (XorO == "text2") {
    letter = "text5o";
    letterCell5 = "O";
    document.getElementById("winner").innerHTML = "X's move!";
  } //places x or o in the corresponding div element
  document.getElementById(letter).style.display = "inline"; //inline or block is ok, not sure if there is an "optimal" choice here
  usedCell5 = 1; //prevents this function from being run again until reset is hit
    checkIfWinner();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  if (aiTurn !="yes") {
    setTimeout(aiMove, 2000); //ai will make a move in 3 seconds (new)
  } else {
    aiTurn = "no"; //i think i need this here but not sure
  }//end if aiTurn != yes
  } //end if disabled == nope
  } //end if usedCell5
}

function placeLetter6() {
  if (usedCell6 == 0) {
  if (disabled == "nope") {
    disabled = "yep";
  if (XorO == "text1") {
    letter = "text6x";
    letterCell6 = "X";
    document.getElementById("winner").innerHTML = "O's move!";
  } else if (XorO == "text2") {
    letter = "text6o";
    letterCell6 = "O";
    document.getElementById("winner").innerHTML = "X's move!";
  } //places x or o in the corresponding div element
  document.getElementById(letter).style.display = "inline"; //inline or block is ok, not sure if there is an "optimal" choice here
  usedCell6 = 1; //prevents this function from being run again until reset is hit
    checkIfWinner();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  if (aiTurn !="yes") {
    setTimeout(aiMove, 2000); //ai will make a move in 3 seconds (new)
  } else {
    aiTurn = "no"; //i think i need this here but not sure
  }//end if aiTurn != yes
  } //end if disabled == nope
  } //end if usedCell6
}

function placeLetter7() {
  if (usedCell7 == 0) {
  if (disabled == "nope") {
    disabled = "yep";
  if (XorO == "text1") {
    letter = "text7x";
    letterCell7 = "X";
    document.getElementById("winner").innerHTML = "O's move!";
  } else if (XorO == "text2") {
    letter = "text7o";
    letterCell7 = "O";
    document.getElementById("winner").innerHTML = "X's move!";
  } //places x or o in the corresponding div element
  document.getElementById(letter).style.display = "inline"; //inline or block is ok, not sure if there is an "optimal" choice here
  usedCell7 = 1; //prevents this function from being run again until reset is hit
    checkIfWinner();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  if (aiTurn !="yes") {
    setTimeout(aiMove, 2000); //ai will make a move in 3 seconds (new)
  } else {
    aiTurn = "no"; //i think i need this here but not sure
  }//end if aiTurn != yes
  } //end if disabled == nope
  } //end if usedCell7
}

function placeLetter8() {
  if (usedCell8 == 0) {
  if (disabled == "nope") {
    disabled = "yep";
  if (XorO == "text1") {
    letter = "text8x";
    letterCell8 = "X";
    document.getElementById("winner").innerHTML = "O's move!";
  } else if (XorO == "text2") {
    letter = "text8o";
    letterCell8 = "O";
    document.getElementById("winner").innerHTML = "X's move!";
  } //places x or o in the corresponding div element
  document.getElementById(letter).style.display = "inline"; //inline or block is ok, not sure if there is an "optimal" choice here
  usedCell8 = 1; //prevents this function from being run again until reset is hit
    checkIfWinner();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  if (aiTurn !="yes") {
    setTimeout(aiMove, 2000); //ai will make a move in 3 seconds (new)
  } else {
    aiTurn = "no"; //i think i need this here but not sure
  }//end if aiTurn != yes
  } //end if disabled == nope
  } //end if usedCell8
}

function placeLetter9() {
  if (usedCell9 == 0) {
  if (disabled == "nope") {
    disabled = "yep";
  if (XorO == "text1") {
    letter = "text9x";
    letterCell9 = "X";
    document.getElementById("winner").innerHTML = "O's move!";
  } else if (XorO == "text2") {
    letter = "text9o";
    letterCell9 = "O";
    document.getElementById("winner").innerHTML = "X's move!";
  } //places x or o in the corresponding div element
  document.getElementById(letter).style.display = "inline"; //inline or block is ok, not sure if there is an "optimal" choice here
  usedCell9 = 1; //prevents this function from being run again until reset is hit
    checkIfWinner();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  if (aiTurn !="yes") {
    setTimeout(aiMove, 2000); //ai will make a move in 3 seconds (new)
  } else {
    aiTurn = "no"; //i think i need this here but not sure
  }//end if aiTurn != yes
  } //end if disabled == nope
  } //end if usedCell9
}

function aiMove() {
  aiTurn = "yes";
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //technically not the most efficient since it redefines the array each time AND goes through all 9 if statements each time, but it works.
  if (usedCell9 == 1) {
    index =arr.indexOf(9);
    arr.splice(index, 1);
  }
  if (usedCell8 == 1) {
    index =arr.indexOf(8);
    arr.splice(index, 1);
  }
  if (usedCell7 == 1) {
    index =arr.indexOf(7);
    arr.splice(index, 1);
  }
  if (usedCell6 == 1) {
    index =arr.indexOf(6);
    arr.splice(index, 1);
  }
  if (usedCell5 == 1) {
    index =arr.indexOf(5);
    arr.splice(index, 1);
  }
  if (usedCell4 == 1) {
    index =arr.indexOf(4);
    arr.splice(index, 1);
  }
  if (usedCell3 == 1) {
    index =arr.indexOf(3);
    arr.splice(index, 1);
  }
  if (usedCell2 == 1) {
    index =arr.indexOf(2);
    arr.splice(index, 1);
  }
  if (usedCell1 == 1) {
    index =arr.indexOf(1);
    arr.splice(index, 1);
  }

  newIndex = Math.floor(Math.random()*(arr.length))
  valueAtIndex = arr[newIndex]
  if (XorO == "text1") {
    XorO = "text2";
  } else if (XorO == "text2") {
    XorO = "text1";
  }
  if (valueAtIndex == 1) {
    disabled = "nope";
    placeLetter1();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  } else if (valueAtIndex == 2) {
    disabled = "nope";
    placeLetter2();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  } else if (valueAtIndex == 3) {
    disabled = "nope";
    placeLetter3();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  } else if (valueAtIndex == 4) {
    disabled = "nope";
    placeLetter4();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  } else if (valueAtIndex == 5) {
    disabled = "nope";
    placeLetter5();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  } else if (valueAtIndex == 6) {
    disabled = "nope";
    placeLetter6();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  } else if (valueAtIndex == 7) {
    disabled = "nope";
    placeLetter7();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  } else if (valueAtIndex == 8) {
    disabled = "nope";
    placeLetter8();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  } else if (valueAtIndex == 9) {
    disabled = "nope";
    placeLetter9();
    if (winner == "yes") { //kinda redundant but w/e :D
    usedCell1 = 1;
    usedCell2 = 1;
    usedCell3 = 1;
    usedCell4 = 1;
    usedCell5 = 1;
    usedCell6 = 1;
    usedCell7 = 1;
    usedCell8 = 1;
    usedCell9 = 1;
    return;
    }
  }
  if (XorO == "text1") {
    XorO = "text2";
  } else if (XorO == "text2") {
    XorO = "text1";
  }
  disabled = "nope";
}

function checkIfWinner() { //make all possible combinations
  if (letterCell1 == "X" && letterCell2 == "X" && letterCell3 == "X") { //top row X
    document.getElementById("winner").innerHTML = "X wins!";
    winner = "yes";
  } else if (letterCell4 == "X" && letterCell5 == "X" && letterCell6 == "X") { //middle row X
    document.getElementById("winner").innerHTML = "X wins!";
    winner = "yes";
  } else if (letterCell7 == "X" && letterCell8 == "X" && letterCell9 == "X") { //bottom row X
    document.getElementById("winner").innerHTML = "X wins!";
    winner = "yes";
  } else if (letterCell1 == "X" && letterCell4 == "X" && letterCell7 == "X") { //left column X
    document.getElementById("winner").innerHTML = "X wins!";
    winner = "yes";
  } else if (letterCell2 == "X" && letterCell5 == "X" && letterCell8 == "X") { //middle column X
    document.getElementById("winner").innerHTML = "X wins!";
    winner = "yes";
  } else if (letterCell3 == "X" && letterCell6 == "X" && letterCell9 == "X") { //right column X
    document.getElementById("winner").innerHTML = "X wins!";
    winner = "yes";
  } else if (letterCell1 == "X" && letterCell5 == "X" && letterCell9 == "X") { //top left - bottom right diagonal X
    document.getElementById("winner").innerHTML = "X wins!";
    winner = "yes";
  } else if (letterCell3 == "X" && letterCell5 == "X" && letterCell7 == "X") { //top right - bottom left diagonal X
    document.getElementById("winner").innerHTML = "X wins!";
    winner = "yes";
  } else if (letterCell1 == "O" && letterCell2 == "O" && letterCell3 == "O") { //top row O
    document.getElementById("winner").innerHTML = "O wins!";
    winner = "yes";
  } else if (letterCell4 == "O" && letterCell5 == "O" && letterCell6 == "O") { //middle row O
    document.getElementById("winner").innerHTML = "O wins!";
    winner = "yes";
  } else if (letterCell7 == "O" && letterCell8 == "O" && letterCell9 == "O") { //bottom row O
    document.getElementById("winner").innerHTML = "O wins!";
    winner = "yes";
  } else if (letterCell1 == "O" && letterCell4 == "O" && letterCell7 == "O") { //left column O
    document.getElementById("winner").innerHTML = "O wins!";
    winner = "yes";
  } else if (letterCell2 == "O" && letterCell5 == "O" && letterCell8 == "O") { //middle column O
    document.getElementById("winner").innerHTML = "O wins!";
    winner = "yes";
  } else if (letterCell3 == "O" && letterCell6 == "O" && letterCell9 == "O") { //right column O
    document.getElementById("winner").innerHTML = "O wins!";
    winner = "yes";
  } else if (letterCell1 == "O" && letterCell5 == "O" && letterCell9 == "O") { //top left - bottom right diagonal O
    document.getElementById("winner").innerHTML = "O wins!";
    winner = "yes";
  } else if (letterCell3 == "O" && letterCell5 == "O" && letterCell7 == "O") { //top right - bottom left diagonal O
    document.getElementById("winner").innerHTML = "O wins!";
    winner = "yes";
  }

  if (winner == "yes") { //kinda redundant but w/e :D
    $("#playAgain").css("display", "initial");
  }
}

function playAgain() {
  $("#X-or-O-Select").css("display", "block");
  $("#X-And-O-Button-Container").css("display", "block");
  document.getElementById("table").style.display = "none";
  document.getElementById("winStatement").style.display = "none";
  $("#playAgain").css("display", "none");
  $("#text1x, #text1o, #text2x, #text2o, #text3x, #text3o, #text4x, #text4o, #text5x, #text5o, #text6x, #text6o, #text7x, #text7o, #text8x, #text8o, #text9x, #text9o").css("display", "none");
XorO = "";
letter = ""; //this is redundant with "letterCell1, 2, 3, etc. but once again, it works :D
usedCell1 = 0;
usedCell2 = 0;
usedCell3 = 0;
usedCell4 = 0;
usedCell5 = 0;
usedCell6 = 0;
usedCell7 = 0;
usedCell8 = 0;
usedCell9 = 0;
aiTurn = "";
letterCell1 = "";
letterCell2 = "";
letterCell3 = "";
letterCell4 = "";
letterCell5 = "";
letterCell6 = "";
letterCell7 = "";
letterCell8 = "";
letterCell9 = "";
arr=[]; //may be ok to define the following inside the function and not needed outside of it?
pickACell;
index;
whoGoesFirst;
winner = "no";
disabled = "nope";
}
