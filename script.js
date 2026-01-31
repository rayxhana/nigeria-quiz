const questions = [
    {
        question: "Which 1st question sould I do?",
        answers: [
            { text: "Hello", correct: false},
            { text: "world", correct: false},
            { text: "yes", correct: true},
            { text: "you", correct: false},
        ]
    },
    {
       question: "Number twooo",
        answers: [
            { text: "Hello", correct: false},
            { text: "correction", correct: true},
            { text: "no", correct: false},
            { text: "you", correct: false},
        ] 
    },
    {
       question: "Troissant",
        answers: [
            { text: "Hello", correct: false},
            { text: "absolutely not", correct: false},
            { text: "no", correct: false},
            { text: "absolutely", correct: true},
        ] 
    },
    {
       question: "FOUR FOUR FOUR",
        answers: [
            { text: "Hello, correct answer", correct: true},
            { text: "THATS WRONg", correct: false},
            { text: "no", correct: false},
            { text: "you", correct: false},
        ] 
    }
];

//characterising the ids we have and determining their behaviour
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion(); //calls function to display the questions
}

function showQuestion(){
//to reset previous questions so they are not repeated
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//displaying answers inside the buttons
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.diplay = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
         if(button.dataset.correct === "true"){
            button.classList.add("correct");
         }
         button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
            showScore();
    }
}

//function for next button
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();