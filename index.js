var score = 0;

function startGame() {
	// let x;
	// if (document.getElementsByClassName("start").innerHTML == "Start")
	// 	x = true;
	// if (document.getElementsByClassName("start").innerHTML == "Stop")
	// 	x = false;
	// if(!x) {
	// 	document.getElementsByClassName("pause")[0].style.display = "inline";
	// 	document.getElementsByClassName("start")[0].innerHTML = "Stop";
	// }
	document.getElementsByClassName("pause")[0].style.display = "inline";
	document.getElementsByClassName("start")[0].innerHTML = "Stop";
}

function pauseGame() {
	if (document.getElementsByClassName("pause")[0].innerHTML == "Pause")
		document.getElementsByClassName("pause")[0].innerHTML = "Play";
	else
		document.getElementsByClassName("pause")[0].innerHTML = "Pause";
}

function endGame() {
	alert("Game ended. Your score is " + score);
	score = 0;
}