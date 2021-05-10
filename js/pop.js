// MyPopUp
// pop.js
// Use .js to make a pop up
// Author: Meg Mocek, Julia Bozzo, Phillip Guaracha, Luis Rivera
// Created: Mar. 24, 2021
// License: Public Domain

//Pop up window that welcomes the user and provides a discription
//Start timer when user opens page
//After x amount of time a warning pops up
//After x amount of time a pop up comes up that wont go away
//User gets an option to dismiss the pop up incase of an emergency
//Pop up stays for x amount of time, making user take a break
//Pop up goes away after x amount of time
//Timer resets

//Pop up 1
var myVar;
var x = new Boolean(false);
  // if (x){
      function alertFunc1() {
        alarm();
        // alert("You've been on for a while, would you like a break?");
        if (confirm("You've been on for a while, would you like a break?")) { 
          txt = "You pressed OK!"; 
          // x = false;
        } else { 
          txt = "You pressed Cancel!"; 
        var x = new Boolean(false);
        }
      }
      function myFunction1() {
        myVar = setTimeout(alertFunc1, 5000);
      }
    myFunction1();

//Pop up 2
var test;
function myFunction2() {
  test = setTimeout(alertFunc2, 10000);
}
function alertFunc2() {
  alarm();
  alert("Take a break");
}
myFunction2();

//Pop up 3
var test;
function myFunction3() {
  test = setTimeout(alertFunc3, 15000);
}
function alertFunc3() {
  alarm();
  alert("GET OFF, TAKE A BREAK!");
}
myFunction3();

//audio
function alarm() {
  var audio = new Audio('./audio/alert.mp3');
  audio.play();
}
