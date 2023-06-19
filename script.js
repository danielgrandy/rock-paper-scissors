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



/* failed first win state attempt, I still have NO IDEA why this didn't work....

    function winState (playerPoints, computerPoints) {
    
   if (playerPoints === 5) {
    
        divText.innerHTML='You have won! Game over! <button onclick="endGame()">Click here to play again</button>';
        btnRock.setAttribute("disabled", 1);
        btnPaper.setAttribute("disabled", 1);
        btnScissors.setAttribute("disabled", 1);
        
    }

    else if (computerPoints === 5) {
       
        divText.innerHTML='You have failed. Game over! <button onclick="endGame()">Click here to play again</button>';
        btnRock.setAttribute("disabled", 1);
        btnPaper.setAttribute("disabled", 1);
        btnScissors.setAttribute("disabled", 1);
      
    }
}; */

let round = 0;


function playRound(playerSelection, computerSelection) {
    round++;
    
    computerSelection = getComputerChoice();

            divText.textContent = "You've chosen " + playerSelection.toUpperCase() + "! An intriguing choice..... one could never have expected such boldness.";
        
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

    function winOrLose () {    
    if (round === 5) {
        if (playerPoints > computerPoints) {
            setTimeout(function(){
            divText.innerHTML='You have won! Game over! <button onclick="location.reload()">Click here to play again</button>';
            btnRock.setAttribute("disabled", 1);
            btnPaper.setAttribute("disabled", 1);
            btnScissors.setAttribute("disabled", 1);
            }, 10000);
        }
    
        else if (computerPoints > playerPoints) {
            setTimeout(function(){
            divText.innerHTML='You have failed. Game over! <button onclick="location.reload()">Click here to play again</button>';
            btnRock.setAttribute("disabled", 1);
            btnPaper.setAttribute("disabled", 1);
            btnScissors.setAttribute("disabled", 1);
        }, 10000);
        }

        else {
            setTimeout(function(){
            divText.innerHTML='Tis a tie! Game over! <button onclick="location.reload()">Click here to play again</button>';
            btnRock.setAttribute("disabled", 1);
            btnPaper.setAttribute("disabled", 1);
            btnScissors.setAttribute("disabled", 1);
        }, 10000);
        }
}
    }

    winOrLose();

 return playerPoints, computerPoints; 

 
}

const divText = document.createElement('div');
divText.setAttribute('id', 'divText');


divText.textContent = "Welcome to the Rock, Paper, Scissors simulation! Let's play! Best out of five rounds.";

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
  playRound('rock');
 
});

const btnPaper = document.querySelector('#btnP');
btnPaper.addEventListener('click', () => {
  playRound('paper');
 
});

const btnScissors = document.querySelector('#btnS');
btnScissors.addEventListener('click', () => {
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