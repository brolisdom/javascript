require('./styles/app.css')
// import BookService from  './services/BookService'
import interfaz from './interfaz'

document.addEventListener('DOMContentLoaded', () =>{
    const ui = new interfaz()
    ui.renderBooks()
})

document.getElementById('book-form').addEventListener('submit', e =>{
    e.preventDefault()

    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value
    const image = document.getElementById('image').files

    const formData = new FormData()
    formData.append('title',title)
    formData.append('author', author)
    formData.append('isbn', isbn)
    formData.append('image', image[0])

    // const bookService = new BookService()
    // bookService.postBook(formData)
    const ui = new interfaz()
    ui.addNewBook(formData)
    ui.renderMessage('New Book Added', 'success', 3000)
    
    console.log(title, author, isbn, image);
})

document.getElementById('books-cards').addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        const ui = new interfaz()
        ui.deleteBook(e.target.getAttribute('_id'))
        ui.renderMessage('Book Deleted', 'danger', 3000)
    }
    e.preventDefault()
})