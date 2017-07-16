window.onload = date(); //Initialize Date
var dateIDRetrieve = document.getElementById("date");
dateIDRetrieve.className = "dateClass";

//Candidate Function 
function getCandidates() {
     // retrieve values from text field
     var candidates = [];
     candidates[0] = document.getElementById("cand1").value;
     candidates[1] = document.getElementById("cand2").value;
     candidates[2] = document.getElementById("cand3").value;
     document.getElementById("finalCand1").innerHTML = "<strong>" + candidates[0];
     document.getElementById("finalCand2").innerHTML = "<strong>" + candidates[1];
     document.getElementById("finalCand3").innerHTML = "<strong>" + candidates[2];
     return (candidates);
     // e.g., [Smith,Brown,Jefferson]
 }


//Votes Function
function getVotes() {
    //retrieve values from text field, use parseInt to convert strings to numbers 
    var votes = [
          parseFloat(document.getElementById("votes1").value),
          parseFloat(document.getElementById("votes2").value),
          parseFloat(document.getElementById("votes3").value),
    ];
    return votes;
}


//Sum of Votes
function sumOfVotes() {
    var votes = getVotes();

    var sum = votes[0] + votes[1] + votes[2];

    if (sum == NaN) {
        document.getElementById("totalvotes").innerHTML = "error";
    }

    if (sum > 0) {
        document.getElementById("totalvotes").innerHTML = "<strong>" + sum;
    } else {
        document.getElementById("totalvotes").innerHTML = NaN;
    }


    return sum;
}



//Percent of Votes 
function percentage() {
    var votes = getVotes();
    var sum = votes[0] + votes[1] + votes[2];

    var percent1 = (votes[0] / sum) * 100;
    var percent2 = (votes[1] / sum) * 100;
    var percent3 = (votes[2] / sum) * 100;

    var percentMakeArray = [
        parseFloat(percent1.toFixed(2)),
        parseFloat(percent2.toFixed(2)),
        parseFloat(percent3.toFixed(2))
    ];
    
//    console.log(percentMakeArray);
    return percentMakeArray
    
}

function displayResults() {
    var resultOne = document.getElementById("cand1pct").innerHTML = "<strong>" + percentage()["0"] + "%";
    
    resultOne.className = "results";
    
    var resultTwo = 
    document.getElementById("cand2pct").innerHTML = "<strong>" + percentage()["1"] + "%";
    
    resultTwo.className = "results";
    
    var resultThree =
    document.getElementById("cand3pct").innerHTML = "<strong>" + percentage()["2"] + "%";
    
    resultThree.className = "results";
}


//Input Validation Function 
function validateInput() {
    var input1 = document.getElementById("cand1").value;
    var input2 = document.getElementById("cand2").value;
    var input3 = document.getElementById("cand3").value;

    var votes1 = document.getElementById("votes1").value;
    var votes2 = document.getElementById("votes2").value;
    var votes3 = document.getElementById("votes3").value;

    var votesArray = [
        votes1,
        votes2,
        votes3
    ];
    
    /* for (i = 0; i < 3; i++) {
        if (votesArray[i] == "") {
            alert('Found Null Vote!');
        }
        if (votesArray[i].match(/^-\d+$/)) {
            document.getElementById("cand1pct").innerHTML = NaN + "%";
            document.getElementById("votes1").focus();
            console.log("A Negative Number or 0 has been entered, Please fix this!");
        }
    } */ 
    
    var candidateInputError = document.getElementById("secondErrorMessage");

    if (input1, input2, input3 == "") {
        alert("One of the inputs is blank, please fill it in!");
        console.log("One of the inputs is blank, please fill it in!");
    
        candidateInputError.innerHTML = "*** You Must Fill In All Candidate Names!";
    }

    if (votes1 == 0 || votes2 == 0 || votes3 == 0) {
        alert('You cannot put the input as 0 or LESS!');
    }

    
    var error = document.getElementById("ErrorMessage");
    
    if (votes1.match(/^-\d+$/)) {
        document.getElementById("cand1pct").innerHTML = NaN + "%";
        error.innerHTML = "*** A Negative Number or 0 has been entered, Please fix this!";
        document.getElementById("votes1").focus();
        console.log("A Negative Number or 0 has been entered, Please fix this!");
    }
    if (votes2.match(/^-\d+$/)) {
        document.getElementById("cand2pct").innerHTML = NaN + "%";
        error.innerHTML = "*** A Negative Number or 0 has been entered, Please fix this!";
        console.log("A Negative Number or 0 has been entered, Please fix this!");
    }
    if (votes3.match(/^-\d+$/)) {
        document.getElementById("cand3pct").innerHTML = NaN + "%";
        error.innerHTML = "*** A Negative Number or 0 has been entered, Please fix this!";
        console.log("A Negative Number or 0 has been entered, Please fix this!");
    }

    
    candidateInputError.className = "error";
    error.className = "error";

}




/*.....................................................................................    
*/

function picture() {
    var pic = "https://en-volve.com/wp-content/uploads/2016/11/enVolve-Trump-two-thumbs-up.jpg";
    document.getElementById('presidentPic').src = pic.replace('90x90', '225x225');
    document.getElementById('presidentPic').className = "presidentActive";
    
    //Text
    document.getElementById("picTitle").innerHTML = "You've Successfully Filled Out The Form";

}

function dispatch() {
    
    //Get Candidates Function
    var candidates = getCandidates();
    var votesSum = sumOfVotes();
    var votesPercent = percentage();
    var validate = validateInput();
//    alert(validate);
    var results = displayResults();
    var pic = picture();
}


/* THIS IS THE DATE FUNCTION */
function date() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("date").innerHTML = (today);
}

//Reload Page
function myReload() {
    location.reload();
}

//Document Finished and Loaded
console.log("File Loaded Succesfully with No Errors!");