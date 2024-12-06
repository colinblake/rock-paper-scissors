let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.random() * 3;
    if (random <= 1) {
        value = 'rock';
    } else if (random <= 2) {
        value = 'paper';
    } else {
        value = 'scissors';
    }

    return value;
}

// returns 'computer', 'human', or null indicating who won
function playRound(computerChoice, humanChoice){
    let winner = null;

    switch (computerChoice) {
        case 'rock':
            switch (humanChoice) {
                case 'rock':
                    winner = null;
                    break;
                case 'paper':
                    winner = 'human';
                    break;
                default:
                    winner = 'computer';
                    break;
            }
            break;
        case 'paper':
            switch (humanChoice) {
                case 'rock':
                    winner = 'computer';
                    break;
                case 'paper':
                    winner = null;
                    break;
                default:
                    winner = 'human';
                    break;
            }
            break;
        case 'scissors':
            switch (humanChoice) {
                case 'rock':
                    winner = 'human';
                    break;
                case 'paper':
                    winner = 'computer';
                    break;
                default:
                    winner = null;
                    break;
            }
            break;
    }

    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    result = document.querySelector("#result");
    if (winner === 'human') {
        humanScore++;
        resultText = `${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}! You win this round!`
    } else if (winner === 'computer') {
        computerScore++;
        resultText = `${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}! You lose this round!`
    } else {
        resultText = "Tie!";
    }
    result.textContent = resultText;

    score = document.querySelector("#score");
    if (humanScore == 5) {
        score.textContent = "Human Wins!!!"
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        score.textContent = "Computer Wins!!!"
        humanScore = 0;
        computerScore = 0;
    } else {
        score.textContent = `Human: ${humanScore}\tComputer: ${computerScore}`;
    }
    return winner;
}

function onClick(e){
    const humanSelection = e.target.id;
    const computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
}

buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        onClick(e);
    });
});
