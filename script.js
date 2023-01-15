// popup section
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

// form input
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const checkBoxLabel = document.querySelector('#readOrNot');
const mark = document.querySelector('#mark');
const errTitle = document.querySelector('#err-title');
const errAuthor = document.querySelector('#err-author');
const errPages = document.querySelector('#err-pages');

title.addEventListener('input', () => {
    if (title.value === '') {
        errTitle.textContent = "Please type in your title of the book."
    } else {
        errTitle.textContent = '';
    }
}) 

author.addEventListener('input', () => {
    if (author.value === '') {
        errAuthor.textContent = "Please type in Author name of the book."
    } else {
        errAuthor.textContent = '';
    }
}) 

pages.addEventListener('input', () => {

    if (pages.value === '') {
        errPages.textContent = "Please type in number of pages in the book."
    } else {
        errPages.textContent = '';
    }
}) 

mark.addEventListener('change', () => {
    if (mark.checked) {
        checkBoxLabel.textContent = 'I read this book'
    } else {
        checkBoxLabel.textContent = 'Not read the book'
    }
})