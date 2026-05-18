const allQuestions = [
  {
    "text": "Seu amigo esqueceu o lápis. O que e um pequeno bem?",
    "options": {
      "A": "Rir dele",
      "B": "Esconder o material",
      "C": "Emprestar um lápis"
    },
    "answer": "C"
  },
  {
    "text": "Mamãe pede para guardar os brinquedos.",
    "options": {
      "A": "Guardar com alegria",
      "B": "Fingir que não ouvi",
      "C": "Reclamar muito"
    },
    "answer": "A"
  },
  {
    "text": "Um colega está triste.",
    "options": {
      "A": "Ignorar",
      "B": "Perguntar se ele precisa de ajuda",
      "C": "Sair correndo"
    },
    "answer": "B"
  },
  {
    "text": "Você derrubou água sem querer.",
    "options": {
      "A": "Esconder",
      "B": "Avisar e limpar",
      "C": "Culpar outro"
    },
    "answer": "B"
  },
  {
    "text": "Na fila, o certo e:",
    "options": {
      "A": "Empurrar",
      "B": "Passar na frente",
      "C": "Esperar sua vez"
    },
    "answer": "C"
  },
  {
    "text": "Depois de brincar:",
    "options": {
      "A": "Deixar tudo bagunçado",
      "B": "Organizar os brinquedos",
      "C": "Mandar outro arrumar"
    },
    "answer": "B"
  },
  {
    "text": "Alguém fez algo legal para você.",
    "options": {
      "A": "Agradecer",
      "B": "Não dizer nada",
      "C": "Reclamar"
    },
    "answer": "A"
  },
  {
    "text": "Você brigou com um amigo.",
    "options": {
      "A": "Ficar emburrado",
      "B": "Pedir desculpas",
      "C": "Continuar brigando"
    },
    "answer": "B"
  },
  {
    "text": "Alguém está sozinho.",
    "options": {
      "A": "Convidar para brincar",
      "B": "Deixar sozinho",
      "C": "Fazer de conta que nao viu"
    },
    "answer": "A"
  },
  {
    "text": "O bem cresce:",
    "options": {
      "A": "De uma vez so",
      "B": "Pouquinho por pouquinho",
      "C": "So quando somos adultos"
    },
    "answer": "B"
  },
  {
    "text": "A professora está dando aula:",
    "options": {
      "A": "Você fica conversando com os amigos",
      "B": "Você fica em silência e presta atenção",
      "C": "Você sai da sala"
    },
    "answer": "B"
  },
  {
    "text": "Você percebe que alguém deixou cair os livros:",
    "options": {
      "A": "Passar direto",
      "B": "Ajudar a pegar os livros",
      "C": "Chutar para longe"
    },
    "answer": "B"
  },
  {
    "text": "Seu irmão quer brincar com seu brinquedo:",
    "options": {
      "A": "Compartilhar por um tempo",
      "B": "Esconder o brinquedo",
      "C": "Gritar com ele"
    },
    "answer": "A"
  },
  {
    "text": "O professor está explicando:",
    "options": {
      "A": "Conversar com o colega",
      "B": "Prestar atenção",
      "C": "Fazer barulho"
    },
    "answer": "B"
  },
  {
    "text": "Você ganhou um presente:",
    "options": {
      "A": "Reclamar",
      "B": "Agradecer com alegria",
      "C": "Jogar de lado"
    },
    "answer": "B"
  },
  {
    "text": "Um amigo venceu uma brincadeira:",
    "options": {
      "A": "Ficar com raiva",
      "B": "Parabenizá-lo",
      "C": "Dizer que foi sorte"
    },
    "answer": "B"
  },
  {
    "text": "Você cometeu um erro:",
    "options": {
      "A": "Esconder",
      "B": "Admitir e tentar corrigir",
      "C": "Culpar outro"
    },
    "answer": "B"
  },
  {
    "text": "Sua mãe pede ajuda para arrumar a mesa:",
    "options": {
      "A": "Ajudar com boa vontade",
      "B": "Fingir que não ouviu",
      "C": "Reclamar"
    },
    "answer": "A"
  },
  {
    "text": "Alguém fala com você com carinho:",
    "options": {
      "A": "Responder com carinho",
      "B": "Ignorar",
      "C": "Responder mal"
    },
    "answer": "A"
  },
  {
    "text": "Você vê lixo no chão:",
    "options": {
      "A": "Deixar lá",
      "B": "Jogar no lixo",
      "C": "Empurrar com o pé"
    },
    "answer": "B"
  },
  {
    "text": "Um colega está sendo deixado de lado:",
    "options": {
      "A": "Chamā-lo para participar",
      "B": "Continuar brincando",
      "C": "Rir dele"
    },
    "answer": "A"
  },
  {
    "text": "Você acorda de manhã:",
    "options": {
      "A": "Começar reclamando",
      "B": "Agradecer por um novo dia",
      "C": "Ficar emburrado"
    },
    "answer": "B"
  },
  {
    "text": "Alguém pede desculpas a você:",
    "options": {
      "A": "Aceitar e conversar",
      "B": "Continuar bravo",
      "C": "Ignorar"
    },
    "answer": "A"
  },
  {
    "text": "Você termina uma atividade:",
    "options": {
      "A": "Guardar os materiais",
      "B": "Deixar tudo espalhado",
      "C": "Esperar outro arrumar"
    },
    "answer": "A"
  },
  {
    "text": "Seu amigo está com medo:",
    "options": {
      "A": "Zombar dele",
      "B": "Dar apoio e coragem",
      "C": "Ir embora"
    },
    "answer": "B"
  },
  {
    "text": "Você percebe que falou algo rude:",
    "options": {
      "A": "Fingir que nada aconteceu",
      "B": "Pedir desculpas",
      "C": "Repetir"
    },
    "answer": "B"
  },
  {
    "text": "Na hora do lanche:",
    "options": {
      "A": "Comer sem dividir",
      "B": "Compartilhar se alguém precisar",
      "C": "Esconder"
    },
    "answer": "B"
  },
  {
    "text": "Seu colega esqueceu a tarefa:",
    "options": {
      "A": "Rir dele",
      "B": "Incentivá-lo a lembrar da próxima vez",
      "C": "Contar para todos"
    },
    "answer": "B"
  },
  {
    "text": "Você está brincando e perde:",
    "options": {
      "A": "Fazer birra",
      "B": "Aceitar com tranquilidade",
      "C": "Culpar os outros"
    },
    "answer": "B"
  },
  {
    "text": "Alguém elogia você:",
    "options": {
      "A": "Agradecer com humildade",
      "B": "Se achar melhor que todos",
      "C": "Debochar"
    },
    "answer": "A"
  },
  {
    "text": "O que é um pequeno bem?",
    "options": {
      "A": "Uma atitude boa feita todos os dias",
      "B": "Algo comprado na loja",
      "C": "Um brinquedo novo"
    },
    "answer": "A"
  },
  {
    "text": "Onde plantamos os pequenos bens?",
    "options": {
      "A": "No jardim de casa",
      "B": "No coração e na consciência",
      "C": "No quintal da escola"
    },
    "answer": "B"
  }
];

