function RandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
let randomNumber = RandomNumber();
let attempts = 0;
const maxAttempts = 5; 
function handleSubmit(event) {
    event.preventDefault(); 
    const guess = parseInt(document.getElementById('value').value);
    attempts++;
       
    let message;
    if (guess === randomNumber) {
        message = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
        resetGame();
    } else if (guess > randomNumber) {
        message = `Too high! Try again. Attempt ${attempts}`;
    } else {
        message = `Too low! Try again. Attempt ${attempts}`;
    }
    
    if (attempts >= maxAttempts) {
        message += `\nMax attempts reached`;
        reloadGame();
    }
    
    document.getElementById('screen').value = message;
    
    document.getElementById('value').value = '';
}

function reloadGame() {
    attempts = 0;
    randomNumber = generateRandomNumber();
    document.getElementById('screen').value = '';
}

// Add event listener to the form submission
document.getElementById('form').addEventListener('submit', handleSubmit);
