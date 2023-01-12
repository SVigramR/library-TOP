const openFormButton = document.querySelectorAll('[data-modal-target]');
const closeFormButton = document.querySelectorAll('[data-close-button]');
const popupBackground = document.getElementById('popup-background');

openFormButton.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.modalTarget)
        openPopup(popup)
    })
});

closeFormButton.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.form-popup')
        closePopup(popup)
    })
});

popupBackground.addEventListener('click', () => {
    const modals = document.querySelectorAll('.form-popup.active')
    modals.forEach(modal => {
      closePopup(modal)
    })
})

function openPopup(popup) {
    if (popup == null) return;
    popup.classList.add('active');
    popupBackground.classList.add('active');
}

function closePopup(popup) {
    if (popup == null) return;
    popup.classList.remove('active');
    popupBackground.classList.remove('active');
}