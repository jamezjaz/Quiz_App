const questions = [
  {
    question: 'What is 2 + 2',
    answers: [
      { text: '4', correct: true},
      { text: '22', correct: false}
    ]
  }
]
const startBtn = document.querySelector('#start-btn');
const questionCon = document.querySelector('#question-con');
const questionElement = document.querySelector('#question');
const answerBtnsElement = document.querySelector('#answer-btns');
let shuffledQuestions, currentQuestionIndex;

startBtn.addEventListener('click', () => {
  startGame();
});

const startGame = () => {
  console.log('Jamesss');
  startBtn.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random());
  currentQuestionIndex = 0;
  questionCon.classList.remove('hide');
  nextQuestion();
};

const nextQuestion = () => {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
};

const showQuestion = (question) => {
  questionElement.innerText = question.question;
}

const selectAnswer = () => {
  
};