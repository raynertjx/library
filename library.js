const addBookBtn = document.getElementById("addbookbutton");
const submitBtn = document.getElementById("submitbutton");
const myForm = document.getElementById("myForm");
const bookTitle = document.getElementById("booktitle");
const bookAuthor = document.getElementById("bookauthor");
const bookPages = document.getElementById("bookpages");
const table = document.getElementById("table");
const tableBody = document.getElementById("tablebody");

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  }

function addBookToLibrary() {
  myLibrary.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value));
}

function resetTable() {
  $("#table tbody tr").remove();
}

function displayBooks() {
  myLibrary.forEach(function (book) {
    var row = tablebody.insertRow();
  
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
  
    cell1.innerHTML = book.title;
    cell2.innerHTML = book.author;
    cell3.innerHTML = book.pages;
  })
}

submitBtn.addEventListener("click", () => {
  resetTable();
  addBookToLibrary();
  displayBooks();
  console.log(myLibrary);
});
