const booksElem = document.querySelectorAll('.book');
console.log(booksElem)
const correctOrderBooks = document.querySelector('.books');
correctOrderBooks.append(booksElem[1], booksElem[0], booksElem[4], booksElem[3], booksElem[5], booksElem[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'

const correctTitle = booksElem[4].querySelectorAll('a')
correctTitle[0].innerHTML = 'Книга 3. this и Прототипы Объектов'

const adv = document.querySelectorAll('.adv')
adv[0].remove()
// console.log(adv)

const secondChaptersList = booksElem[0].querySelector('ul')
// console.log(secondChaptersList)
const secondChaptersElements = secondChaptersList.querySelectorAll('li')
// console.log(secondChaptersElements)
secondChaptersList.append(secondChaptersElements[0], secondChaptersElements[1], secondChaptersElements[3], secondChaptersElements[6], secondChaptersElements[8], secondChaptersElements[4], secondChaptersElements[5], secondChaptersElements[7], secondChaptersElements[9], secondChaptersElements[2], secondChaptersElements[10])

const fifthChaptersList = booksElem[5].querySelector('ul')
// console.log(fifthChaptersList)
const fifthChaptersElements = fifthChaptersList.querySelectorAll('li')
// console.log(fifthChaptersElements)
fifthChaptersList.append(fifthChaptersElements[0], fifthChaptersElements[1], fifthChaptersElements[9],fifthChaptersElements[3], fifthChaptersElements[4], fifthChaptersElements[2], fifthChaptersElements[6], fifthChaptersElements[7], fifthChaptersElements[5], fifthChaptersElements[8], fifthChaptersElements[10],);

const sixChaptersList = booksElem[2].querySelector('ul')
// console.log(sixChaptersList)
const sixChaptersElements = sixChaptersList.querySelectorAll('li');
const chEightSixBook = sixChaptersElements[8].cloneNode(true);
chEightSixBook.textContent = "Глава 8: За пределами ES6";
sixChaptersElements[8].insertAdjacentElement('afterend', chEightSixBook)
// console.log(sixChaptersList.querySelectorAll('li'))



