const bookTitle = document.querySelector('.bookTitle')
const bookAuthor = document.querySelector('.bookAuthor')
const bookPages = document.querySelector('.bookPages')
const saveBook = document.querySelector('.saveBook')
const checkBox = document.querySelector('.checkBox')
const cardContainer = document.querySelector('.bookDisplay')

let library = []

let libraryStr

let read = 'Not read'

checkBox.addEventListener('click', function(e){
    checkBox.classList.toggle('checkBoxClicked')
    if (checkBox.classList.contains('checkBoxClicked')){
        read = 'Read'
        console.log(read)
    } else if (!checkBox.classList.contains('checkBoxClicked')){
        read = 'Not read'
        console.log(read)
    }
})

function bookCard(title, author, pages, read) {
    this.title = title.value
    this.author = author.value
    this.pages = pages.value
    this.read = read
}

function createBook() {
    let book = new bookCard(bookTitle, bookAuthor, bookPages, read)
    library.push(book)

    let div = document.createElement('div')
    div.classList.add('card')
    cardContainer.appendChild(div) 
    
    let h1 = document.createElement('h1')
    h1.textContent = book.title
    h1.classList.add('cardTextTitle') 
    div.appendChild(h1)
    
    let br1 = document.createElement('br') 
    div.appendChild(br1)
    
    let h2 = document.createElement('h2')
    h2.textContent = book.author
    h2.classList.add('cardTextAuthor') 
    div.appendChild(h2)
    
    let br2 = document.createElement('br') 
    div.appendChild(br2)
    
    let h3 = document.createElement('h3')
    h3.textContent = book.pages
    h3.classList.add('cardTextPages') 
    div.appendChild(h3)
    
    let br3 = document.createElement('br') 
    div.appendChild(br3)
    
    let readCheck = document.createElement('div')
    readCheck.classList.add('readCheck')
    div.appendChild(readCheck)
    
    let checkText = document.createElement('p')
    checkText.setAttribute('dir', 'rtl')
    checkText.textContent = read
    checkText.classList.add('checkText')
    readCheck.appendChild(checkText)
}

saveBook.addEventListener('click', function(e){
    createBook()
    let libraryStr =  JSON.stringify(library)
    localStorage.setItem("books", JSON.stringify(libraryStr))
    bookTitle.value = ''
    bookAuthor.value = ''
    bookPages.value = ''
})




