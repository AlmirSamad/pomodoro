const FOCUS_TIME = 25 * 60;
const SHORT_BREAK_TIME = 5;
const LONG_BREAK_TIME = 15 * 60;

const context = {
  1: FOCUS_TIME,
  2: SHORT_BREAK_TIME,
  3: LONG_BREAK_TIME,
};

const timerDisplay = document.querySelector('.timer-card__time');
const timerForm = document.querySelector('.timer-card__form');
const timerButtonIcon = document.querySelector('.timer-card__form .icon');
const timerButton = timerForm.querySelector('.button');

let currentMode = 1;
let remainingSeconds = FOCUS_TIME;
let intervalId;
const audio = new Audio('sounds/ta-da.mp3');

function startTimer() {
  intervalId = setInterval(() => {
    remainingSeconds--;
    timerDisplay.textContent = formatTimer(remainingSeconds);

    if (remainingSeconds < 0) {
      pauseTimer();
      resetTimer(currentMode);
      audio.play();
    }
  }, 1000);

  timerButtonIcon.classList.replace('icon--play', 'icon--pause');
  timerButton.lastChild.textContent = 'Pausar';
}

function pauseTimer() {
  clearInterval(intervalId);
  intervalId = null;
  timerButtonIcon.classList.replace('icon--pause', 'icon--play');
  timerButton.lastChild.textContent = 'Continuar';
}

timerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const isRunning = timerButtonIcon.classList.contains('icon--pause');

  if (intervalId) {
    pauseTimer();
  } else {
    startTimer();
  }
});

function formatTimer(seconds) {
  const data = new Date(seconds * 1000);

  return data.toLocaleTimeString('pt-Br', {
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
  });
}

export function resetTimer(mode) {
  currentMode = mode;
  if (intervalId) {
    pauseTimer();
  }
  remainingSeconds = context[mode];
  timerDisplay.textContent = formatTimer(remainingSeconds);
}
