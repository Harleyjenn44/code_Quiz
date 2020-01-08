const content = document.getElementById("content")

var startBtn = document.createElement("button")

var welcome = document.getElementById("welcome")

var instructions = document.getElementById("instructions")

var  currentQuestionIndex = 0
startBtn.textContent = "Start Quiz"

content.appendChild(startBtn)

startBtn = document.addEventListener("click", function () {
    welcome.style.display = "none";
    instructions.style.display = "none";
    displayQuestion()
})
function displayQuestion() {
    var currentQues = questions[currentQuestionIndex]
    content.innerHTML = currentQues.question
    for (i = 0; i < currentQues.answers.length; i++) {
        var answerBtn = document.createElement("button")
        answerBtn.setAttribute("value", currentQues.answers[i])
        answerBtn.setAttribute("class", "answerBtn" )
        answerBtn.textContent = currentQues.answers[i]
        content.appendChild(answerBtn)
    }
}
function checkAnswer(){
    var answer = questions[currentQuestionIndex].correctAnswer
    
}





var questions = [
    {
        question: "What does CSS stand for?",
        answers: [
            'circling style sheet',
            'cascading styles sheets',
            'cascading style sheets'
        ],
        correctAnswer: 'cascading style sheets'
    },
    {
        question: "What is the purpose of an HTML doc?",
        answers: [
            'It allows us to style the webpage.',
            'It is the basic document needed to display your webpage online.'
        ],
        correctAnswer: 'It is the basic document needed to display your webpage online.'
    },
    {
        question: "What is the purpose of a Stylesheet?",
        answers: [
            'It allows us to style the webpage.',
            'It allows us to animate the webpage.',
            'It is the basic document needed to display your webpage online.'
        ],
        correctAnswer: 'a'
    },
    {
        question: "What does BootStrap allow us to do?",
        answers: [
            'It allows us to customize a webpage faster and easier.',
            'It allows us to style the webpage',
            'It allows us to animate the webpage'
        
        ],
    correctAnswer: 'a'
    },
    {
        question: "Bootstrap is to CSS as JQuery is to?",
        answers: [
         'HTML',
        'Java',
        'JavaScript'
       ],
correctAnswer: 'c'
    },
]