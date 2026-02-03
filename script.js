const questions = [
    {
        question: "In which part of Nigeria is Islam most widely practiced?",
        answers: [
            { text: "South", correct: false},
            { text: "East", correct: false},
            { text: "North", correct: true},
            { text: "West", correct: false},
        ],
    },
    {
        question: "Nigeria's muslim population is estimated to be roughly what proportion of the country's population?",
        answers: [
            { text: "About 10%", correct: false},
            { text: "About 25%", correct: false},
            { text: "About 50%", correct: true},
            { text: "About 75%", correct: false},
        ], 
       information: "Nigeria is roughly evenly divided between Muslims and Christians, with Muslims making up about half of the population - over 100 million people."
 
    },
    {
        question: "What is the capital of Nigeria?",
        answers: [
            { text: "Lagos", correct: false},
            { text: "Abuja", correct: true},
            { text: "Kano", correct: false},
            { text: "Ibadan", correct: false},
        ],
    },
    {
        question: "Which famous mosque is located in Abuja, Nigeria's capital?",
        answers: [
            { text: "Sultan Qaboos National Mosque", correct: false},
            { text: "Al-Azhar Mosque", correct: false},
            { text: "Blue Mosque", correct: false},
            { text: "Nigerian National Mosque", correct: true},
        ],
        information: "Did you know the Nigerian National Mosque is one of the largest mosques in Africa"

    },
    {
        question: "Islam first arrived in Nigeria mainly through:",
        answers: [
            { text: "Trans-Saharan trade routes", correct: true},
            { text: "European missionaries", correct: false},
            { text: "Colonial administration", correct: false},
            { text: "Atlantic slave trade", correct: false},
        ],
        information: "Islam spread into Nigeria mainly through trans-Saharan trade routes, brought by merchants and scholars from North Africa."

    },
    {
        question: "How many ethnic groups does Nigeria have?",
        answers: [
            { text: "About 50", correct: false},
            { text: "About 100", correct: false},
            { text: "About 150", correct: false},
            { text: "250+", correct: true},
        ],
        information: "Nigeria is one of the most ethnically diverse countries in the world, with over 250 ethnic groups speaking more than 500 languages."

    },
    {
        question: "What year did Nigeria gain independence?",
        answers: [
            { text: "1957", correct: false},
            { text: "1960", correct: true},
            { text: "1963", correct: false},
            { text: "1970", correct: false},
        ],
        information: "Nigeria gained independence from British colonial rule on October 1st, 1960."

    },
    {
        question: "Which Nigerian state is known as the 'Centre of Excellence'?",
        answers: [
            { text: "Oyo", correct: false},
            { text: "Abuja", correct: false},
            { text: "Kano", correct: false},
            { text: "Lagos", correct: true},
        ],
        information: "Lagos is called the 'Centre of Excellence' because of its economic importance, cultural influence, and role as Nigeria's former capital."

    },
    {
        question: "Nigeria has one of the largest film industries in the world called:",
        answers: [
            { text: "AfroCinema", correct: false},
            { text: "NaijaFlix", correct: false},
            { text: "Nollywood", correct: true},
            { text: "FilmNaija", correct: false},
        ],
    },
    {
        question: "What year did Abuja become the capital city of Nigeria?",
        answers: [
            { text: "1991", correct: true},
            { text: "1976", correct: false},
            { text: "1985", correct: false},
            { text: "2000", correct: false},
        ],
    },
    {
        question: "Which ocean borders Nigeria?",
        answers: [
            { text: "Pacific Ocean", correct: false},
            { text: "Atlantic Ocean", correct: true},
            { text: "Indian Ocean", correct: false},
            { text: "Southern Ocean", correct: false},
        ],
    },
    {
        question: "Nigeria's population currently ranks approximately where in the world",
        answers: [
            { text: "3rd", correct: false},
            { text: "6th", correct: true},
            { text: "9th", correct: false},
            { text: "12th", correct: false},
        ],
    },
    {
        question: "In Africa, Nigeria's Muslim population ranks:",
        answers: [
            { text: "1st", correct: true},
            { text: "2nd", correct: false},
            { text: "4th", correct: false},
            { text: "5th", correct: false},
        ],
        information: "Nigeria has the largest Muslim population in Africa, with over 100 million muslims, closely followed by Egypt"

    },
    {
        question: "During which century did Islam begin spreading in Nigeria?",
        answers: [
            { text: "11th Century", correct: true},
            { text: "5th Century", correct: false},
            { text: "15th Century", correct: false},
            { text: "18th Century", correct: false},
        ],
    },
    {
        question: "Nigeria is often ranked among which group of countries globally for the number of Hafidh (People who have memorised the Qur'an)",
        answers: [
            { text: "Top 20", correct: false},
            { text: "Top 10", correct: false},
            { text: "Top 5", correct: true},
            { text: "Top 15", correct: false},
        ],
        information: "It is estimated that Nigeria has around 3 million Hafidh (Quran memorisers), ranking it amongst the top countries globally"
    },
];

//characterising the ids we have and determining their behaviour
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const infoText = document.getElementById("info-text")

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
    nextButton.style.display = "none";
    infoText.style.display = "none";
    infoText.innerHTML = "";
    while (answerButtons.firstChild){
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

    const currentQuestion = questions[currentQuestionIndex];
    if(currentQuestion.information) {
        infoText.innerHTML = currentQuestion.information;
        infoText.style.display = "block";
    }

    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}! Hope you had FUN!!!`;
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

startQuiz();//WANT TO ADD EXTRA INFORMATION
