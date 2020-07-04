import BookService from './services/BookService'
const bookService = new BookService()
import { format } from 'timeago.js';

class interfaz{
    async renderBooks(){
        const books = await bookService.getBooks()
        const booksCardContainer = document.getElementById('books-cards')
        booksCardContainer.innerHTML = ''
        books.forEach(book => {
            const div = document.createElement('div')
            div.className = ''
            div.innerHTML = `
                <div class="card m-2">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="http://localhost:3000${book._imagePath}" class="img-fluid" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-block px-2">
                                <h4>
                                  ${book._title}  
                                </h4>
                                <p>
                                    ${book._author}
                                </p>
                                <a href="#" class="btn btn-danger delete" _id="${book._id}">
                                Delete</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                      ${format(book._createdAt)}
                    </div>
                </div>
            `

            booksCardContainer.appendChild(div)
        })       
    }

    async addNewBook(book){
        await bookService.postBook(book)
        this.clearBookForm()
        this.renderBooks()
    }

    clearBookForm(){
        document.getElementById('book-form').reset()
    }

    renderMessage(message, colorMessage, secondsToRemove){
        const div = document.createElement('div')
        div.className = `alert alert-${colorMessage} message`
        div.appendChild(document.createTextNode(message))

        const container = document.getElementById('first-div')
        const bookForm = document.querySelector('#book-form')

        container.insertBefore(div, bookForm)
        setTimeout(() =>{
            document.querySelector('.message').remove()
        }, secondsToRemove)
    }

    async deleteBook(bookID){
        await bookService.deleteBook(bookID)
        this.renderBooks()
    }
}

export default interfaz