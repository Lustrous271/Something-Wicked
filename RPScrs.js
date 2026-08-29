function CalcRock() {
    resulttag = document.getElementById("result")
    random = Math.floor(Math.random() * 10000 % 3);
    if(random = 0) {
     resulttag.innertext = "It's a Tie!"
    }
}