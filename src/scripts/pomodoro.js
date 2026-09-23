import { resetTimer } from './timer';

const tabs = document.querySelectorAll('.timer-card__tab');

const page = document.querySelector('.page');

const modeImage = document.querySelector('.banner img');

const bannerTitleText = document.querySelector('.banner__title--text');
const bannerTitleHighlight = document.querySelector(
  '.banner__title--highlight',
);

const contexto = {
  1: {
    title: 'Frase genérica',
    highlight: 'que nós sabemos que ngm vai ligar',
  },
  2: {
    title: 'Não estudou nada,',
    highlight: 'mas faz a pausa do tiktok. Seu viciado',
  },
  3: {
    title: 'TIKTOK TIMEEEE!!!!',
    highlight: 'Faz ai a merda da sua pausa',
  },
};

let mode = 1;

tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    console.log('elemento clicado', event.currentTarget);

    mode = event.currentTarget.dataset.mode;
    page.dataset.mode = mode;
    console.log('novo modo', mode);

    tabs.forEach((tab) => {
      tab.disabled = false;
      tab.classList.remove('timer-card__tab--active');
      tab.setAttribute('aria-selected', false);
    });

    const imageModeSrc = `/mode-${mode}.png`;
    const modeContext = contexto[mode];

    bannerTitleText.textContent = modeContext.title;
    bannerTitleHighlight.textContent = modeContext.highlight;

    modeImage.setAttribute('src', imageModeSrc);

    resetTimer(mode);

    event.currentTarget.disabled = true;
    event.currentTarget.classList.add('timer-card__tab--active');
    event.currentTarget.setAttribute('aria-selected', true);
  });
});
