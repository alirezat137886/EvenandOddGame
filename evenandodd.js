/* 
Author: Alireza Tahmasebi 
Class: EDCI 337
Game: Even and Odd
The code I have borrowed from other websites are mentioned in the credits page as well as the CSS files.
*/
// global variables
var num = 0; // number chosen by the player
var numPlayers = 0; // number of players
var width = 0; // width of the preloaded Instructions
var turn = 0; // tracks turns 0-9
var nameOfNumsArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; // correlates names of divs with values of indexes
var used = ['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false']; // tracks which numbers are used
var currentTotal = 0; // current calculated total
var numPlayers = 1; // number of players
var marker = 0; // tracks the total amount of clicks
// gets the first box
var modal = document.getElementById('myModal');
// gets the second box
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
// When the user clicks on the close button, hide the box
function play() {
        var audio = new Audio("cheer2.mp3");
        audio.play();
      }
function play2() {
        var audio2 = new Audio("boo2.mp3");
        audio2.play();
      }
function play3() {
        var audio3 = new Audio("start.mp3");
        audio3.play();
      }
function hide() {
    // gets the first box
    var modalone = document.getElementById("myModal");
    // hide the first box
    modalone.style.display = "none";
}
function hide2() {
        // gets the second box
        var modaltwo = document.getElementById("myModal3");
        // hide the second box
        modaltwo.style.display = "none";
}
function hide3() {
        // gets the second box
        var modalthree = document.getElementById("myModal4");
        // hide the second box
        modalthree.style.display = "none";
}
// show the first box
function showDiv() {
        document.getElementById('myModal').style.display = "block";
    }
// show the second box
function showDiv2() {
        document.getElementById('myModal2').style.display = "block";
    }
