const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let humanSelection = "";
let computerSelection = "";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randArr = [rock, paper, scissors];
    let randNum = Math.floor(Math.random()*3);
    return randArr[randNum];
}

function getHumanChoice() {
    //let input = prompt("Rock, Paper, or Scissors?")
    //return input;
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

function playRound(humanChoice, computerChoice) {
    humanSelection = humanChoice;
    computerSelection = computerChoice;
    let winner = getWinner();
    if (winner === humanSelection) {
        results.textContent = `You win! ${humanSelection} beats ${computerSelection}.`;
        humanScore++;
    } else if (winner === computerSelection) {
        results.textContent = `You lose! ${computerSelection} beats ${humanSelection}.`;
        computerScore++;
    } else {
        results.textContent = "It's a tie!";
    }
    results.appendChild(br);
    results.textContent = `Current score:\r\nYou: ${humanScore} - Computer: ${computerScore}`;

    if (humanScore === 5) {
        results.textContent = 'You win!';
    }
    if (computerScore === 5) {
        results.textContent = 'You lose!'
    }
}

function playGame() {
    humanSelection = getHumanChoice().toLowerCase();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    /*for (let i = 0; i < 4; i++) {
        playRound(getHumanChoice().toLowerCase(), getComputerChoice());
    }*/

    if (humanScore > computerScore) {
        console.log(`Great job, you win!\nFinal Score: ${humanScore} - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost, better luck next time!\nFinal Score: ${computerScore} - ${humanScore}`);
    } else {
        console.log(`It's a tie!\nFinal Score: ${humanScore} - ${computerScore}`);
    }
}

/*const rbtn = document.querySelector('button');
const pbtn = document.querySelector('button');
const sbtn = document.querySelector('button');

rbtn.addEventListener('click', playRound(rock, computerSelection));
pbtn.addEventListener('click', playRound(paper, computerSelection));
sbtn.addEventListener('click', playRound(scissors, computerSelection));
*/

const btns = document.querySelector('.btns');
const results = document.querySelector('.results');
var br = document.createElement('br');

btns.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id) {
        case 'rbtn':
            playRound(rock, getComputerChoice());
            break;
        case 'pbtn':
            playRound(paper, getComputerChoice());
            break;
        case 'sbtn':
            playRound(scissors, getComputerChoice());
            break;
        default:
            console.log('Input not understood');
    }
});


//playGame();