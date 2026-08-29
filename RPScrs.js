yourscore = 0
function CalcRock() {
    let result_tag = document.getElementById("results")
    let ichoose = document.getElementById("ichoose")
    random = Math.floor(Math.random() *3);
    if(random == 0) {
     result_tag.innerText = "It's a Tie!"
     ichoose.innerText = "I choose Rock."
    } else if(random == 1) {
     result_tag.innerText = "You Lose!"
     ichoose.innerText = "I choose Paper."   
    } else if(random == 2) {
     result_tag.innerText = "You Win!"
     ichoose.innerText = "I choose Scissors."
    }
}
function CalcPaper() {
    let result_tag = document.getElementById("results")
    let ichoose = document.getElementById("ichoose")
    random = Math.floor(Math.random() * 3);
    if(random == 0) {
     result_tag.innerText = "You Win!"
     ichoose.innerText = "I choose Rock."
    }
    else if(random == 1) {
     result_tag.innerText = "It's a Tie!" 
     ichoose.innerText = "I choose Paper."  
    }
    else if(random == 2) {
     result_tag.innerText = "You Lose!"
     ichoose.innerText = "I choose Scissors."
    }
}
function CalcScissor() {
    let result_tag = document.getElementById("results")
    let ichoose = document.getElementById("ichoose")
    random = Math.floor(Math.random() * 3);
    if(random == 0) {
     result_tag.innerText = "You Lose!"
     ichoose.innerText = "I choose Rock."
    }
    else if(random == 1) {
     result_tag.innerText = "You Win!"   
     ichoose.innerText = "I choose Paper."
    }
    else if(random == 2) {
     result_tag.innerText = "It's a Tie"
     ichoose.innerText = "I choose Scissors."
    }
}