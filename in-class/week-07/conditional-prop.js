let book = {
  "main-title": "JavaScript",
  "sub-title": "The Definitive Guide",
  author: {
    firstname: "David",
    surname: undefined
  }
};

let length_surname;

// length_surname = book.author.surname.length;
// console.log(length_surname);

// 1) first solution
// if (book) {
//   if (book.author) {
//     if (book.author.surname) {
//       length_surname = book.author.surname.length;
//     }
//   }
// }
// console.log(length_surname);

// 2) short-circuit
// length_surname = book && book.author 
//   && book.author.surname && book.author.surname.length;
// console.log(length_surname); 

// 3) conditional property
length_surname = book?.author?.surname?.length;
console.log(length_surname);