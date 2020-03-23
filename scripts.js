var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var scoreDiv = document.getElementById("score");
var pEl = document.getElementById("pElement");
var result = document.getElementById("result")

var resultTimeOut;
function setResultTimeOut() {
    resultTimeOut = setTimeout(function () {
        result.innerHTML = "";
    }, 2000);
};
function clearResultTimeOut(){
    clearTimeout(resultTimeOut);
}
var timerCountDown = 40;
var timerCountDownTimer;
function setTimerCountDownTimeOut(){
    timerCountDownTimer = setInterval(function(){
        timer.innerHTML= timerCountDown;
       timerCountDown = timerCountDown -1;
       if (timerCountDown < 0){
           clearTimerCountDown();
       }

    }, 1000)

};
function clearTimerCountDown(){
    clearInterval(timerCountDownTimer);
}

//Create questions
var questions = [
    {
        question: "What does HTML stands for?",
        choiceA: "Home Tool Makeup language",
        choiceB: "Hyperlinks and text Markup Language",
        choiceC: "Hyper Text Markup Language",
        choiceD: "Hyper Tool Makeup Language",
        correct: "C",
    }, {
        question: "What does CSS stands for?",
        choiceA: "Colorful Style Sheets",
        choiceB: "Cascading Style Sheets",
        choiceC: "Computer Style Sheets",
        choiceD: "Concept Style Sheets",
        correct: "B",
    }, {
        question: "What is considered to be the most popular programming language in the world?",
        choiceA: "JavaScript",
        choiceB: "HTML",
        choiceC: "Pathon",
        choiceD: "Java",
        correct: "A",

    }, {
        question: "In CSS and HTML colors are displayed by combining these three shades of light",
        choiceA: "Red, Green, and Blue.",
        choiceB: "Yellow, Blue, and Green.",
        choiceC: "Violet, Red and Orange",
        choiceD: "White, Pink and Blue",
        correct: "A",
    }, {
        question: "What elements are used to test for TRUE or False values stored in variables?",
        choiceA: "Function",
        choiceB: "Comparison and Logical Operators",
        choiceC: "Conditional Statements",
        choiceD: "DOM",
        correct: "B",
    }, {
        question: "What is a JavaScript element that represents either TRUE or FALSE values",
        choiceA: "Boolean",
        choiceB: "Number",
        choiceC: "String",
        choiceD: "Array",
        correct: "A",
    }, {
        question: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
        choiceA: "For Loop",
        choiceB: "Conditional Loop",
        choiceC: "While Loop",
        choiceD: "If-Else Loop",
        correct: "C",
    }, {
        question: "What is a block of code called that is used to perform a specific task in Javascript?",
        choiceA: "Variable",
        choiceB: "Function",
        choiceC: "charAt",
        choiceD: "String",
        correct: "B",
    }
];
var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var score = 0;

start.addEventListener("click", startQuiz);
function startQuiz() {
    start.style.display = "none";
    pEl.style.display = "none"
    renderQuestion();
    quiz.style.display = "block";
    setTimerCountDownTimeOut();
}

function renderQuestion() {
    var q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

}

function checkAnswer(answer) {

    if (answer === questions[runningQuestion].correct) {
        score++;
        result.innerHTML = "You got it";
    } else {
        timerCountDown = timerCountDown -5;
        result.innerHTML = "wrong!"
    }
    if (resultTimeOut){
        clearResultTimeOut();
        setResultTimeOut();
    } else {
        setResultTimeOut(); 
    }
    runningQuestion++;
    renderQuestion();
}

function scoreRender() {
    scoreDiv.style.display = "block";

}