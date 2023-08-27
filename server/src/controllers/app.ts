const express   = require('express')
const parser    = require('body-parser')
const BookMod   = require('../models/book')
const AuthorMod = require('../models/author');
const Routes    = require('../routes/routes')
const server    = express()

const middlewares = () => {
  server.use(parser.json(), parser.urlencoded({ extended: true }))
  server.use(Routes())
}

const app = () => {
  middlewares()
  return server
}

module.exports = app