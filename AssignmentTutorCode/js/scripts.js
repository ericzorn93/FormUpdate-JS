// 1.

// id is tag id
function lookUpHTMLElement (id) {
   var element = document.getElementById(id).value;
   return element;
}

// This will grab all the candidates entered 
// by the user to display in the result section
function candidate() {
   var candidate1 = lookUpHTMLElement('cand1');
   var candidate2 = lookUpHTMLElement('cand2');
   var candidate3 = lookUpHTMLElement('cand3');
   document.getElementById('finalCand1').innerHTML = "Name: " + "<strong>" + candidate1;
   document.getElementById('finalCand2').innerHTML = "Name: " +"<strong>" + candidate2;
   document.getElementById('finalCand3').innerHTML = "Name: " + "<strong>" + candidate3;
}


function sum(numbers){
   var sum = 0;

    /*This one is using while loop
    var length = numbers.length; 
    while (length > 0) {
       sum = sum + numbers[length-1];
       length--;
    }*/

    for (var i=0; i < numbers.length; i++) {
      sum = sum + numbers[i];
   }
   return sum;
}

//Percent Array
function percentageArray(numbers) {

   // Get the sum
   var sum = sum(numbers);
   
   // Declaring the percentArray to store 
   var percentArray = [];

   for (var i=0; i < numbers.length; i++) {
      percentArray[i] = numbers[i]/sum;
   }

   // i = 0; 0 < 4 -> true ->percentage[0] = 4/10; i++ -> i = 1
   // i = 1; 1 < 4 -> true ->percentage[1] = 1/10; i++ -> i = 2
   // i = 2; 2 < 4 -> true ->percentage[2] = 2/10; i++ -> i = 3
   // i = 3; 3 < 4 -> true ->percentage[3] = 3/10; i++ -> i = 4
   // i = 4; 4 < 4 -> false -> terminates the loop
   return percentArray;
}

















//This is my own code

var d = new Date();
var year = d.getFullYear();
var month = d.getDate();
var day = d.getDay();
var minute = d.getMinutes();


function dateYear() {
    console.log(year);
    console.log(month);
    console.log(day);
}
//function call
dateYear();




function percentFixed(percentageArray) {
    percentageArray.toFixed(2);
}


function percentID() {
   var candidate1percent = lookUpHTMLElement('votes1');
   var candidate2percent = lookUpHTMLElement('votes2');
   var candidate3percent = lookUpHTMLElement('votes3');
   document.getElementById('cand1pct').innerHTML = candidate1percent;
   document.getElementById('cand2pct').innerHTML = candidate2percent;
   document.getElementById('cand3pct').innerHTML = candidate3percent;
}



//Print Final Response
function finalPercentage() {
    var percentFinalized = percentID + percentageArray;
    document.getElementById('cand1pct').innerHTML = percentFinalized.value;
    document.getElementById('cand2pct').innerHTML = percentFinalized.value;
    document.getElementById('cand3pct').innerHTML = percentFinalized.value;
}

//Here is the date
today = new Date();
isodate = toISODate(today);

function toISODate(date) { // yyyy-mm-dd
    "use strict";
    var yyyy, mm, dd;
    // JavaScript provides no simple way to format a date-only
    yyyy = "" + date.getFullYear();
    mm = date.getMonth() + 1; // Months go from 0 .. 11
    dd = date.getDate();
    // Need leading zeroes to form the yyyy-mm-dd pattern.
    if (mm < 10) {
        mm = "0" + mm; // This converts it to a string
    }
    if (dd < 10) {
        dd = "0" + dd; // This converts it to a string
    }
    return "" + yyyy + "-" + mm + "-" + dd;
}