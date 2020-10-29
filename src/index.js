const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true},
      { text: '22', correct: false}
    ]
  },
  {
    question: 'What is 10 / 2?',
    answers: [
      { text: '5', correct: true},
      { text: '102', correct: false}
    ]
  },
  {
    question: 'What is UI?',
    answers: [
      { text: 'User Interface', correct: true},
      { text: 'User Intelligence', correct: false}
    ]
  }
]
const startBtn = document.querySelector('#start-btn');
const nextBtn = document.querySelector('#next-btn');
const questionCon = document.querySelector('#question-con');
const questionElement = document.querySelector('#question');
const answerBtnsElement = document.querySelector('#answer-btns');
let shuffledQuestions, currentQuestionIndex;

startBtn.addEventListener('click', () => {
  startGame();
});
nextBtn.addEventListener('click', () => {
  currentQuestionIndex += 1;
  nextQuestion();
})

const startGame = () => {
  console.log('Jamesss');
  startBtn.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionCon.classList.remove('hide');
  nextQuestion();
  console.log(shuffledQuestions);
};

const nextQuestion = () => {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
};

const showQuestion = (question) => {
  questionElement.innerText = question.question;
  question.answers.forEach(ans => {
    const button = document.createElement('button');
    button.innerText = ans.text;
    button.classList.add('btn');
    if (ans.correct) {
      button.dataset.correct = ans.correct;
    }
    button.addEventListener('click', selectAnswer)
    answerBtnsElement.appendChild(button);
  });
};

const resetState = () => {
  nextBtn.classList.add('hide');
  while (answerBtnsElement.firstChild) {
    answerBtnsElement.removeChild(answerBtnsElement.firstChild);
  }
}

const selectAnswer = (event) => {
  const selectedBtn = event.target;
  const correct = selectedBtn.dataset.correct;
  setStatusClass(document.body, correct)
  Array.from(answerBtnsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
};

const setStatusClass = (elem, correct) => {
  clearStatusClass(elem);
  if (correct) {
    elem.classList.add('correct');
  } else {
    elem.classList.add('wrong');
  }
};

const clearStatusClass = (elem) => {
  elem.classList.remove('correct');
  elem.classList.remove('wrong');
}