// setting difficulty level for the game
let difficulty = parseInt(prompt("Enter maximum number. The lower the simpler!"));
while (!difficulty) {
    difficulty = prompt("Enter a valid number");
}

// randomizing the target number by difficulty inserted
const target = Math.ceil(Math.random() * difficulty);
console.log(`The target number is ${target}`);

// setting the first guess
let guess = parseInt(prompt("Guess a number:"));
while (!guess) {
    guess = prompt("Enter a valid guess:");
}

// setting up the guess counter
let guessCount = 1;

// guess loop, maximum 5 guesses
while (guessCount < 5) {
    if (parseInt(guess) < target) {
        guessCount++;
        guess = prompt(`Too low. guess again! You have ${6 - guessCount} guesses left.`);
    }
    else if (parseInt(guess) > target) {
        guessCount++;
        guess = prompt(`Too high. guess again! You have ${6 - guessCount} guesses left.`);
    }
    else if (guess === "quit") {
        break;
    }
    else if (parseInt(guess) === target) {
        guessCount++;
        alert("You did it!");
        break;
    }
}

// console info about number of guesses
if (guess === "quit") {
    console.log(`You quit after ${guessCount} tries`)
} else {
    console.log(`It took you ${guessCount} guesses`)
}
