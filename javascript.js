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

// Create function named playRound with parameters "humanChoice" & "computerChoice"
    // Get difference of human and computer choice values and store in variable 
    // called result
    // If the difference is -2 or 1, the player wins
    // Send message to console indiciating player success
    // Increment player score value
    // If the difference is 2 or -1, the computer wins
    // Send message to console indicating player loss
    // Increment computer score value

// Create variable to store the user's score and initialize it at 0
let humanScore = 0;
// Create variable to store the computer's score and initialize it at 0
let computerScore = 0;