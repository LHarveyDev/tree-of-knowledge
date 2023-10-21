/* Loading my DOM Content to ensure Javascript is executed after HTML */

document.addEventListener("DOMContentLoaded", function () {

    /* Defining my variables */

    const startButton = document.getElementById("start-btn");
    const startScreenSection = document.getElementById("start-screen");
    const playScreenSection = document.getElementById("play-screen");

    const imageElement = document.getElementById("leaf-image");
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    const scoreMessage = document.getElementById("score-message");
    const link = document.createElement("a");

    let currentQuestionIndex = 0;
    let score = 0;

    // Function to start quiz  

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        scoreMessage.innerHTML = ""; // Clearing the previous score message

        shuffleArray(questions);  // Randomize the questions
        showQuestion();
    }

    // Function to shuffle an array using the Fisher-Yates algorithm 

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        imageElement.src = currentQuestion.image;
        imageElement.alt = currentQuestion.alt;
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
        scoreMessage.innerHTML = '';  // Clear score message content
        scoreMessage.style.display = 'none'; // Hide the score message

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
        imageElement.src = "assets/images/tree_of_life.jpg";
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        if (score <= 3) {
            scoreMessage.innerHTML = "Nice try. With a bit more research you could be an expert.<br>Why not take a look at";
        } else if (score <= 7) {
            scoreMessage.innerHTML = "Well done! You're well on your way to becoming an expert.<br>Why not take a look at";
        } else {
            scoreMessage.innerHTML = "Wow, you really know your stuff. You're a tree expert!<br>Why not take a look at";
        }
        link.href = "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/how-to-identify-trees";
        link.textContent = " The Woodland Trust website";
        link.target = "_blank";
        scoreMessage.appendChild(link);
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
        nextButton.style.background = "#D5AC4E";
        scoreMessage.style.display = 'block'; /* Show the score message. Tutor support was needed to show how to display the scoreMessage here but hide it when the quiz resets*/
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }

    // Event Listener to hide the Start Screen and display Play Screen on click
    startButton.addEventListener("click", () => {
        startScreenSection.style.display = "none";
        playScreenSection.style.display = "block";
    });


    // Event Listener to display the next question on click
    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    });

    startQuiz();
});
