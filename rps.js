
const choices =['rock','paper','scissors']
let playerScore=0;
let computerScore=0;
let pscore=document.querySelector(".pscore")
let cscore=document.querySelector('.cscore')
pscore.innerHTML=0
cscore.innerHTML=0

function getComputerChoice () {
    return choices[Math.floor(Math.random()*3)].toLowerCase();
}

function playOneRound(playerSelection,computerSelection) {
        computerSelection=getComputerChoice()

        let div=document.querySelector('.div1')
        div.innerHTML=`Computer chose ${computerSelection} and Player chose ${playerSelection}.`

        let div2=document.querySelector('.div2')
        
        if ((computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")) {
            div2.innerHTML="Computer wins!"
            computerScore++;
            cscore.innerHTML=computerScore
        }
        else if (computerSelection==playerSelection) {
            div2.innerHTML="Tie game!"
        }
        else {
            div2.innerHTML="Player wins!"
            playerScore++;
            pscore.innerHTML=playerScore
        }

        if (playerScore===5) {
            div.innerHTML="Player wins the whole game!"
            div2.innerHTML='Great job!'
            playerScore=0
            computerScore=0
            pscore.innerHTML=playerScore
            cscore.innerHTML=computerScore
        }
        else if (computerScore===5) {
            div.innerHTML="Computer wins the whole game!"
            div2.innerHTML='Better luck next time.'
            playerScore=0
            computerScore=0
            pscore.innerHTML=playerScore
            cscore.innerHTML=computerScore
        }
};

const btns=document.querySelector('.btns')
btns.addEventListener('click',function(e){
    let playerSelection=(e.srcElement.className)
    playerSelection=playerSelection.toString()
    playOneRound(playerSelection)
    console.log(playerScore)
    console.log(computerScore)
})
