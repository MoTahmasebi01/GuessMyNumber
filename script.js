'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// Check Button
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('⛔ No Number!');
    } 

    // When player wins
    else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem'
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    // When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Again Button
document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = "?";
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
});

