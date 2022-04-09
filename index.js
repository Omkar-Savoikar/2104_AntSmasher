var score = 0;
var score_val = document.getElementsByClassName("val")[0];
var ant = document.getElementsByClassName("ant")[0].getElementsByTagName("img")[0];
var bee = document.getElementsByClassName("bee")[0].getElementsByTagName("img")[0];

function startGame() {
	document.getElementsByClassName("pause")[0].style.display = "inline";
	document.getElementsByClassName("start")[0].innerHTML = "Stop";
}

function updateScore() {
	score += 100;
	score_val.innerHTML = score;
}

function pauseGame() {
	document.getElementsByClassName("pauseplay")[0].style.display = "block";
}

function ctnGame() {
	document.getElementsByClassName("pauseplay")[0].style.display = "none";
}

function endGame() {
	document.getElementsByClassName("pause")[0].style.display = "none";
	document.getElementsByClassName("start")[0].innerHTML = "Start";
	alert("Game ended. Your score is " + score);
	score = 0;
	score_val.innerHTML = score;
}

function game() {
	if (document.getElementsByClassName("start")[0].innerHTML == "Start")
		startGame();
	else
		endGame();
}

// ant.addEventListener("click", updateScore());
// class Ant {
//     constructor(x, y) {
//         this.x = Math.floor(Math.random() * 421) + ((width-600)/2);
//         this.y = 100;
//     }
//     width = screen.width;
// }