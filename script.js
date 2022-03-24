console.log("Game Started");

function computerPlay() {
    const figures = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return figures[choice];

}

function playerPlay() {
    let playerInput = prompt("Your turn to select figure (rock-paper-scissors)").toLocaleLowerCase();
    return playerInput
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

function game(rounds) {
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;
    while (round < rounds) {
        let computerSelection = computerPlay();
        let playerSelection = playerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        // console.log("computer chose -",computerSelection);
        // console.log("player chose -", playerSelection);
        if (checkWhoWon(roundResult)) {
            playerScore += 1
        } else {
            computerScore += 1
        }
        console.log(roundResult);
        round += 1
    }
    console.log(`This game ended Player: ${playerScore} VS Computer: ${computerScore}`);
}


game(5);

