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
const myForm = document.querySelector('#my-form');

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

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const titleValue = document.querySelector('[data-title]').value;
    const authorValue = document.querySelector('[data-author]').value;
    const pagesValue = document.querySelector('[data-pages]').value;
    const checkboxValue = document.querySelector('[data-checkbox]').checked;

    if (titleValue !== '' && authorValue !== '' && !isNaN(pagesValue)) {
        addBookToLibrary(titleValue, authorValue, pagesValue, checkboxValue)
    }
    console.log(myLibrary);
})

// Library Add
let myLibrary = [];

function book(title, author, pages, mark) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.mark = mark;
}

function addBookToLibrary(title, author, pages, mark) {
    let newBook = new book(title, author, pages, mark)
    myLibrary.push(newBook);
}