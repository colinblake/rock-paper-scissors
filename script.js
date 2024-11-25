let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let humanChoice = null;
    do{
        humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase()
    } while (!['rock', 'paper', 'scissors'].includes(humanChoice));

    console.log("Human choice:", humanChoice);
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

    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    if (winner === 'human') {
            console.log(capitalizeFirstLetter(humanChoice), "beats", 
                computerChoice, "! You win!")
            humanScore++;
    } else if (winner === 'computer') {
            console.log(capitalizeFirstLetter(computerChoice), "beats", 
                humanChoice, "! You lose!")
            computerScore++
    } else {
            console.log("Tie!")
    }

    

    return winner;
}

for (round = 0; round < 5; round++){
    console.log("*** Round " + (round+1) + " ***");
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection)
    console.log("Score: human " + humanScore + ", computer " + computerScore)
}

if (humanScore > computerScore){
    console.log("*** Human wins! ***");
} else if (computerScore > humanScore){
    console.log("*** Computer wins! ***");
} else {
    console.log('*** We have a tie! ***' );
}