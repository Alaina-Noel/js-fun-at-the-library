function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(book);
  }
}

function unshelfBook(bookTitle, shelf) {
  const hasSameTitle = (element) => element.title === bookTitle;
  indexOfBook = shelf.findIndex(hasSameTitle);
  shelf.splice(indexOfBook, 1);
  return shelf;
}

function listTitles(shelf) {
  return shelf.map(book => book.title).join(', ');
}

function searchShelf(shelf, bookTitle) {
  const hasSameTitle = (element) => element.title === bookTitle;
  indexOfBook = shelf.findIndex(hasSameTitle);
  return indexOfBook >= 0;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};