let myLibrary = [];
const addbtn = document.querySelector("#addbtn")
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const modal = document.querySelector("#modal")
const close = document.querySelector("#close")
const bookdisplay = document.querySelector("#bookdisplay")


function Book(title, author, pages, read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

  // bring up a form 
function showModal(){
  modal.style.display = "flex"
}

function closeModal(){
  modal.style.display = "none"
}

function addBookToLibrary() {
  // and query inputs then put inputs into new Book object then put into array
  let title = document.querySelector("#title").value
  let author = document.querySelector("#author").value
  let pages = document.querySelector("#pages").value
  let read = document.querySelector("#read").value
  let newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook) 
  console.log(myLibrary)
}

function displaySavedBooks(){
  // remove the old bookdisplay so we don't append to something we want to delete
  while(bookdisplay.firstChild){
    bookdisplay.removeChild(bookdisplay.firstChild);
  }
   // show our savedbooks and bookdisplay elements
  bookdisplay.style.display = "flex"
  bookdisplay.style.marginTop = "5%"
  bookdisplay.style.padding = "1%"

  // display our myLibrary array
  let content = document.createElement("div")
  content.classList.add("card")
  let titlespan = document.createElement("span")
  let authorspan = document.createElement("span")
  let pagesspan = document.createElement("span")
  let readspan = document.createElement("span")
  titlespan.style.display = "block"
  authorspan.style.display = "block"
  pagesspan.style.display = "block"
  readspan.style.display = "block"

  //! some shit is breaking right now and we're only getting one card at a time
  //! card content is last object in array.
  for(let i = 0; i < myLibrary.length; i++){
    // grab each object property and add it to a span element then append to content div
    let title = myLibrary[i].title  
    let author = myLibrary[i].author
    let pages = myLibrary[i].pages
    let read = myLibrary[i].read 

    titlespan.textContent = "Title: " + title 
    authorspan.textContent = "Author: " + author
    pagesspan.textContent = "Pages: " + pages
    readspan.textContent = "Read: " + read

    content.append(titlespan, authorspan, pagesspan, readspan)

    bookdisplay.append(content)
  }

}

addbtn.addEventListener("click", addBookToLibrary)
button1.addEventListener("click", showModal)
close.addEventListener("click", closeModal)
button2.addEventListener("click", displaySavedBooks)

