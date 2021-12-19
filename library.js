const submitBtn = document.getElementById("submitbutton");
const myForm = document.getElementById("myForm");
const bookTitle = document.getElementById("booktitle");
const bookAuthor = document.getElementById("bookauthor");
const bookPages = document.getElementById("bookpages");
const readStatusMenu = document.getElementById("readstatusmenu");
const table = document.getElementById("table");
const tableBody = document.getElementById("book-table-body");

function Book(title, author, pages, readstatus) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readstatus = readstatus
  }

let myLibrary = [];

myLibrary[0] = new Book ("1984", "George Orwell", "326", "Read");
myLibrary[1] = new Book ("Fahrenheit 451", "Ray Bradbury", "256", "Read");

table.addEventListener("click", (e) => {
  const currentTarget = e.target.parentNode.parentNode.childNodes[1]
  if (e.target.classList.contains("readbookbutton")) {
    changeStatus(findBook(myLibrary, currentTarget.innerText));
  }
  if (e.target.classList.contains("deletebookbutton")) {
    deleteBook(findBook(myLibrary, currentTarget.innerText));
  }
  resetTable();
  displayBooks()
})

function changeStatus(book) {
  if (myLibrary[book].readstatus === "Read") {
    myLibrary[book].readstatus = "Not Read";
  } else {
    myLibrary[book].readstatus = "Read";
  }
}

function deleteBook(book) {
  myLibrary.splice(book, book + 1);
}

function findBook(libraryArray, name) {
  if (libraryArray.length === 0 || libraryArray === null) {
    return;
  }
  for (var book of libraryArray) {
    if (book.title === name) {
      return libraryArray.indexOf(book)
    }
  }
}

function addBookToLibrary() {
  myLibrary.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value, readStatusMenu.value));
}


function resetTable() {
  $("#book-table-body tr").remove();
}

function displayBooks() {
  myLibrary.forEach(function (book) {
    
    const htmlBook = `
    <tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td><button class="readbookbutton">${book.readstatus}</button></td>
    <td><button class="deletebookbutton">D</button></td>
    </tr>
    `;
    tableBody.insertAdjacentHTML("afterbegin", htmlBook);
  })
}
displayBooks();

submitBtn.addEventListener("click", () => {
  for (var book of myLibrary) {
    if (book.title === bookTitle.value) {
      alert("Book already exists in library!");
      return;
    }
  }
  resetTable();
  addBookToLibrary();
  displayBooks();
});
