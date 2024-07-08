const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let humanSelection = "";
let computerSelection = "";

function getComputerChoice() {
    let randArr = [rock, paper, scissors];
    let randNum = Math.floor(Math.random()*3);
    return randArr[randNum];
}

function getHumanChoice() {
    let input = prompt("Rock, Paper, or Scissors?")
    return input;
}

function getWinner() {
    let winner = "";
    if (humanSelection === computerSelection) {
        winner = null;
    }
    else if (humanSelection === rock && computerSelection === scissors || humanSelection === scissors && computerSelection === paper || humanSelection === paper && computerSelection === rock) {
        winner = humanSelection;
    } else {
        winner = computerSelection;
    }
    return winner;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    humanSelection = getHumanChoice().toLowerCase();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    function playRound(humanChoice, computerChoice) {
        humanSelection = humanChoice;
        computerSelection = computerChoice;
        let winner = getWinner();
        if (winner === humanSelection) {
            console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
            humanScore++;
        } else if (winner === computerSelection) {
            console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
            computerScore++;
        } else {
            console.log("It's a tie!");
        }
    }

    for (let i = 0; i < 4; i++) {
        playRound(getHumanChoice().toLowerCase(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log(`Great job, you win!\nFinal Score: ${humanScore} - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost, better luck next time!\nFinal Score: ${computerScore} - ${humanScore}`);
    } else {
        console.log(`It's a tie!\nFinal Score: ${humanScore} - ${computerScore}`);
    }
}
playGame();