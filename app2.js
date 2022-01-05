const quizform = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-button");
const op = document.querySelector(".output");
console.log(quizform, submitButton, op);

const correctAnswers = ["90", "right"];

function checkScore() {
    event.preventDefault()
    console.log("clicked in")
    let score = 0;
    let i = 0;
    const formData = new FormData(quizform);

    for (let alpha of formData.values()) {
        // console.log(alpha);
        if (correctAnswers[i] === alpha) {
            score++;
        }
        i++;
    }
    console.log(score);
    showScore(score);
}

function showScore(score) {
    op.innerText = "Your score is : " + score;
}


submitButton.addEventListener("click", checkScore);