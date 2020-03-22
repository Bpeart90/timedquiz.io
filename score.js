var restartBtn = document.querySelector("#clear-highscores"),
    //  clearBtn = document.querySelector("button.clearBtn"),
    // get the highScores list and turn it back into an object
    highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
    scoreList = document.getElementById("highScores");

// sort scores from high to low
highScores.sort(function (a, b) {
    return b.score - a.score
})

// display the scores
for (var s = 0; s < highScores.length; s++) {
    var newLi = document.createElement("li")
    newLi.textContent = highScores[s].name + " - " + highScores[s].score
    scoreList.appendChild(newLi)
}

var clearBtn = document.querySelector("#clear-highscores");
// click handlers for restart and clearing scoreboard
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    history.back()
});
restartBtn.addEventListener("click", function () {
    history.back();
});