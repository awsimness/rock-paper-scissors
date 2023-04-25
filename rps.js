
const choices =['rock','paper','scissors']
let playerScore=0;
let computerScore=0;

function getComputerChoice () {
    return choices[Math.floor(Math.random()*3)].toLowerCase();
}

function playOneRound(playerSelection,computerSelection) {
        computerSelection=getComputerChoice()

        let div=document.querySelector('div')
        div.innerHTML=`Computer chose ${computerSelection} and Player chose ${playerSelection}.`

        let div2=document.querySelector('.div2')
        
        if ((computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")) {
            div2.innerHTML="Computer wins!"
            computerScore++;
        }
        else if (computerSelection==playerSelection) {
            div2.innerHTML="Tie game!"
        }
        else {
            div2.innerHTML="Player wins!"
            playerScore++;
        }
};

window.addEventListener('click',function(e){
    let playerSelection=(e.srcElement.className)
    playerSelection=playerSelection.toString()
    playOneRound(playerSelection)
})

