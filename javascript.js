// Create variable to store the user's score and initialize it at 0
let humanScore = 0;
// Create variable to store the computer's score and initialize it at 0
let computerScore = 0;

// Create function named getComputerChoice
function getComputerChoice() {
    // Create variable to hold a random integer from 0 to 2, which represent
    // rock, paper, and scissors respectively.
    let computerChoice = Math.floor(Math.random() * 3);
    // Return computer choice
    return computerChoice;
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

// Create function named playGame
function playGame() {
    // Create variable to store the user's score and initialize it at 0
    let humanScore = 0;
    // Create variable to store the computer's score and initialize it at 0
    let computerScore = 0;

    // Create function named playRound with parameters "humanChoice" & 
    // "computerChoice"
    function playRound(humanChoice, computerChoice) {
        // Get string equivalent of human choice
        humanChoiceString = (humanChoice === 0) ? "Rock" :
        (humanChoice === 1) ? "Paper" : "Scissors";
        // Get string equivalent of computer choice
        computerChoiceString = (computerChoice === 0) ? "Rock": 
        (computerChoice === 1) ? "Paper" : "Scissors";

        // Get difference of human and computer choice values and store in variable 
        // called result
        let result = humanChoice - computerChoice;
        // If the difference is -2 or 1, the player wins
        if (result === -2 || result === 1) {
            // Send message to console indiciating player success
            // Increment player score value
            console.log(`You win! ${humanChoiceString} beats ${computerChoiceString}`);
            humanScore++;
        } else if (result === 2 || result === -1) {
            // Send message to console indicating player loss
            // Increment computer score value
            console.log(`You lose! ${computerChoiceString} beats ${humanChoiceString}`);
            computerScore++;
        } else {
            console.log(`Tie! You both chose ${humanChoiceString}`)
        }
    }

    // Call getHumanChoice, getComputerChoice, and playRound 5 times
    for(let index = 0; index < 5; index++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    // If the human scored more, declare them the winner
    // If the computer scored more, declare them the winner.
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else {
        console.log("You lost the game, sorry!");
    }
}

// Start a game
playGame();