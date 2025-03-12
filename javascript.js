let humanScore = 0;
let computerScore = 0;

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