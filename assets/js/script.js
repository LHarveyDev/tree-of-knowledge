/*  Quiz questions*/

const questions = [
    {
        image: "assets/images/oak.jpg",
        question: "Which tree does this leaf come from?",
        answers: [
            { text: "Oak", correct: true },
            { text: "Sycamore", correct: false },
            { text: "Pine", correct: false },
            { text: "Cedar", correct: false },
        ]
    },
    {
        image: "assets/images/sycamore.jpg",
        question: "Which tree does this leaf come from?",
        answers: [
            { text: "Beech", correct: false },
            { text: "Sycamore", correct: true },
            { text: "Ash", correct: false },
            { text: "Cedar", correct: false },
        ]
    },
    {
        image: "assets/images/poplar.jpg",
        question: "Which tree does this leaf come from?",
        answers: [
            { text: "Pine", correct: false },
            { text: "Hornbeam", correct: false },
            { text: "Poplar", correct: true },
            { text: "Ash", correct: false },
        ]
    },
    {
        image: "assets/images/beech.jpg",
        question: "Which tree does this leaf come from?",
        answers: [
            { text: "Oak", correct: false },
            { text: "Beech", correct: true },
            { text: "Hawthorn", correct: false },
            { text: "Cedar", correct: false },
        ]
    },
    {
        image: "assets/images/ash.jpg",
        question: "Which tree does this leaf come from?",
        answers: [
            { text: "Poplar", correct: false },
            { text: "Horse Chestnut", correct: false },
            { text: "Redwood", correct: false },
            { text: "Ash", correct: true },
        ]
    }];

/* Defining my variables */

const imageElement = document.getElementById("leaf-image");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

/* Functions */

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
