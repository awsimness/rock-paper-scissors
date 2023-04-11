
const choices =['Rock','Paper','Scissors']

function getComputerChoice () {
    return choices[Math.floor(Math.random()*3)].toLowerCase();
}

function getPlayerChoice() {
    let playerchoice=prompt("Hi there. You have three options to choose from.\nRock\nPaper\nScissors")
    return playerchoice.toLowerCase()
}

function playOneRound(playerSelection,computerSelection) {
        computerSelection=getComputerChoice()
        playerSelection=getPlayerChoice()

        console.log(`Computer chose ${computerSelection} and Player chose ${playerSelection}.`)

        if ((computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")) {
            console.log("Computer wins!")
        }
        else if (computerSelection==playerSelection) {
            console.log("Tie game!")
        }
        else {
            console.log("Player wins!")
        }
};