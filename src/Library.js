function createLibrary(name) {
  return {name, shelves: {fiction: [], fantasy: [], nonFiction: []}};
}

function addBook(library, book) {
  genreKey = `${book.genre}`;
  return library.shelves[genreKey].push(book);
}

function checkoutBook(library, bookTitle, bookGenre) {
  const booksWithMatchingGenre = library.shelves[bookGenre];
  const hasSameTitle = (book) => book.title === bookTitle;
  const indexOfBook = booksWithMatchingGenre.findIndex(hasSameTitle);
  if  (indexOfBook > -1) {
    booksWithMatchingGenre.splice(indexOfBook, 1);
    return `You have now checked out ${bookTitle} from the ${library.name}`
  } else {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};