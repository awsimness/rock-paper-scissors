
const choices =['Rock','Paper','Scissors']

function getComputerChoice () {
    return choices[Math.floor(Math.random()*3)].toLowerCase();
}

function getPlayerChoice() {
    let playerchoice=prompt("Hi there. You have three options to choose from.\nRock\nPaper\nScissors")
    return playerchoice.toLowerCase()
}

function playOneRound() {
        computerchoice=getComputerChoice()
        playerSelection=getPlayerChoice()
}