function createTitle(string) {
  return `The ${string}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {name, age, pronouns};
}

function saveReview(details, reviews) {
  if (!reviews.includes(details)) {
  return reviews.push(details);
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(title, mainCharacter, genre) {
  return {
          title,
          mainCharacter,
          pageCount: calculatePageCount(title),
          genre
        };
}

function editBook(bookTitle) {
  return bookTitle.pageCount = bookTitle.pageCount * 3 / 4;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}