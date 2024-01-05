const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: false,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

const list = {
  title: 'My Main Title',
  subtitle: 'My Sub Title',
  list: [
    'list Item 1',
    'list Item 2'
  ]
};

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//const [...newList] = list.list;
//newList

//const newList = {...list.list}
//newList
//#Destructuring

//const book = getBook(3);
//console.log(book);
//const title = book.title;
//const author = book.author;

//const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = book;

//console.log("cl " + author, title, genres);

//const primaryGenres = genres[0];
//const secondaryGenres = genres[1];

//const [primaryGenres,secondaryGenres,...otherGenres] = genres;
//console.log(primaryGenres, secondaryGenres, otherGenres);

//const newGenres = ['epic fantasy', ...genres];
//console.log(newGenres)

//#... SPREAD operator adds new object to new object array variable"updatedBook".
//#over write existing values by adding key and new value. example "pages: 100".
//const updatedBook = { ...book, moviePublicationDate: '2001-12-19', pages: 100};
//updatedBook
//book


//#ES5 Longer function Decleration:
// function getYearD(str){
//   return str.split("-")[0];
// }
//console.log(getYearD(publicationDate));


//#Arrow functions Expression:
//const getYearX = (str)=> str.split('-')[0];
//console.log(getYearX(publicationDate));



//#Template litterals by using back ticks ` ` and placing javascript inside ${ } block.
//const summary = `${title}, a ${pages} pages long book, was written by ${author} and published in ${getYearX(publicationDate)}. The book has ${hasMovieAdaptation ? '':'not'} been adapted as a movie.`;
//summary;

//#turniry statement
//pages
//const pagesRange = pages > 1000 ? 'over a Thousand' : 'under a Thousand';
//console.log(`The book "${title}" has ${pagesRange} pages.`);

//#AND operator '&&' short circuit
//console.log(true && "some string");
//#Below is short circuiting, when returns first value without going to the next
//console.log(false && "some string");
//console.log(hasMovieAdaptation && 'This book has a movie');
//#falsy values are: 0, '', null, undefined
//console.log(0 && 'some string');
//#truthy values are: 
//console.log('jonas' && 'some string');

//#OR operator '||' short circuit
//console.log(true || 'some text');
//console.log(false || 'some text');

//console.log(book.translations.spanish);
//const spanishTranslation = book.translations.spanish || 'not translated'
//spanishTranslation

//console.log(book.reviews.librarything.reviewsCount);

//# Nullish coalescing operator '??' short circuit
//# will return false if its 'null' or 'undefined'
//const count = book.reviews.librarything.reviewsCount ?? 'no data';
//count;

//#Optional chaining new to ES6
//# utilize '?' to see if object key exists by placing a '?' after key in question
//# utilize Nullish coalescing operator '??' to see if null or undefined exist
//# if it does exist the place a value of '0'.
// function getTotalReviewCount(book){
//   const goodReads = book.reviews.goodreads?.reviewsCount ?? 0;
//   const libraryThings = book.reviews.librarything?.reviewsCount ?? 0;
//   return goodReads + libraryThings;
// }
// console.log(getTotalReviewCount(book));
//////////////////////////////////////////////////////////////////////
//# ARRAY MAP METHOD -> MAP, FILTER, REDUCE
//# returns new array
//////////////////////////////////////////////////////////////////////
//# MAP method
//# MAP returns new array of original array with operation applied to each element of original array
//const x = [1,2,3,4,5].map(el=> el * 2);
//console.log(x);
// const books = getBooks();
// const bookTitles = books.map(b=> b.title);
// console.log(bookTitles);
//#Declaration
// const essentialData = books.map(b=>{
//   return{
//     author: b.author,
//     title: b.title,
//   };
// });

//# slimmed version
// const essentialData = books.map((b)=>({
//   author: b.author,
//   title: b.title,
//   reviewsCount: getTotalReviewCount(b),
// }));
// essentialData

//////////////////////////////////////////////////
//# Filter method, chain filter
//# Returns a condition if 'true' or 'false'
//# books.filter will return new books array, if pages are greater than 500.
const books = getBooks();
//const longBooks = books.filter((b)=> b.pages > 500 && b.hasMovieAdaptation);
//longBooks
// const longBooks = books
//   .filter((b)=> b.pages > 500)
//   .filter((b)=> b.hasMovieAdaptation);

//# Filter only Adventure Books, using method above.
// const adventureBooks = books
// .filter((b)=> b.genres.includes("adventure"))
// .map((b)=> b.title);
// adventureBooks
/////////////////////////////////////////////////////////

//# Reduce method practise examples
//# reduce mentod is the most powerfull of all array methods
//# most important it performes mathimatical computations like adding two numbers together.
//# stash is the variable that will sum all the book tages calculation.
//# book is the object we are reducing.
//# function calculates the book.pages plush the sum variable value
//# function 0 means its sum initial value/ starting point value.
// const pagesAllBooks = books.reduce((sum, book)=> sum + book.pages, 0);
// pagesAllBooks
////////////////////////////////////////////////////////

//# Sort array method Mutates/Changes the Original Array
//const sortMe = [4,3,56,6,7,8];
//# sort in an accending direction
//const a_sort = sortMe.sort((a,b)=> a-b);
//a_sort

//# sort in an decending direction
//const d_sort = sortMe.sort((a,b)=> b -a);
//d_sort

//# sort a new Array by chaining a SLICE method to the existing array.
//const a_myNewSort = sortMe.slice().sort((a,b)=> a - b);
//a_myNewSort
//sortMe

//sort object 'book' pages.
//const d_bookPageSort = books.slice().sort((a,b)=> a.pages - b.pages);
//d_bookPageSort

//# 1) add book object to array
const newBook = {
  id:6,
  title: "Harry Potter adn the chamber of secrets",
  author: "J. K. Rowling",
};
//# Merge new object array to existing object array into new object array variable.
//# use SPREAD operator to add new object array to the end of the list.
const booksAfterAdd = [...books, newBook];
//booksAfterAdd

//# 2) delete book object from array
//# use filter method to remove object from array
const booksAfterDelete = booksAfterAdd.filter((b)=> b.id !== 3);
//booksAfterDelete

//# 3 update a book object in the array
//# use map method to update book object from array
//# here it SPREADS the book object and add property 'pages:' with value of '1'.
const booksAfterUpdate = booksAfterDelete.map((b)=> b.id === 1 ? {...b, pages: 1210} : b);
booksAfterUpdate
