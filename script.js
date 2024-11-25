let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase()
    console.log("Human choice:", humanChoice)
    return humanChoice;
}

function getComputerChoice() {
    let random = Math.random() * 3;
    if (random <= 1) {
        value = 'rock';
    } else if (random <= 2) {
        value = 'paper';
    } else {
        value = 'scissors';
    }

    console.log("Computer choice:", value)
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

    console.log(winner)

    if (winner === 'human') {
            console.log(humanChoice, "beats", computerChoice, "! You win!")
            humanScore++;
    } else if (winner === 'computer') {
            console.log(computerChoice, "beats", humanChoice, "! You lose!")
            computerScore++
    } else {
            console.log("Tie!")
    }

    

    return winner;
}

for (round = 0; round < 5; round++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection)
    console.log("Score: human " + humanScore + ", computer " + computerScore)
}

console.log('Finished!')