const modalOpen = document.querySelectorAll('.show-modal');
const overlayDiv = document.querySelector('.overlay');
const modalWindow = document.querySelector('.modal-window');
const closebtn = document.querySelector('.closebtn');

const openModal = function () {
  overlayDiv.classList.remove('hidden');
  modalWindow.classList.remove('hidden');
};

const closeModal = function () {
  overlayDiv.classList.add('hidden');
  modalWindow.classList.add('hidden');
};
for (let i = 0; i < modalOpen.length; i++) {
  modalOpen[i].addEventListener('click', function () {
    openModal();
  });
}

closebtn.addEventListener('click', function () {
  closeModal();
});

overlayDiv.addEventListener('click', function () {
  closeModal();
});

document.addEventListener('keydown', function (keyBoard) {
  if (keyBoard.key === 'Escape') {
    closeModal();
  }
});
