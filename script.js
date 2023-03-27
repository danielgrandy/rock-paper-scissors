console.log("Hello World!!!!")

function getComputerChoice() {
    let handArray = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * 3);

    computerHand = handArray[index];
   
    console.log(computerHand);
    
}

getComputerChoice();

// DONE!

function getPlayerChoice() {
    let playerChoice = prompt("Welcome to the Rock, Paper, Scissors simulation! Which hand would you like to play?").toLowerCase();


    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        alert("You've chosen " + playerChoice + "! An intriguing choice..... one could never have expected such boldness.");
    }

    else {
        alert("Girl, stop fooling around!")
    };
    
}

getPlayerChoice();
  

