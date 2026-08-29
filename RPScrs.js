function CalcRock() {
    let result_tag = document.getElementById("results")
    random = Math.floor(Math.random() *3);
    if(random == 0) {
     result_tag.innerText = "It's a Tie!"
    } else if(random == 1) {
     result_tag.innerText = "You Lose!"   
    } else if(random == 2) {
     result_tag.innerText = "You Win!"
    }
}
function CalcPaper() {
    let result_tag = document.getElementById("results")
    random = Math.floor(Math.random() * 3);
    if(random == 0) {
     result_tag.innerText = "You Win!"
    }
    else if(random == 1) {
     result_tag.innerText = "It's a Tie!"   
    }
    else if(random == 2) {
     result_tag.innerText = "You Lose!"
    }
}
function CalcScissor() {
    let result_tag = document.getElementById("results")
    random = Math.floor(Math.random() * 3);
    if(random == 0) {
     result_tag.innerText = "You Lose!"
    }
    else if(random == 1) {
     result_tag.innerText = "You Win!"   
    }
    else if(random == 2) {
     result_tag.innerText = "It's a Tie"
    }
}