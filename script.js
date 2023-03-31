console.log("Hello World!!!!")

function getComputerChoice() {
    let handArray = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);

    computerHand = handArray[index];
   
    console.log("Computer's choice is " + computerHand + ".");
    return computerHand;
    
}

// getComputerChoice();

// DONE!

function getPlayerChoice() {
    let playerChoice = prompt("Welcome to the Rock, Paper, Scissors simulation! Which hand would you like to play?").toLowerCase();


    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        alert("You've chosen " + playerChoice + "! An intriguing choice..... one could never have expected such boldness.");
    }

    else {
        alert("Girl, stop fooling around! Refresh the page and try again.")
    };
    
    console.log("Player's choice is " + playerChoice + ".");
    return playerChoice;
}

// getPlayerChoice();

// DONE! tho it would be nice if it could loop back on a wrong answer



let playerPoints = 0;
let computerPoints = 0;



function playRound(playerSelection, computerSelection) {
        
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();

        if (playerSelection === "paper" && computerSelection === "rock") {
            alert("You win! Paper beats rock.");
            playerPoints += 1;
        }
    
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            alert("You win! Scissors beat paper.");
            playerPoints += 1;
        }
        
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            alert("You win! Rock beats scissors.");
            playerPoints += 1;
        }
    
        else if (playerSelection === "rock" && computerSelection === "paper") {
            alert("You lose! Paper beats rock.");
            computerPoints += 1;
        }
    
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            alert("You lose! Scissors beat paper.");
            computerPoints += 1;
        }
        
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            alert("You lose! Rock beats scissors.");
            computerPoints += 1;
        }

        else {
            alert("It's a tie....");
            playerPoints += 1;
            computerPoints += 1;
        }
    
 return playerPoints, computerPoints;
    
}




function game() {

    alert("Best out of 5!")

    playRound();

    playRound();
    
    playRound();
    
    playRound();
    
    playRound();

    alert("Player Points = " + playerPoints + " and Computer Points = " + computerPoints + ".")

}


game();