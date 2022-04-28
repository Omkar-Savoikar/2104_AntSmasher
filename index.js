var score = 0;
var antCount = 0;
var id;
var setId = 0;
var score_val = document.getElementsByClassName("val")[0];
var rag = null;
let width = ((window.innerWidth - 1000) / 2) + 200;
const lefts = [width, width+84, width+168, width+252, width+338];

function divGenerator(className) {
    let setLeft = lefts[Math.floor(Math.random() * lefts.length)];
    setLeft += "px";
    let div = document.createElement("div");
    div.setAttribute("class", className);
    let temp = "div" + setId;
    div.setAttribute("id", temp);
    div.style.left = setLeft;
    return div;
}

function imgGenerator(srcs) {
    let img = document.createElement("img");
    let temp = srcs + ".png";
    img.src = temp;
    img.alt = srcs;
    temp = "img" + setId;
    img.setAttribute("id", temp);
    img.style.display = "inline";
    setId++;
    return img;
}

function antGenerator() {
    if (antCount == 5) 
        return;
    antCount++;
    let div = divGenerator("ants")
    let img = imgGenerator("ant");
    div.appendChild(img);
    document.getElementsByClassName("board")[0].appendChild(div);
}

function beeGenerator() {
    let div = divGenerator("bees")
    let img = imgGenerator("bee");
    div.appendChild(img);
    document.getElementsByClassName("board")[0].appendChild(div);
}

function beeShow() {
    let setLeft = lefts[Math.floor(Math.random() * lefts.length)];
    setLeft += "px";
    document.getElementsByClassName("bees")[0].style.left = setLeft;
    document.getElementsByClassName("bees")[0].children[0].style.display = "inline";
    setTimeout(beeHide, 4000);
}

function beeHide() {
    document.getElementsByClassName("bees")[0].children[0].style.display = "none";
    let hide = Math.floor(Math.random() * 5) + 1;
    setTimeout(beeShow, hide * 4000);
}

function randomGenerator() {
    let val = Math.floor(Math.random() * 10) + 2;
    if (antCount == 0)
        val = 0;
    setTimeout(antGenerator, val * 1000);
}

function startGame() {
    document.getElementsByClassName("start")[0].innerHTML = "Stop";
    score_val.innerHTML = score;
    beeGenerator();
    beeHide();
}

function updateScore() {
    let divId = document.getElementById(id).parentElement.id;
    let div = document.getElementById(divId);
    document.getElementById(divId).removeChild(div.firstChild);
    antCount--;
    score += 10;
    score_val.innerHTML = score;
    document.getElementById(divId).remove();
}

function ctnGame() {
    document.getElementsByClassName("pauseplay")[0].style.display = "none";
    setTimeout(location.reload(true));
}

function clearBoard() {
    let board = document.getElementsByClassName("board")[0];
    let childCount = board.childElementCount;
    for (let i = 0; i < childCount; i++)
        board.removeChild(board.children[0]);
}

function endGame() {
    clearInterval(rag);
    document.getElementsByClassName("start")[0].innerHTML = "Start";
    document.getElementsByClassName("text")[0].innerHTML = 'Game ended. Your score is ' + score;
    document.getElementsByClassName("ctn")[0].innerHTML = "OK";
    document.getElementsByClassName("pauseplay")[0].style.display = "block";
    document.getElementsByClassName("bees")[0].getElementsByTagName("img")[0].style.display = "none";
    score = 0;
    score_val.innerHTML = score;
    setTimeout(clearBoard, 1000);
}

function game() {
    if (document.getElementsByClassName("start")[0].innerHTML == "Start") {
        rag = setInterval(randomGenerator, 2000);
        startGame();
    } else {
        endGame();
    }
}

window.onclick = (e) => {
    if (e.target.tagName.toLowerCase() != "img") return;
    id = e.target.id;
    if (e.target.alt.toLowerCase() == "ant") updateScore();
    if (e.target.alt.toLowerCase() == "bee") endGame();
};

window.ondragstart = function () {
    return false;
};
