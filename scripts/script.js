const bookTitle = document.querySelector('.bookTitle')
const bookAuthor = document.querySelector('.bookAuthor')
const bookPages = document.querySelector('.bookPages')
const saveBook = document.querySelector('.saveBook')
const checkBox = document.querySelector('.checkBox')
const cardContainer = document.querySelector('.bookDisplay')
const titleCheck = document.querySelector('.titleCheck')
const authorCheck = document.querySelector('.authorCheck')
const pagesCheck = document.querySelector('.pagesCheck')
checkBox.textContent = 'NO'

if (localStorage.getItem('books') === null) {
    library = [];
  } else {
    const booksFromStorage = JSON.parse(localStorage.getItem('books'));
    library = booksFromStorage;
  }

  function removeBook(){
    let toRemove = document.getElementById(`${book.id}`)
}

  window.addEventListener('load', function(e){
      library.forEach(book => {
          ++id
        let div = document.createElement('div')
        div.id = book.id
    div.classList.add('card')
    cardContainer.appendChild(div)
    
    let h1 = document.createElement('h1')
    h1.textContent = 'Title: ' + book.title
    h1.classList.add('cardTextTitle') 
    div.appendChild(h1)
    
    let br1 = document.createElement('br') 
    div.appendChild(br1)
    
    let h2 = document.createElement('h2')
    h2.textContent = 'Author: ' + book.author
    h2.classList.add('author') 
    div.appendChild(h2)
    
    let br2 = document.createElement('br') 
    div.appendChild(br2)
    
    let h3 = document.createElement('h3')
    h3.textContent = 'Pages: ' + book.pages
    h3.classList.add('cardTextPages') 
    div.appendChild(h3)
    
    let br3 = document.createElement('br') 
    div.appendChild(br3)
    
    let readButton = document.createElement('div')
    readButton.addEventListener('click', function(e){
        readButton.classList.toggle('readButtonClicked')
        if (readButton.textContent == 'Not read'){
            readButton.textContent = 'Read'
            book.read = 'Read'
            localStorage.clear()
            localStorage.setItem("books", JSON.stringify(library))
        } else if (readButton.textContent == 'Read'){
            readButton.textContent = 'Not read'
            book.read = 'Not read'
            localStorage.clear()
            localStorage.setItem("books", JSON.stringify(library))
        }
    })
    readButton.classList.add('readButton')
    readButton.textContent = book.read
    div.appendChild(readButton)
    
    let removeButton = document.createElement('div')
    //when clicked remove element from array and storage
    removeButton.addEventListener('click', function(e){
        console.log(library.indexOf(book))
        let tgt = document.getElementById(book.id)
        cardContainer.removeChild(tgt)
        library.splice(library.indexOf(book), 1)
        localStorage.clear()
        localStorage.setItem("books", JSON.stringify(library))
    })
    removeButton.classList.add('removeButton')
    removeButton.textContent = 'Remove'
    div.appendChild(removeButton)
  })
})
let libraryStr

let read = 'Not read'

checkBox.addEventListener('click', function(e){
   checkBox.classList.toggle('checkBoxClicked')
    if (checkBox.classList.contains('checkBoxClicked')){
        checkBox.textContent = 'YES'
        read = 'Read'
        console.log(read)
    } else if (!checkBox.classList.contains('checkBoxClicked')){
        checkBox.textContent = 'NO'
        read = 'Not read'
        console.log(read)
    }
})

let id = 0

function bookCard(title, author, pages, read) {
    this.title = title.value
    this.author = author.value
    this.pages = pages.value
    this.read = read
    this.id = id
}

function createBook() {
    ++id
    let book = new bookCard(bookTitle, bookAuthor, bookPages, read)
    library.push(book)

    let div = document.createElement('div')
    div.id = book.id
    div.classList.add('card')
    cardContainer.appendChild(div)
    
    let h1 = document.createElement('h1')
    h1.textContent = 'Title: ' + book.title
    h1.classList.add('cardTextTitle') 
    div.appendChild(h1)
    
    let br1 = document.createElement('br') 
    div.appendChild(br1)
    
    let h2 = document.createElement('h2')
    h2.textContent = 'Author: ' + book.author
    h2.classList.add('author') 
    div.appendChild(h2)
    
    let br2 = document.createElement('br') 
    div.appendChild(br2)
    
    let h3 = document.createElement('h3')
    h3.textContent = 'Pages: ' + book.pages
    h3.classList.add('cardTextPages') 
    div.appendChild(h3)
    
    let br3 = document.createElement('br') 
    div.appendChild(br3)
    
    let readButton = document.createElement('div')
    readButton.addEventListener('click', function(e){
        readButton.classList.toggle('readButtonClicked')
        if (readButton.textContent == 'Not read'){
            readButton.textContent = 'Read'
            book.read = 'Read'
            localStorage.clear()
            localStorage.setItem("books", JSON.stringify(library))
        } else if (readButton.textContent == 'Read'){
            readButton.textContent = 'Not read'
            book.read = 'Not read'
            localStorage.clear()
            localStorage.setItem("books", JSON.stringify(library))
        }})
    readButton.classList.add('readButton')
    readButton.textContent = read
    div.appendChild(readButton)
    
    let removeButton = document.createElement('div')
    //when clicked remove element from array and storage
    removeButton.addEventListener('click', function(e){
        let tgt = document.getElementById(book.id)
        cardContainer.removeChild(tgt)
        library.splice(library.indexOf(book), 1)
        localStorage.clear()
        localStorage.setItem("books", JSON.stringify(library))
    })
    removeButton.classList.add('removeButton')
    removeButton.textContent = 'Remove'
    div.appendChild(removeButton)
}

function checkValues(){
    let a, b, c
    if(bookTitle.value == ''){
        titleCheck.textContent = "Please fill out this field."
        a = 0
    } else if (bookTitle.value != ''){
        a = 1
        titleCheck.textContent = ''
    }
    if(bookAuthor.value == ''){
        b = 0
        authorCheck.textContent = "Please fill out this field."
    }else if (bookAuthor.value != ''){
        b = 1
        authorCheck.textContent = ''
    }
    if (bookPages.value == ''){
        c = 0
        pagesCheck.textContent = "Please fill out this field."
    } else if (bookPages.value != ''){
        c = 1
        pagesCheck.textContent = ''
    }
    let result = a + b + c
    if (result == 3) {
        return true
    } else if (result != 3){
        return false
    }
}

saveBook.addEventListener('click', function(e){
    let check = checkValues()
    if (check != true){return}
    if (check == true){
    createBook()
    localStorage.setItem("books", JSON.stringify(library))
    bookTitle.value = ''
    bookAuthor.value = ''
    bookPages.value = ''
    }
})

saveBook.addEventListener("mouseover", function(e){
    saveBook.classList.add('saveBookHover')
})

saveBook.addEventListener("mouseout", function(e){
    saveBook.classList.remove('saveBookHover')
})