// change the visibility of element divID
function changeVisibility(divID) {
        var element = document.getElementById(divID);
        // if the element exists, this evaluates as true
        if (element) {
            element.className = (element.className == 'hidden') ? 'unhidden' : 'hidden';
        } // if
} // change visibility
function myFunction() {
  var x = document.getElementById("myModal4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// display lightbox with big image in it
function displayLightBox(imageNum) {
        var image = new Image(); // will be added to the document
        var bigImage = document.getElementById("bigImage");
        // decide which big image to access
        switch (imageNum) {
            case 1:
                image.src = "images/Capture.JPG";
                break;
        } // switch
        // preload big image in order to centere it in the page
        image.onload = function() {
                width = image.width;
                document.getElementById("boundaryBigImage").style.width = width + "px";
        } // function
        bigImage.src = image.src; // changes the src of bigImage
        // show lightbox with big image
        changeVisibility("lightbox");
        changeVisibility("boundaryBigImage");
} // display lightbox
//One-player game
function doTurn(input) {
        switch (turn) {
            // first turn of game
            case 0:
                // get numerical value of number selected
                num = parseInt(document.getElementById(input).innerHTML);
                // get the number clicked by the user
                var e = document.getElementById(input);
                e.onclick = function() {
                    return false;
                };
                // record number used
                used[num] = true;
                if (marker < 1) {
                    // change opacity, remove hover effect, remove onlick event
                    e.style.opacity = 0.3;
                    e.classList.remove('num');
                    e.classList.add('numUsed');
                    currentTotal = num;
                    // update total
                    document.getElementById("currenttotal").innerHTML = currentTotal.toFixed(1);
                } //if 
                // update the marker
                marker++;
                // set element to command
                var element = document.getElementById("command");
                // update the innerhtml
                element.classList.add("button");
                setTimeout(function() {
                    element.innerHTML = "Click here to run computer's turn";
                }, 0);        
                // When the user clicks run the function compTurn 
                element.onclick = function() {
                    compTurn();
                    var element = document.getElementById("command");
                    // update the innerhtml
                    setTimeout(function() {
                        element.classList.remove("button");
                        document.getElementById("command").innerHTML = "First Player, pick a number";
                    }, 1000); //setTimeout
                }; //element.onclick
                break;
                // odd turns for second player		
            case 1:
            case 3:
            case 5:
            case 7:
            case 9:
                marker = 0;
                // set element to command
                var element = document.getElementById("command");
                setTimeout(function() {
                    document.getElementById("command").innerHTML = "First Player, pick a number";
                }, 1000); // setTimeout
                //update turn
                turn++;
                break;
                // even turns for first player 
            case 2:
            case 4:
            case 6:
            case 8:
                maker = 0;
                // get numerical value of number selected
                num = parseInt(document.getElementById(input).innerHTML);
                var e = document.getElementById(input);
                // when the user clicks on a number run doMath 
                e.onclick = function() {
                    doMath(operation);
                }; // function
                // set element to command
                var element = document.getElementById("command");
                // update innerhtml
                element.innerHTML = "First Player, pick an operator";
                var e = document.getElementById(input);
                e.onclick = function() {
                    return false;
                };
                // record number used
                used[num] = true;
                // change opacity, remove hover effect, remove onlick event
                // and record number used
                if (marker < 1){
                    e.style.opacity = 0.3;
                    e.classList.remove('num');
                    e.classList.add('numUsed');
                    document.getElementById("currenttotal").innerHTML = currentTotal.toFixed(1);
                }
                marker++;
                break;
            default: // run appropriate code
        } // switch
} // doTurn
//Two-player game
function doTurntwo(input) {
        // evaluate the current turn
        switch (turn) {
            // first turn of game
            case 0:
                // get numerical value of number selected
                num = parseInt(document.getElementById(input).innerHTML);
                // change opacity, remove hover effect, remove onlick event
                // and record number used
                var e = document.getElementById(input);
                e.style.opacity = 0.3;
                e.classList.remove('num');
                e.classList.add('numUsed');
                e.onclick = function() {
                    return false;
                };
                used[num] = true;
                // update total and record number used
                currentTotal = num;
                document.getElementById("currenttotal").innerHTML = currentTotal.toFixed(1);
                // count turn
                turn++;
                // update the innerhtml of the command
                document.getElementById("command").innerHTML = "Second Player, pick a number";
                // get numerical value of number selected
                num = parseInt(document.getElementById(input).innerHTML);
                // change opacity, remove hover effect, remove onlick event
                // and record number used
                var e = document.getElementById(input);
                e.style.opacity = 0.3;
                e.classList.remove('num');
                e.classList.add('numUsed');
                e.onclick = function() {
                    return false;
                }; //function
                used[num] = true;
                break;
                // odd turns for second player		
            case 1:
            case 3:
            case 5:
            case 7:
            case 9:
                // get numerical value of number selected
                num = parseInt(document.getElementById(input).innerHTML);
                var e = document.getElementById(input);
                //  when user picks a number run runMath1
                e.onclick = function() {
                    doMath1(operation);
                }; //function
                var element = document.getElementById("command");
                element.innerHTML = "Second Player, pick an operator";
                // change opacity, remove hover effect, remove onlick event
                // and record number used
                var e = document.getElementById(input);
                e.style.opacity = 0.3;
                e.classList.remove('num');
                e.classList.add('numUsed');
                e.onclick = function() {
                    return false;
                }; //function
                used[num] = true;
                // count turn
                turn++;
                break;
                // even turns for first player 
            case 2:
            case 4:
            case 6:
            case 8:
                // get numerical value of number selected
                num = parseInt(document.getElementById(input).innerHTML);
                var e = document.getElementById(input);
                e.onclick = function() {
                    doMath1(operation);
                }; //function
                var element = document.getElementById("command");
                element.innerHTML = "First Player, pick an operator";
                // change opacity, remove hover effect, remove onlick event
                // and record number used
                var e = document.getElementById(input);
                e.style.opacity = 0.3;
                e.classList.remove('num');
                e.classList.add('numUsed');
                e.onclick = function() {
                    return false;
                }; //function
                used[num] = true;
                // count turn
                turn++;
                break;
            default:
        } // switch
} // doTurntwo
function winner() {
        if (Math.round(currentTotal) % 2 == 0) {
            //document.getElementById("command").innerHTML = "First Player wins!";
            document.getElementById("Message").innerHTML = "First Player wins! Current total is " + Math.round(currentTotal);
            play();
        } //if 
        else {
            //document.getElementById("command").innerHTML = "Computer wins!";
            
            document.getElementById("Message").innerHTML = "Computer wins! Current total is " + Math.round(currentTotal);
            play2();
        } //else
        stateChange(); 
    } //winner
    
function winners() {
        if (Math.round(currentTotal) % 2 == 0) {
            //;
            document.getElementById("command").innerHTML = "First Player wins!";
            document.getElementById("Message").innerHTML = "First Player wins! Current total is " + Math.round(currentTotal);
            play()
        } else {
            //play();
            document.getElementById("command").innerHTML = "Second Player wins!";
            document.getElementById("Message").innerHTML = "Second Player wins! Current total is " + Math.round(currentTotal);
            play()
        } //else  
        stateChange();
    } //winners
function stateChange() {
    setTimeout(function(){ 
        var model4 = document.getElementById('myModal3');
        document.getElementById('myModal3').style.display = "block"; 
    }, 1000);
}
function compTurn() {
        var operation = 0; // random operation
        var compNum = 0; // random number
        // get computer to pick a number not already used
        do {
            compNum = Math.floor(Math.random() * 10);
            if (used[compNum] == true) {
                continue;
            } //if
            used[compNum] = true;
            break;
        } while (true);
        // update total assuming if the operator is +, -, *, /
        if (compNum == 0) {
            operation = Math.floor(Math.random() * 2) + 1;
        } else {
            operation = Math.floor(Math.random() * 4) + 1;
        } //else
        if (operation == 1) {
            currentTotal += compNum;
        } //if
        if (operation == 2) {
            currentTotal -= compNum;
        } //if
        if (operation == 3) {
            currentTotal *= compNum;
        } //if
        if (operation == 4) {
            currentTotal /= compNum;
        } //if
        // grey out computer's number and remove hover effect
        var e = document.getElementById(nameOfNumsArray[compNum]);
        e.classList.add('greyOut');
        e.classList.remove('num');
        e.classList.add('numUsed');
        // remove onclick event from computer's number
        e.onclick = function() {
            return false;
        };
        // update command div
        var symbol = ['+', '-', '*', '/'];
        document.getElementById('command').classList.add('cool');
        document.getElementById('command').innerHTML = "The computer chose " + symbol[operation - 1] + compNum;
        // update total assuming the only operator is +, -, *, /
        document.getElementById('currenttotal').classList.add('updateTotal');
        document.getElementById("currenttotal").innerHTML = currentTotal.toFixed(1);
        if (turn == 8) {
            winner();
        } // if turn
        // count turn
        turn++;
        // call doTurn
        doTurn();
    } // compTurn
// Update the current total depending on the number and operation
function doMath(operation) {
        if (turn == 2 || turn == 4 || turn == 6 || turn == 8 || turn == 10) {
            // toggle between operations
            switch (operation) {
                case "add":
                    currentTotal = currentTotal + num;
                    break;
                case "subtract":
                    currentTotal = currentTotal - num;
                    break;
                case "multiply":
                    currentTotal = currentTotal * num;
                    break;
                case "divide":
                    currentTotal = currentTotal / num;
                    break;
            } //switch
            // update current total
            document.getElementById("currenttotal").innerHTML = currentTotal.toFixed(1);
            var element = document.getElementById("command");
            // update the innerhtml
            element.classList.add("button");
            document.getElementById("command").innerHTML = "Click here to run computer's turn";
            // when the user clicks on command run compTurn 
            element.onclick = function() {
                compTurn();
                var element = document.getElementById("command");
                document.getElementById('command').classList.add('cool');
                document.getElementById('currenttotal').classList.add('updateTotal');
                setTimeout(function() {
                    // update the innerhtml
                    element.classList.remove("button");
                    document.getElementById("command").innerHTML = "Current Player, pick a number";
                }, 1000);
            };
        }
    }
// calculate and update the current total depending on the number and operation
function doMath1(operation) {
    // toggle between operations
    switch (operation) {
        case "add":
            currentTotal = currentTotal + num;
            break;
        case "subtract":
            currentTotal = currentTotal - num;
            break;
        case "multiply":
            currentTotal = currentTotal * num;
            break;
        case "divide":
            currentTotal = currentTotal / num;
            break;
    }
    // update current total
    document.getElementById("currenttotal").innerHTML = currentTotal.toFixed(1);
    var element = document.getElementById("command");
    // ask the first player to pick a number
    if (turn == 2 || turn == 4 || turn == 6 || turn == 8 || turn == 10) {
        document.getElementById("command").innerHTML = "First Player, pick a number";
    } else {
        // ask the second player to pick a number
        document.getElementById("command").innerHTML = "Second Player, pick a number";
    }
    if (turn == 10) {
        winners();
    }
}
