interface Author {
  id: number
  name: string
}

class Author {
  constructor({ id, name }: Author) {
    this.id = id
    this.name = name
  }
}

module.exports = Author