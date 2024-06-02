const puzzles = [
    { question: "Solve for x: 5x + 3 = 23", answer: 4 },
    { question: "Solve for y: 2y - 4 = 10", answer: 7 },
    { question: "Solve for z: 3z + 6 = 21", answer: 5 }
];

let currentPuzzle = 0;

function displayPuzzle() {
    if (currentPuzzle < puzzles.length) {
        document.getElementById("question").innerText = puzzles[currentPuzzle].question;
    } else {
        document.getElementById("story").innerText = "Congratulations! You have disabled the coil and saved the land!";
        document.getElementById("puzzle").style.display = "none";
    }
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const feedback = document.getElementById("feedback");

    if (userAnswer === puzzles[currentPuzzle].answer) {
        feedback.style.color = "#28a745";
        feedback.innerText = "Correct! Moving to the next puzzle.";
        currentPuzzle++;
        document.getElementById("answer").value = "";
        setTimeout(() => {
            feedback.innerText = "";
            displayPuzzle();
        }, 1000);
    } else {
        feedback.style.color = "#dc3545";
        feedback.innerText = "Incorrect. Try again.";
    }
}

window.onload = displayPuzzle;
