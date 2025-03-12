function getComputerChoice() {
    // Pick a random integer from 0 to 2
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    };
};

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?", "");
};

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // Capitalize only first letter of human choice to match computer choice
        humanChoice = humanChoice.at(0).toUpperCase() + 
        humanChoice.toLowerCase().slice(1);
    
        let winner;
        if (
        humanChoice === "Rock" && computerChoice === "Scissors" || 
        humanChoice === "Paper" && computerChoice === "Rock" || 
        humanChoice === "Scissors" && computerChoice === "Paper"
        ) {
            winner = "human";   
        } else if (humanChoice === computerChoice) {
            winner = "tie";
        } else {
            winner = "computer";
        };
    
        if (winner === "human") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else if (winner === "computer") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else {
            console.log(`It's a tie! You both chose ${humanChoice}`);
        };
    };

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    };

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("The computer won the game...");
    } else {
        console.log("The game is a tie!");
    };
}

playGame();