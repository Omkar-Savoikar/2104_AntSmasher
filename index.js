var score = 0;
var score_val = document.getElementsByClassName("val")[0];
var ant = document.getElementsByClassName("ants")[0].getElementsByTagName("img")[0];
var bee = document.getElementsByClassName("bees")[0].getElementsByTagName("img")[0];
var anime = ['anim1', 'anim2', 'anim3', 'anim4', 'anim5']

function startGame() {
	document.getElementsByClassName("pause")[0].style.display = "inline";
	document.getElementsByClassName("start")[0].innerHTML = "Stop";
	ant.setAttribute('class', anime[0]);
	bee.setAttribute('class', anime[0]);
}

function updateScore() {
	score += 100;
	score_val.innerHTML = score;
}

function pauseGame() {
	ant.removeAttribute('class', 'run');
	ant.setAttribute('class', 'pause');
	document.getElementsByClassName("text")[0].innerHTML = "Game Paused. Press PLAY to continue playing.";
	document.getElementsByClassName("ctn")[0].innerHTML = "PLAY";
	document.getElementsByClassName("pauseplay")[0].style.display = "block";
}

function ctnGame() {
	ant.removeAttribute('class', 'pause');
	ant.setAttribute('class', 'run');
	document.getElementsByClassName("pauseplay")[0].style.display = "none";
}

function endGame() {
	ant.removeAttribute('class', anime[0]);
	bee.removeAttribute('class', anime[0]);
	document.getElementsByClassName("pause")[0].style.display = "none";
	document.getElementsByClassName("start")[0].innerHTML = "Start";
	document.getElementsByClassName("text")[0].innerHTML = `Game ended. Your score is ${score}`;
	document.getElementsByClassName("ctn")[0].innerHTML = "Restart";
	document.getElementsByClassName("pauseplay")[0].style.display = "block";
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