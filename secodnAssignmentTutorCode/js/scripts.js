 function newForm() {
     // initialize the form. 
     today = new Date();
     // call a function to format the date as mm/dd/yyyy
     isodate = toISODate(today);
     document.getElementById("asof").innerHTML = "As of " + isodate;
     document.getElementById("0").focus();
 }

 function toISODate(date) {
     // edited version of a template provided by instructor
     "use strict";
     var mm, dd, yyyy;
     mm = date.getMonth() + 1; // Months go from 0 .. 11
     dd = date.getDate();
     yyyy = date.getFullYear();
     // Need leading zeroes to form the mm-dd-yyyy pattern. 
     if (mm < 10) {
         mm = "0" + mm; // This converts mm to a string 
     }
     if (dd < 10) {
         dd = "0" + dd; // This converts dd to a string
     }
     return mm + "/" + dd + "/" + yyyy;
     // e.g., 07/04/2017
 }


 function dispatch() {

     // call function to get the votes
     var votes = getVotes();

     // call function to sum the votes, 
     // “push” the total votes into the last array element
     votes.push(sumOfVotes(votes));

     // call function to calculate the percentages
     var percentvotes = getPercents(votes);

     // call function to get candidate names
     var candidates = getCandidates();

     // combine votes, sum, and percentages into one array
     var dataset = votes.concat(percentvotes, candidates);

     // call function to show results
     displayResults(dataset);
 }

 function displayResults(dataset) {
     document.getElementById("ttlv").value = dataset[3];
     document.getElementById("p0").value = dataset[4] + "%";
     document.getElementById("p1").value = dataset[5] + "%";
     document.getElementById("p2").value = dataset[6] + "%";
     document.getElementById("theResults").innerHTML = "&nbsp; Try again?";
 }

 function sumOfVotes(votes) {
     maxcount = 3;
     var totalvotes = 0;
     for (i = 0; i < maxcount; i++) {
         totalvotes = totalvotes + votes[i];
     }
     return (totalvotes);
     // e.g., 600
 }

 function getVotes() {
     // retrieve values from text field, use parseInt to convert strings to numbers
     var votes = [parseInt(document.getElementById(0).value),
                parseInt(document.getElementById(1).value),
                parseInt(document.getElementById(2).value)
            ];
     // call function to check for data entry errors
     validateInput(votes[0]);
     validateInput(votes[1]);
     validateInput(votes[2]);
     return (votes);
     // e.g., [100,200,300]
 }

 function getCandidates() {
     // retrieve values from text field
     var candidates = [];
     candidates[0] = document.getElementById("f0").value;
     candidates[1] = document.getElementById("f1").value;
     candidates[2] = document.getElementById("f2").value;
     return (candidates);
     // e.g., [Smith,Brown,Jefferson]
 }

 function getPercents(data) {
     var percentValues = [];
     var totalvotespct = data[data.length - 1];
     for (i = 0; i < data.length - 1; i++) {
         // get percent using built-in function to format with one decimal place
         var percvote = (100 * (data[i] / data[data.length - 1])).toFixed(1);
         percentValues.push(percvote);
     }
     return (percentValues);
     // e.g., [16.7,33.3,50.0]
 }

 function validateInput(fieldvalue) {
     var message, x;
     message = document.getElementById("ErrorMessage");
     x = fieldvalue;
     message.innerHTML = "";
     try {
         if (x == "") throw " ** Votes may not be empty";
         if (isNaN(x)) throw " ** All votes must be a number";
         x = Number(x);
         if (x < 0) throw " ** Votes cannot be negative";
     } catch (err) {
         message.innerHTML += err;
         console.log('Error');
     }

 }