const QUESTIONS_PER_ROUND = 10;

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

let roundQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

function shuffleQuestions(questions) {
  const shuffled = [...questions];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function showScreen(screen) {
  startScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  finalScreen.classList.add("hidden");
  screen.classList.remove("hidden");
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  roundQuestions = shuffleQuestions(allQuestions).slice(0, Math.min(QUESTIONS_PER_ROUND, allQuestions.length));
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const question = roundQuestions[currentIndex];
  const progress = ((currentIndex + 1) / roundQuestions.length) * 100;

  progressLabel.textContent = `Pergunta ${currentIndex + 1} de ${roundQuestions.length}`;
  scoreLabel.textContent = `${score} ?`;
  progressFill.style.width = `${progress}%`;
  questionText.textContent = `?? ${question.text}`;
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
  const question = roundQuestions[currentIndex];
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
    scoreLabel.textContent = `${score} ?`;
    feedback.textContent = "Muito bem! Voc? semeou um pequeno bem! ???";
    feedback.classList.add("good");
  } else {
    feedback.textContent = `Quase! Vamos aprender juntos. A resposta era: ${question.options[question.answer]} ??`;
    feedback.classList.add("try");
  }

  nextButton.classList.remove("hidden");
}

function nextQuestion() {
  currentIndex += 1;

  if (currentIndex >= roundQuestions.length) {
    finalScore.textContent = `Voc? fez ${score} de ${roundQuestions.length} pontos!`;
    showScreen(finalScreen);
    return;
  }

  renderQuestion();
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
