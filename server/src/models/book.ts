interface Book {
  id: number;
  title: string;
  chapters: number;
  pages: number;
  authors: string;
}

class Book {
  constructor({ id, title, chapters, pages, authors }: Book) {
    this.id = id;
    this.title = title;
    this.chapters = chapters;
    this.pages = pages;
    this.authors = authors;
  }
}

module.exports = Book;