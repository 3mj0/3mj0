const categories = {
    movies: ["THE MATRIX", "USUAL SUSPECTS", "HARRY POTTER", "THE GOONIES"],
    sports: ["HOCKEY", "BASEBALL", "FOOTBALL", "TRACK AND FIELD"],
    food: ["FISH CAKES", "BACON AND EGGS", "CEASAR SALAD", "RIBS"],
    clothing: ["SHIRT", "OVERALLS", "SOCKS", "SHOES"],
    tech: ["LAPTOP", "GAMING CONSOLE", "CELL PHONE", "TABLET"],
    drinks: ["RUM", "GIN", "TEQUILA", "WHISKY"]
};

let selectedCategory = 'movies'; 
let selectedWord = '';
let correctGuesses = [];
let wrongGuesses = 0;
const maxWrongGuesses = 8;

document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category-select');
    categorySelect.addEventListener('change', (event) => {
        selectedCategory = event.target.value;
        startGame(); 
    });

    createLetterButtons();
    startGame();
});

function startGame() {
    correctGuesses = [];
    wrongGuesses = 0;

    const words = categories[selectedCategory];
    selectedWord = words[Math.floor(Math.random() * words.length)];

    resetLetterButtons();
    displayWord();
    clearCanvas();
}

function createLetterButtons() {
    const lettersContainer = document.getElementById('letters');
    lettersContainer.innerHTML = ''; 

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let letter of alphabet) {
        const button = document.createElement('button');
        button.className = 'letter-btn';
        button.innerHTML = letter;
        button.addEventListener('click', handleGuess);
        lettersContainer.appendChild(button);
    }
}

function resetLetterButtons() {
    document.querySelectorAll('.letter-btn').forEach(button => {
        button.disabled = false;
    });
}

function displayWord() {
    const wordDisplay = document.getElementById('word-display');
    wordDisplay.innerHTML = selectedWord.split('').map(letter => 
        letter === ' ' ? ' ' : (correctGuesses.includes(letter) ? letter : "_")
    ).join(' ');
}

function handleGuess(event) {
    const letter = event.target.innerHTML;
    event.target.disabled = true;

    if (selectedWord.includes(letter)) {
        correctGuesses.push(letter);
        displayWord();
        checkWin();
    } else {
        wrongGuesses++;
        drawHangman();
        checkLose();
    }
}

function checkWin() {
    if (!document.getElementById('word-display').innerHTML.includes('_')) {
        setTimeout(() => {
            alert('You won!');
            startGame(); 
        }, 100);
    }
}

function checkLose() {
    if (wrongGuesses >= maxWrongGuesses) {
        setTimeout(() => {
            alert(`You lost! The word was: ${selectedWord}`);
            startGame(); 
        }, 100);
    }
}

function drawHangman() {
    const canvas = document.getElementById('hangman');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (wrongGuesses > 0) {
        ctx.fillRect(10, 180, 100, 10);
    }

    if (wrongGuesses > 1) {
        ctx.fillRect(50, 20, 10, 160);
    }

    if (wrongGuesses > 2) {
        ctx.fillRect(50, 20, 60, 10);
    }

    if (wrongGuesses > 3) {
        ctx.fillRect(110, 20, 2, 30);
    }

    if (wrongGuesses > 4) {
        ctx.beginPath();
        ctx.arc(111, 60, 15, 0, Math.PI * 2);
        ctx.stroke();
    }

    if (wrongGuesses > 5) {
        ctx.fillRect(110, 75, 2, 40);
    }

    if (wrongGuesses > 6) {
        ctx.beginPath();
        ctx.moveTo(110, 75);
        ctx.lineTo(80, 100);
        ctx.stroke();
    }

    if (wrongGuesses > 7) {
        ctx.beginPath();
        ctx.moveTo(112, 75);
        ctx.lineTo(142, 100);
        ctx.stroke();
    }

    if (wrongGuesses > 8) {
        ctx.beginPath();
        ctx.moveTo(110, 115);
        ctx.lineTo(90, 140);
        ctx.stroke();
    }

    if (wrongGuesses > 9) {
        ctx.beginPath();
        ctx.moveTo(112, 115);
        ctx.lineTo(132, 140);
        ctx.stroke();
    }
}

function clearCanvas() {
    const canvas = document.getElementById('hangman');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
