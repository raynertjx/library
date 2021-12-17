const submitBtn = document.getElementById("submitbutton");
const myForm = document.getElementById("myForm");
const bookTitle = document.getElementById("booktitle");
const bookAuthor = document.getElementById("bookauthor");
const bookPages = document.getElementById("bookpages");
const checkBox = document.getElementById("checkbox");
const table = document.getElementById("table");
const tableBody = document.getElementById("tablebody");

function Book(title, author, pages, readstatus) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readstatus = readstatus
}

let myLibrary = [];

myLibrary[0] = new Book ("1984", "George Orwell", "326", "Read");
myLibrary[1] = new Book ("Fahrenheit 451", "Ray Bradbury", "256", "Read");

displayBooks();

function addBookToLibrary() {
  if (checkBox.checked == true) {
    checkBox.value = "Read"
  } 
  else {
    checkBox.value = "Not Read"
  }
  myLibrary.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value, checkBox.value));
}

function deleteBook(o) {
  var p = o.parentNode.parentNode;
  p.parentNode.removeChild(p);
}

function resetTable() {
  $("#table tbody tr").remove();
}

function displayBooks() {
  myLibrary.forEach(function (book) {
    var row = tableBody.insertRow();
  
    indexOfRow = row.rowIndex;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    
    cell1.innerHTML = book.title
    cell2.innerHTML = book.author
    cell3.innerHTML = book.pages
    cell4.innerHTML = '<button id="readbookbutton"></button>'
    var readBookBtn = document.querySelectorAll("#readbookbutton");
    readBookBtn.forEach(button => {
      button.innerHTML = book.readstatus
    })
    cell5.innerHTML = '<button id="deletebookbutton" onclick="deleteBook(this)">D</button>'
  })
}



submitBtn.addEventListener("click", () => {
  resetTable();
  addBookToLibrary();
  displayBooks();
});
