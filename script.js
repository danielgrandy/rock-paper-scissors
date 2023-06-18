function getComputerChoice() {
    let handArray = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);

    computerHand = handArray[index];
   
    setTimeout(function(){
        divText.textContent = "Computer's choice is " + computerHand + ".";
    }, 4000);
    
    return computerHand;
}

let playerPoints = 0;
let computerPoints = 0;

function playerUp() {
   setTimeout(function(){ 
    parseInt(document.getElementById('scoreText').innerHTML = ++playerPoints);
   }, 4000);
};

function computerUp() {
   setTimeout(function(){
    parseInt(document.getElementById('scoreText2').innerHTML = ++computerPoints);
   }, 4000);
};

function winState () {
    if (playerPoints === 5) {
    setTimeout(function(){
        divText.textContent = "You've won!";
    }, 8000);
}
    else if (computerPoints === 5) {
        setTimeout(function(){
            divText.textContent = "You've failed!";
        }, 8000);
    }
    
};


function playRound(playerSelection, computerSelection) {
        computerSelection = getComputerChoice();

        setTimeout(function(){
            divText.textContent = "You've chosen " + playerSelection.toUpperCase() + "! An intriguing choice..... one could never have expected such boldness.";
        }, 1000);
        
        if (playerSelection === "paper" && computerSelection === "rock") {
            setTimeout(function(){
                divText.textContent = "You win! Paper beats rock.";
            }, 6000);
            
            playerUp();
            
        }
    
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            setTimeout(function(){
                divText.textContent = "You win! Scissors beat paper.";
            }, 6000);
        
            playerUp();
        }
        
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            setTimeout(function(){
                divText.textContent = "You win! Rock beats scissors.";
            }, 6000);
            
            playerUp();
        }
    
        else if (playerSelection === "rock" && computerSelection === "paper") {
            setTimeout(function(){
                divText.textContent = "You lose! Paper beats rock.";
            }, 6000);
            
            computerUp();
        }
    
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            setTimeout(function(){
                divText.textContent = "You lose! Scissors beat paper.";
            }, 6000);
            
            computerUp();
        }
        
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            setTimeout(function(){
                divText.textContent = "You lose! Rock beats scissors.";
            }, 6000);
            
            computerUp();
        }

        else {
            setTimeout(function(){
                divText.textContent = "It's a tie....";
            }, 6000);
            
            
        }
    
 return playerPoints, computerPoints; 

 winState();
}

const divText = document.createElement('div');
divText.setAttribute('id', 'divText');

const coreText = document.createElement('div');
coreText.setAttribute('id', 'coreText');


coreText.textContent = "PlayerPoints: "; 


const scoreText = document.createElement('div');
scoreText.setAttribute('id', 'scoreText');

const coreText2 = document.createElement('div');
coreText2.setAttribute('id', 'coreText2');

coreText2.textContent = "ComputerPoints: "; 

const scoreText2 = document.createElement('div');
scoreText2.setAttribute('id', 'scoreText2');

scoreText.textContent = playerPoints; 
scoreText2.textContent = computerPoints; 


const buddinz = document.querySelector('#buddinz');

buddinz.appendChild(divText);
linebreak = document.createElement("br");
buddinz.appendChild(linebreak);
buddinz.appendChild(coreText);
buddinz.appendChild(linebreak);
buddinz.appendChild(scoreText);
buddinz.appendChild(linebreak);
buddinz.appendChild(coreText2);
buddinz.appendChild(linebreak);
buddinz.appendChild(scoreText2);



const btnRock = document.querySelector('#btnR');
btnRock.addEventListener('click', () => {
  divText.textContent = "Rock!";
  playRound('rock');
});

const btnPaper = document.querySelector('#btnP');
btnPaper.addEventListener('click', () => {
  divText.textContent = "Paper!";
  playRound('paper');
});

const btnScissors = document.querySelector('#btnS');
btnScissors.addEventListener('click', () => {
  divText.textContent = "Scissors!";
  playRound('scissors');
});




/* function game() {

    console.log("Best out of 5!")

    playRound();

    playRound();
    
    playRound();
    
    playRound();
    
    playRound();

    console.log("Player Points = " + playerPoints + " and Computer Points = " + computerPoints + ".")

}


game(); */