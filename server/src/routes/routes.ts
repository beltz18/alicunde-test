const Express = require('express')
const BookC   = require('../models/book')
const AuthorC = require('../models/author')
const router  = Express.Router()
const books:   any = []
const authors: any = []

// Registrar un nuevo libro
router.post('/books', (req: any, res: any) => {
  const { id, title, chapters, pages, authors } = req.body
  const book = new BookC({ id, title, chapters, pages, authors })
  books.push(book)
  res.status(201).json(book)
})

// Obtener todos los libros
router.get('/books', (req: any, res: any) => {
  res.json(books)
})

// Crear un autor
router.post('/authors', (req: any, res: any) => {
  const { id, name } = req.body
  const author = new AuthorC({ id, name })
  authors.push(author)
  res.status(201).json(author)
})

// Obtener todos los autores
router.get('/authors', (req: any, res: any) => {
  res.json(authors)
})

// Obtener Promedio de Páginas por Capítulo
router.get('/books/:id/average', (req: any, res: any) => {
  const bookId = req.params.id
  const book = books.find((book: any) => book.id === bookId)
  if (book) {
    const average = book.pages / book.chapters
    res.json({
      id: book.id,
      average: average.toFixed(2),
    })
  } else {
    res.status(404).json({ error: 'Libro no encontrado' })
  }
})

module.exports = router