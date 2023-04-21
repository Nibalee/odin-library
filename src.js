//Functionalities
let myLibrary = [];


class Book {
    constructor ( name,author,pages,isRead){
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

function displayBooks(){
    myLibrary.forEach( (book)=> {
        createBookCard(book);
    });
}

function createBookCard(book){

    //creation of elements of each book
    const bookCard = document.createElement('div');
    const removeBtn = document.createElement('i');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const btnGrp = document.createElement('div');
    const btnColor = document.createElement('div');
    const readBtn = document.createElement('button');
    const notReadBtn = document.createElement('button');

    //adding classes
    removeBtn.classList.add('fa-solid' , 'fa-x','remove-book-btn');
    removeBtn.style = 'color: #146c94;';
    bookCard.classList.add('book-card');
    btnColor.classList.add('btn-color');
    btnGrp.classList.add('read-toggle-container');
    if(!book.isRead){
        btnColor.classList.add('read');
    }


    title.textContent =`${book.name}`;
    author.textContent =`${book.author}`;
    pages.textContent = `${book.pages} pages`;
    readBtn.textContent = 'Read';
    notReadBtn.textContent = 'Not Read';

    bookCard.appendChild(removeBtn);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    btnGrp.appendChild(btnColor);
    btnGrp.appendChild(readBtn);
    btnGrp.appendChild(notReadBtn);
    bookCard.appendChild(btnGrp);
    bookContainer.appendChild(bookCard);

    //Event Listner on the read toggle btn
    readToggleReadBtn(btnGrp);


    
    removeBtn.addEventListener('click', () => {
        removeBook(book);
    });
}

function getBookInput(){
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('box').checked;

    return new Book(name, author, pages, isRead);
}

function submitBook(e){
    e.preventDefault();
    const newBook = getBookInput();

    if(myLibrary.some((book)=> book.name === newBook.name)){
        //You have to make an error msg
    }
    else{
        addBookToLibrary(newBook);
        resetBookGrid();
        displayBooks();
        form.reset();
    }

    closeModal(e);
}

function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book);
}

function resetBookGrid(){
    bookContainer.innerHTML = '';
}

function removeBook(book){
    if(!myLibrary.includes(book)){
        return;
    }
    else{
        myLibrary.splice(myLibrary.indexOf(book),1);
        resetBookGrid();
        displayBooks();
    }
}



//UI
const  addBtn = document.getElementById("add-btn");
const inputWindow = document.querySelector('.input-window');
const form = document.querySelector('.form');
const closeBtn = document.querySelector('#close-btn');
const submitBtn = document.querySelector('.submit-btn');
const bookContainer = document.querySelector('.book-container');
const readToggleContainers = document.querySelectorAll('.read-toggle-container');
const bookCards= document.querySelectorAll('.book-card');

/*bookCards.forEach((bookCard)=>{
    const removeBtn =  bookCard.querySelector(".remove-book-btn");
    removeBtn.onclick = (bookCard)=>removeBook(bookCard);
});
*/



function openModal(){
    inputWindow.style.display= 'flex';
    inputWindow.classList.add('active');
}

function closeModalWindow(event){
    if(event.target === inputWindow){
        inputWindow.style.display = 'none';
        inputWindow.classList.remove('active');
    }
}

function closeModal(){
    inputWindow.style.display = 'none';
    inputWindow.classList.remove('active');
}

closeBtn.onclick = (e)=> closeModal(e);





function readToggleReadBtn(container){
    container.addEventListener('click',()=>{
        const btnColor = container.querySelector('.btn-color');
        btnColor.classList.toggle('read');
    });
}

inputWindow.onclick = (e)=> closeModalWindow(e);
form.onsubmit = (e)=> submitBook(e);
addBtn.onclick = ()=> openModal();


//VALIDATING ALL THE INPUT FIELDS ARE CORRECT THEN SUBMIT
//Add modify functionality
//Add remove functionality for the book card
//set up Read toggle button 








