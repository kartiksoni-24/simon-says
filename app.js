let body = document.querySelector("body");
let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

let gameSeq = [];
let userSeq = [];

let colors = ['red', 'green', 'orange', 'blue'];
let highScore = 0;

let level = 0;
let started = false;

btn1.addEventListener("click", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randInx = Math.floor(Math.random() * 4);
    let randColor = colors[randInx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randInx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor)
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
          setTimeout(levelUp, 1000);
        }
    }
    else{
        h3.innerHTML = `Game over😯! Your score was <b>${level}</b> <br>Press Start to Restart`;
        body.style.backgroundColor = "red";
        setTimeout(function(){
            body.style.backgroundColor = "white";
        }, 200);
        
        highScr();
        reset();
        
        
    }

    
}

// function checkAns() {
//     for (let idx = 0; idx < userSeq.length; idx++) {
//         if (userSeq[idx] != gameSeq[idx]) {
//             h3.innerText = `Game over😯! Press any key to Restart`;
//             reset();
//             return;
//         }
//     }

//     // If the user sequence matches the game sequence, check for the sequence length
//     if (userSeq.length == gameSeq.length) {
//         setTimeout(levelUp, 1000);
//     }
// }


function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor)
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".box");
for(btn of allBtn){
    btn.addEventListener("click", btnPress);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}

function highScr(){
    if(highScore <= level){
        highScore = level;
        h2.innerHTML = `Highest score ${highScore}`;
    }
}