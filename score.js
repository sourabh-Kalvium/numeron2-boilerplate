// Iteration 8: Making scoreboard functional
let clickCount = sessionStorage.getItem("clickCount") || null
let playAgain = document.getElementById("play-again-button")
playAgain.addEventListener("click",()=>{
    window.location.href = "./game.html"
})

let score = document.getElementById("score-board")
score.innerHTML= clickCount
sessionStorage.removeItem("clickCount")
