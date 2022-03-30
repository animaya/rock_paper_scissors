console.log("hello");
const btns = document.querySelectorAll('#btn');
const playerScore = document.querySelector(".player")
const computerScore = document.querySelector(".computer")

function computerPlay() {
    const figures = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return figures[choice];

}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie ${playerSelection} is equal to ${computerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You won ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `You won ${playerSelection} bets ${computerSelection}`
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You won ${playerSelection} beats ${computerSelection}`
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return `You lose ${computerSelection} beats ${playerSelection}`
    } else  if (computerSelection === "paper" && playerSelection === "rock") {
        return `You lose ${computerSelection} beats ${playerSelection}`
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return `You lose ${computerSelection} beats ${playerSelection}`
    }
}

function checkWhoWon(playRound) {
    if (playRound.startsWith("Tie")) {
        return;
    } else if (playRound.startsWith("You won")) {
        return 1;
    } else if (playRound.startsWith("You lose")) {
        return 0;
    }
}

let player_Score = 0;
let computer_Score = 0; 
function checkBtnValue(event) {
    const btnValue = event.target.value;
    let computerSelection = computerPlay();
    let playerSelection = btnValue;

    if (player_Score > 4) {
        alert("Player Won")
        player_Score =0;
        computer_Score=0;
    } else if (computer_Score > 4) {
        alert("Computer Won")
        player_Score =0;
        computer_Score=0;

    }
    let roundResult = playRound(playerSelection, computerSelection);
    if (checkWhoWon(roundResult)) {
        player_Score += 1
    } else {
        computer_Score += 1
    }
    playerScore.textContent = player_Score;
    computerScore.textContent = computer_Score;
}

btns.forEach(btn => {
    btn.addEventListener('click', checkBtnValue)
})
    
;




