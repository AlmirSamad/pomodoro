const FOCUS_TIME = 25;
const SHORT_BREAK_TIME = 5;
const LONG_BREAK_TIME = 15;

const context = {
  1: FOCUS_TIME,
  2: SHORT_BREAK_TIME,
  3: LONG_BREAK_TIME,
};

const timerDisplay = document.querySelector('.timer-card__time');
const timerForm = document.querySelector('.timer-card__form');
const timerButtonIcon = document.querySelector('timer-card__form .icon');

function formatTimer(seconds) {
  const data = new Date(seconds * 60 * 1000);

  return data.toLocaleTimeString('pt-Br', {
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
  });
}

export function resetTimer(mode) {
  const seconds = context[mode];
  timerDisplay.textContent = formatTimer(seconds);
}
