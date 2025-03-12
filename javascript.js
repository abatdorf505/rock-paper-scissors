// Create function named getComputerChoice
function getComputerChoice() {
    // Create variable to hold a random integer from 0 to 2
    let computerChoice = Math.floor(Math.random() * 3);
    // If the integer is 0, return rock
    // If the integer is 1, return paper
    // If the integer is 2, return scissors
    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Create function named getHumanChoice
function getHumanChoice() {
    // Ask user to input "rock", "paper", or "scissors"
    // and place input in humanChoice variable
    let humanChoice = prompt("Rock, paper, or scissors?", "")
    // Return human choice
    return humanChoice.toLowerCase()
}

// Call getComputerChoice function
console.log(getComputerChoice())
// Call getHumanChoice function
console.log(getHumanChoice())