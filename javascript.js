// Create function named getComputerChoice
function getComputerChoice() {
    // Create variable to hold a random integer from 0 to 2, which represent
    // rock, paper, and scissors respectively.
    let computerChoice = Math.floor(Math.random() * 3);
    // Return computer choice
    return computerChoice
}

// Create function named getHumanChoice
function getHumanChoice() {
    // Ask user to input "rock", "paper", or "scissors", convert their response 
    // into lowercase, and store it in the humanChoice variable
    let humanChoice = prompt("Rock, paper, or scissors?", "").toLowerCase()
    // If the user chose rock, return 0
    // If the user chose paper, return 1
    // If the user chose scissors, return 2
    switch (humanChoice) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}

// Call getComputerChoice function
console.log(getComputerChoice())
// Call getHumanChoice function
console.log(getHumanChoice())