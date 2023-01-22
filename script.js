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
        checkBoxLabel.textContent = 'Not read this book'
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
        closePopup(document.querySelector('#form-popup'));
    }
    console.log(myLibrary);
})

// Library Add
let myLibrary = [];

class book {
    constructor(title, author, pages, mark) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.mark = mark;
    }
}

function addBookToLibrary(title, author, pages, mark) {
    let newBook = new book(title, author, pages, mark);
    myLibrary.push(newBook);
    let cardSection = document.querySelector('.card-section');
    for(const [key, value] of Object.entries(newBook)){
        let objDiv = document.createElement('div');
        if (key === 'mark'){
            let checkbox = document.createElement('input');
            let checkRead = document.createElement('p');
            checkbox.type = 'checkbox';
            checkbox.id = 'toggleCheck';
            if (value === true) checkbox.setAttribute('checked', 'checked');
            checkRead.id = 'toggleRead';
            checkRead.textContent = value ? "I have read this book!" : "Not read this book!";
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    checkRead.textContent = "I have read this book!";
                    newBook.mark = true;
                } else {
                    checkRead.textContent = "Not read this book!";
                    newBook.mark = false;
                }
            })
            cardSection.appendChild(checkRead)
            cardSection.appendChild(checkbox)
        } else {
            objDiv.textContent = `${key}: ${value}`;
        }
        cardSection.appendChild(objDiv);
    }
}