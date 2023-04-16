import { CLASSES, DOM } from './constants.js';

function openModal(modal) {
  if (!modal) return;

  DOM.body.classList.add(CLASSES.scrollHidden);
  modal.classList.add(CLASSES.active);
}

function closeModal(modal) {
  if (!modal) return;

  modal.classList.remove(CLASSES.active);
  DOM.body.classList.remove(CLASSES.scrollHidden);

  const video = modal.querySelector('[data-video]');

  if (video) {
    video.setAttribute('src', '');
  }
}

function setVideo(src, modal) {
  const video = modal.querySelector('[data-video]');

  if (!video) return;

  video.setAttribute('src', src);
}

export function controlModal() {
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-modal-close]');
  const modals = document.querySelectorAll(`.${CLASSES.modal}`);

  openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.getElementById(button.dataset.modalTarget);
      const src = button.dataset.videoSrc;

      if (src) {
        setVideo(src, modal);
      }

      openModal(modal);
    });
  });

  modals.forEach((modal) => {
    const wrapper = modal.querySelector('[data-modal-wrapper]');

    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target === wrapper) {
        closeModal(modal);
      }
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest(`.${CLASSES.modal}`);
      closeModal(modal);
    });
  });
}
