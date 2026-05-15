const questions = [
  {
    text: "Seu amigo esqueceu o lápis. O que é um pequeno bem?",
    options: {
      A: "Rir dele",
      B: "Esconder o material",
      C: "Emprestar um lápis",
    },
    answer: "C",
  },
  {
    text: "Mamãe pede para guardar os brinquedos.",
    options: {
      A: "Guardar com alegria",
      B: "Fingir que não ouvi",
      C: "Reclamar muito",
    },
    answer: "A",
  },
  {
    text: "Um colega está triste.",
    options: {
      A: "Ignorar",
      B: "Perguntar se ele precisa de ajuda",
      C: "Sair correndo",
    },
    answer: "B",
  },
  {
    text: "Você derrubou água sem querer.",
    options: {
      A: "Esconder",
      B: "Avisar e limpar",
      C: "Culpar outro",
    },
    answer: "B",
  },
  {
    text: "Na fila, o certo é:",
    options: {
      A: "Empurrar",
      B: "Passar na frente",
      C: "Esperar sua vez",
    },
    answer: "C",
  },
  {
    text: "Depois de brincar:",
    options: {
      A: "Deixar tudo bagunçado",
      B: "Organizar os brinquedos",
      C: "Mandar outro arrumar",
    },
    answer: "B",
  },
  {
    text: "Alguém fez algo legal para você.",
    options: {
      A: "Agradecer",
      B: "Não dizer nada",
      C: "Reclamar",
    },
    answer: "A",
  },
  {
    text: "Você brigou com um amigo.",
    options: {
      A: "Ficar emburrado",
      B: "Pedir desculpas",
      C: "Continuar brigando",
    },
    answer: "B",
  },
  {
    text: "Alguém está sozinho.",
    options: {
      A: "Convidar para brincar",
      B: "Deixar sozinho",
      C: "Fazer de conta que não viu",
    },
    answer: "A",
  },
  {
    text: "O bem cresce:",
    options: {
      A: "De uma vez só",
      B: "Pouquinho por pouquinho",
      C: "Só quando somos adultos",
    },
    answer: "B",
  },
];

const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const finalScreen = document.querySelector("#final-screen");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const nextButton = document.querySelector("#next-button");
const progressLabel = document.querySelector("#progress-label");
const scoreLabel = document.querySelector("#score-label");
const progressFill = document.querySelector("#progress-fill");
const questionText = document.querySelector("#question-text");
const optionsBox = document.querySelector("#options");
const feedback = document.querySelector("#feedback");
const finalScore = document.querySelector("#final-score");

let currentIndex = 0;
let score = 0;
let answered = false;

function showScreen(screen) {
  startScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  finalScreen.classList.add("hidden");
  screen.classList.remove("hidden");
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const question = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  progressLabel.textContent = `Pergunta ${currentIndex + 1} de ${questions.length}`;
  scoreLabel.textContent = `${score} ⭐`;
  progressFill.style.width = `${progress}%`;
  questionText.textContent = `🌱 ${question.text}`;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextButton.classList.add("hidden");
  optionsBox.innerHTML = "";

  ["A", "B", "C"].forEach((letter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option-button option-${letter.toLowerCase()}`;
    button.textContent = `${letter}) ${question.options[letter]}`;
    button.addEventListener("click", () => checkAnswer(letter));
    optionsBox.appendChild(button);
  });
}

function checkAnswer(selected) {
  if (answered) {
    return;
  }

  answered = true;
  const question = questions[currentIndex];
  const buttons = [...document.querySelectorAll(".option-button")];

  buttons.forEach((button) => {
    button.disabled = true;
    if (button.textContent.startsWith(question.answer)) {
      button.classList.add("option-correct");
    }
    if (button.textContent.startsWith(selected) && selected !== question.answer) {
      button.classList.add("option-wrong");
    }
  });

  if (selected === question.answer) {
    score += 1;
    scoreLabel.textContent = `${score} ⭐`;
    feedback.textContent = "Muito bem! Você semeou um pequeno bem! 🌱⭐";
    feedback.classList.add("good");
  } else {
    feedback.textContent = `Quase! Vamos aprender juntos. A resposta era: ${question.options[question.answer]} 😊`;
    feedback.classList.add("try");
  }

  nextButton.classList.remove("hidden");
}

function nextQuestion() {
  currentIndex += 1;

  if (currentIndex >= questions.length) {
    finalScore.textContent = `Você fez ${score} de ${questions.length} pontos!`;
    showScreen(finalScreen);
    return;
  }

  renderQuestion();
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
