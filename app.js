// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

const resetButton = document.getElementById('reset-button');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let incorrectGuesses = 0;
let totalGuesses = 0;

function randomSpot() {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    return answer;
}

shedButton.addEventListener('click', () => {
    handleGuess(randomSpot(), 'shed');
});

treeButton.addEventListener('click', () => {
    handleGuess(randomSpot(), 'tree');
});

boulderButton.addEventListener('click', () => {
    handleGuess(randomSpot(), 'boulder');
});

function handleGuess(correctSpot, userGuess) {
    clearFace();

    if (correctSpot === userGuess) {
        correctGuesses++;
        totalGuesses++;
        winsEl.textContent = correctGuesses;
    } else {
        incorrectGuesses++;
        totalGuesses++;
        lossesEl.textContent = incorrectGuesses;
    }

    if (correctSpot === 'tree') {
        treeContainer.classList.add('face');
    } else if (correctSpot === 'shed') {
        shedContainer.classList.add('face');
    } else {
        boulderContainer.classList.add('face');
    }

    totalEl.textContent = totalGuesses;

}

resetButton.addEventListener('click', () => {
    winsEl.textContent = 0;
    lossesEl.textContent = 0;
    totalEl.textContent = 0;
    clearFace();
});

function clearFace() {
    treeContainer.classList.remove('face');
    shedContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
}

    // reset the styles
    // then increment the guesses
    // then grab the appropriate container element for the correct guess from the DOM
    // then add the face class to that element so that the face shows up
    // then if the user guess is correct, increment the correct guesses
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
