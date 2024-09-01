
var question = [
    {
        question: "Add 2 and 5?",
        choices: [2,5,8,7],
        answerIndex: 3,

    },
    {
        question: " What is keyword to declared a variable?",
        choices: ["variable","var","varr","able"],
        answerIndex: 1,
    },
    {
        question: " What is let?",
        choices: ["variable","index","object","class"],
        answerIndex: 0,
    },
    
]
var score = 0;
var currentQuestionIndex = 0;


function showQuestions(){
    var question1 = document.getElementById('question')
    question1.textContent = question[currentQuestionIndex].question;

    document.getElementById('choice1').textContent = question[currentQuestionIndex].choices[0]

    document.getElementById('choice2').textContent = question[currentQuestionIndex].choices[1]

    document.getElementById('choice3').textContent = question[currentQuestionIndex].choices[2]

    document.getElementById('choice4').textContent = question[currentQuestionIndex].choices[3]

  
}


function checkAnswer(selectedOptionIndex){
    if(selectedOptionIndex === question[currentQuestionIndex].answerIndex){
        alert("You got it right .")
        score++;
        currentQuestionIndex++;
        showQuestions()

    } else{
        alert("Wrong! try nst time.")
        currentQuestionIndex++;
        showQuestions();
        
    }
}
showQuestions();
checkAnswer();


























// const questions = [
//     {
//         question: "What is the capital of France?",
//         choices: ["Berlin", "Madrid", "Paris", "Rome"],
//         answer: 2
//     },
//     {
//         question: "What is 2 + 2?",
//         choices: ["3", "4", "5", "6"],
//         answer: 1
//     },
//     {
//         question: "What is the color of the sky on a clear day?",
//         choices: ["Green", "Blue", "Red", "Yellow"],
//         answer: 1
//     },
//     {
//         question: "What is the largest planet in our solar system?",
//         choices: ["Earth", "Mars", "Jupiter", "Saturn"],
//         answer: 2
//     }
// ];

// let currentQuestionIndex = 0;
// let score = 0;
// const totalQuestions = questions.length;

// document.addEventListener('DOMContentLoaded', () => {
//     loadQuestion();

//     const answerButtons = document.querySelectorAll('.answer-btn');
//     answerButtons.forEach((button, index) => {
//         button.addEventListener('click', () => handleAnswer(index));
//         button.addEventListener('mouseover', () => button.style.backgroundColor = '#3e8e41');
//         button.addEventListener('mouseout', () => button.style.backgroundColor = '#4CAF50');
//     });

//     document.getElementById('next-question-btn').addEventListener('click', loadQuestion);
//     document.addEventListener('keydown', handleKeyboardInput);
// });

// function loadQuestion() {
//     if (currentQuestionIndex >= totalQuestions) {
//         showEndGameMessage();
//         return;
//     }

//     const question = questions[currentQuestionIndex];
//     document.getElementById('question-area').textContent = question.question;
    
//     const answerButtons = document.querySelectorAll('.answer-btn');
//     answerButtons.forEach((button, index) => {
//         button.textContent = question.choices[index];
//         button.disabled = false;
//     });

//     document.getElementById('next-question-btn').style.display = 'none';
//     document.getElementById('end-game-message').textContent = '';
// }

// function handleAnswer(index) {
//     const question = questions[currentQuestionIndex];
//     const isCorrect = index === question.answer;

//     if (isCorrect) {
//         score++;
//         document.getElementById('score').textContent = `Score: ${score}`;
//         alert('Correct!');
//     } else {
//         alert('Try Again!');
//     }

//     const answerButtons = document.querySelectorAll('.answer-btn');
//     answerButtons.forEach(button => button.disabled = true);

//     document.getElementById('next-question-btn').style.display = 'block';
// }

// function handleKeyboardInput(event) {
//     const key = event.key;
//     if (key >= '1' && key <= '4') {
//         const index = parseInt(key) - 1;
//         handleAnswer(index);
//     }
// }

// function showEndGameMessage() {
//     document.getElementById('end-game-message').textContent = `Game Over! Your final score is ${score}.`;
//     document.getElementById('next-question-btn').style.display = 'none';
// }
