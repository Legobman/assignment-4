let wins = 0;
let loses = 0;
let draws = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// add the event for playing
rock.addEventListener("click", play);
paper.addEventListener("click", play);
scissors.addEventListener("click", play);

// add button to reset total results
const reset = document.querySelector("#reset");
reset.addEventListener("click", treset);

// function to play a game of rock, paper, scissors.
function play(event) {
    // select player's choice
    const choice = event.currentTarget.id;
    event.currentTarget.classList.add("player");

    // random computer choice
    const cpu = document.querySelector("#computer");
    cpu.classList.add("cpu");
    let ran = Math.floor(Math.random() * 3) + 1;

    // for computer: 1 is rock, 2 is paper, and 3 scissors
    if(ran === 1){
        cpu.src = "images/rock.PNG";
    } else if (ran === 2){
        cpu.src = "images/paper.PNG";
    } else{
        cpu.src = "images/scissors.PNG";
    }

    // get and display the results, tally the overall results
    const results = document.querySelector("#results");
    if((choice === "rock" && ran === 1) || (choice === "paper" && ran === 2) || (choice === "scissors" && ran === 3)){
        results.textContent = "Results: You Draw!";
        draws += 1;
    } else if((choice === "rock" && ran === 2) || (choice === "paper" && ran === 3) || (choice === "scissors" && ran === 1)){
        results.textContent = "Results: You Lose!";
        loses += 1;
    } else if((choice === "rock" && ran === 3) || (choice === "paper" && ran === 1) || (choice === "scissors" && ran === 2)){
        results.textContent = "Results: You Win!";
        wins += 1;
    } 

    // display the total results
    const twins = document.querySelector("#wins");
    const tloses = document.querySelector("#loses");
    const tdraws = document.querySelector("#draws");
    twins.textContent = "Wins: " + wins;
    tloses.textContent = "Loses: " + loses;
    tdraws.textContent = "Draws: " + draws;

    // remove the eventlistners until user hits play again button
    rock.removeEventListener("click", play);
    paper.removeEventListener("click", play);
    scissors.removeEventListener("click", play);
    const again = document.querySelector("#again");
    again.addEventListener("click", pagain);
}

// wipe the player and computer choices to allow user to play again
function pagain(event){
    const choice = document.querySelector(".player");
    const cpu = document.querySelector(".cpu");
    choice.classList.remove("player");
    cpu.classList.remove("cpu");
    cpu.src = "images/question-mark.PNG";
    rock.addEventListener("click", play);
    paper.addEventListener("click", play);
    scissors.addEventListener("click", play);
    event.removeEventListener("click", pagain);
}

// wipe the total results
function treset(){
    wins = 0;
    loses = 0;
    draws = 0;
    const twins = document.querySelector("#wins");
    const tloses = document.querySelector("#loses");
    const tdraws = document.querySelector("#draws");
    twins.textContent = "Wins: " + wins;
    tloses.textContent = "Loses: " + loses;
    tdraws.textContent = "Draws: " + draws;
}