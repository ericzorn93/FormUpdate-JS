//Candidates
function candidate()
{
    //First Candidate
    var candidate1, name1;
    
    candidate1 = document.getElementById("cand1").value;
    
    name1 = document.getElementById("cand1pct");
    
    name1.innerHTML = candidate1 + "%";
    
    
    //Second Candidate
    var candidate2, name2;
    
    candidate2 = document.getElementById("cand2").value;
    
    name2 = document.getElementById("cand2pct");
    
    name2.innerHTML = candidate2;
    
    
    //Third Candidate
    var candidate3, name3;
    
    candidate3 = document.getElementById("cand3").value;
    
    name3 = document.getElementById("cand3pct");
    
    var output3 = name3.innerHTML = candidate3;
}


//Percentages
function percentage()
{
    //First Percentage
    var vote1, percent1, finalVote1;
    
    vote1 = document.getElementById("votes1").value;
    
    percent1 = vote1 * 100 + " %";
    
    finalVote1 = document.getElementById("cand1pct").innerHTML = percent1;
    
    //Second Percentage
    var vote2, percent2, finalVote2;
    
    vote2 = document.getElementById("votes2").value;
    
    percent2 = vote2 * 100 + " %";
    
    finalVote2 = document.getElementById("cand2pct").innerHTML = percent2;
    
    //Third Percentage 
    var vote3, percent3, finalVote3;
    
    vote3 = document.getElementById("votes3").value;
    
    percent3 = vote3 * 100 + " %";
    
    finalVote3 = document.getElementById("cand3pct").innerHTML = percent3;
}

