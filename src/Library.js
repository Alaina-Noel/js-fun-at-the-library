function createLibrary(name) {
  return {name, shelves: {fiction: [], fantasy: [], nonFiction: []}};
}

function addBook(library, book) {
  genreKey = `${book.genre}`;
  return library.shelves[genreKey].push(book);
}

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};