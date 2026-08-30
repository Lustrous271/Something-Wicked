let yourscore = 0
let myscore = 0
let yourscoreid = document.getElementById("yourscoreid")
let result_tag = document.getElementById("results")
let ichoose = document.getElementById("ichoose")
let myscoretag = document.getElementById("myscoreid")

function CalcRock() {
    random = Math.floor(Math.random() *3);
    if(random == 0) {
     result_tag.innerText = "It's a Tie!"
     ichoose.innerText = "Rock."
    } else if(random == 1) {
     result_tag.innerText = "You Lose!"
     ichoose.innerText = "Paper." 
     myscore += 1
     myscoretag.innerText = "My score is " + myscore  
    } else if(random == 2) {
     result_tag.innerText = "You Win!"
     ichoose.innerText = "Scissors."
     yourscore += 1
     yourscoreid.innerText = "Your score is " + yourscore
    }
}
function CalcPaper() {
    random = Math.floor(Math.random() * 3);
    if(random == 0) {
     result_tag.innerText = "You Win!"
     ichoose.innerText = "Rock."
     yourscore += 1
     yourscoreid.innerText = "Your score is " + yourscore
    }
    else if(random == 1) {
     result_tag.innerText = "It's a Tie!" 
     ichoose.innerText = "Paper."  
    }
    else if(random == 2) {
     result_tag.innerText = "You Lose!"
     ichoose.innerText = "Scissors."
     myscore += 1
     myscoretag.innerText = "My score is " + myscore
    }
}
function CalcScissor() {
    random = Math.floor(Math.random() * 3);
    if(random == 0) {
     result_tag.innerText = "You Lose!"
     ichoose.innerText = " Rock."
     myscore += 1
     myscoretag.innerText = "My score is " + myscore
    }
    else if(random == 1) {
     result_tag.innerText = "You Win!"   
     ichoose.innerText = "Paper."
     yourscore += 1
     yourscoreid.innerText = "Your score is " + yourscore
    }
    else if(random == 2) {
     result_tag.innerText = "It's a Tie"
     ichoose.innerText = "Scissors."
    }
}