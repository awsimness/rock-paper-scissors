
const choices =['rock','paper','scissors']
let playerScore=0;
let computerScore=0;

function getComputerChoice () {
    return choices[Math.floor(Math.random()*3)].toLowerCase();
}

function playOneRound(playerSelection,computerSelection) {
        computerSelection=getComputerChoice()
        playerSelection=prompt("Choose your poison : \n1. Rock \n2. Paper \n3. Scissors")

        console.log(`Computer chose ${computerSelection} and Player chose ${playerSelection}.`)

        if ((computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")) {
            console.log("Computer wins!")
            computerScore++;
        }
        else if (computerSelection==playerSelection) {
            console.log("Tie game!")
        }
        else {
            console.log("Player wins!")
            playerScore++;
        }
};

function game() {
    for (i=0;i<5;i++) {
        playOneRound()
    }

    if (playerScore>computerScore) {
        console.log("After numerous battles, the winner of the war is Player!")
    }
    else {
        console.log("After numerous battles, the winner of the war is Computer!")
    }
}