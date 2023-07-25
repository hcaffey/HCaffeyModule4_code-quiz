const quizQuestions = [  
        {
          question: "What is the correct way to declare a JavaScript variable?",
          answers: [
            {text: "variable myVar;", correct:false},
            {text: "var myVar;", correct: true},
            {text: "v myVar;", correct:false},
            {text: "myVar = variable;", correct:false},
          ],
        },
        {
          question: "What is the output of the following code? console.log(2 + '2');",
          answers: [
            {text: "4", correct:false},
            {text: "22;", correct: true},
            {text: "Error;", correct:false},
            {text: "NaN;", correct:false},
          ],
        },
];

var questionIndex = 0;
var score = 0;

var quizBody = document.querySelector(".quiz-body");
var questionEl = document.getElementById("question");
var responseButton = document.getElementById("answer-options");


function startQuiz () {
    questionIndex = 0;
    score = 0;
    timeLeft = 0;
    showQuestion();
};

function showQuestion() {
    resetQuestion();
    var currentQuestion = quizQuestions[questionIndex].question;
    questionEl.innerHTML = currentQuestion;
    var answer = quizQuestions[questionIndex].answers.text;
    console.log(answer);
    console.log(currentQuestion);
    for (let i=0; i < quizQuestions[questionIndex].answers.length; i++) {
        var button = document.createElement("button");
        button.innerHTML = quizQuestions[questionIndex].answers[i].text;
        button.classList.add("btn");
        quizBody.appendChild(button);
       
        button.addEventListener("click", selectAnswer);
    }
    /* if(answer.correct) {
            button.dataset.correct = answer.correct;
        } */
};

function resetQuestion() {
    while(responseButton.firstChild){
        responseButton.removeChild(responseButton.firstChild);
        console.log('working');
    }
  };


function selectAnswer(e) {
    var selectedAnswer = e.target;
    var isCorrect = selectedAnswer.dataset.correct === "true";
    if(isCorrect) {
        score + 10;
        questionIndex++;
        showQuestion();
        console.log(questionIndex);

   /*  } else {
        timer -10;
    }  */

}
};

startQuiz();