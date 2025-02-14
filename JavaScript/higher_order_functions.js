const booksData = [
    {
        "bookId": 101,
        "title": "JavaScript: The Good Parts",
        "author": {
            "name": "Douglas Crockford",
            "birthDate": "1947-12-15",
            "nationality": "American"
        },
        "publisher": {
            "name": "O'Reilly Media",
            "yearFounded": 1980,
            "location": "USA"
        },
        "genres": ["Programming", "Web Development", "JavaScript"],
        "reviews": [
            {
                "user": "Alice",
                "rating": 5,
                "comment": "A must-read for every JavaScript developer!",
                "date": "2021-05-10"
            },
            {
                "user": "Bob",
                "rating": 4,
                "comment": "Great book but could include more examples.",
                "date": "2021-06-15"
            }
        ],
        "price": {
            "currency": "USD",
            "amount": 30.99
        },
        "available": true,
        "languages": ["English", "Spanish"],
        "tags": ["beginner", "web dev"]
    },
    {
        "bookId": 102,
        "title": "The Pragmatic Programmer",
        "author": {
            "name": "Andrew Hunt",
            "birthDate": "1960-12-21",
            "nationality": "American"
        },
        "publisher": {
            "name": "Addison-Wesley",
            "yearFounded": 1942,
            "location": "USA"
        },
        "genres": ["Programming", "Software Development", "Tech"],
        "reviews": [
            {
                "user": "Charlie",
                "rating": 5,
                "comment": "One of the best books on software engineering.",
                "date": "2020-07-11"
            },
            {
                "user": "Dave",
                "rating": 4,
                "comment": "Useful but a bit dated in some concepts.",
                "date": "2022-01-22"
            }
        ],
        "price": {
            "currency": "USD",
            "amount": 39.99
        },
        "available": false,
        "languages": ["English"],
        "tags": ["advanced", "software engineering"]
    },
    {
        "bookId": 103,
        "title": "Clean Code",
        "author": {
            "name": "Robert C. Martin",
            "birthDate": "1952-12-05",
            "nationality": "American"
        },
        "publisher": {
            "name": "Prentice Hall",
            "yearFounded": 1913,
            "location": "USA"
        },
        "genres": ["Programming", "Software Engineering", "Best Practices"],
        "reviews": [
            {
                "user": "Eve",
                "rating": 5,
                "comment": "Transformative book on writing clean code.",
                "date": "2023-01-02"
            },
            {
                "user": "Frank",
                "rating": 4,
                "comment": "Extremely valuable, but challenging for beginners.",
                "date": "2023-01-10"
            }
        ],
        "price": {
            "currency": "USD",
            "amount": 45.50
        },
        "available": true,
        "languages": ["English", "French", "German"],
        "tags": ["advanced", "best practices"]
    }
]


//1. Find all available books
const books = booksData.filter(availableBooks => availableBooks.available === true).map(book => ({bookId : book.bookId, available: book.available}));
console.log(books);


//2. Get average rating for book
const averageRating = booksData.map(book => ({
    bookId: book.bookId,
    avgRating: book.reviews.length > 0 
        ? book.reviews.reduce((sum, review) => sum + review.rating, 0) / book.reviews.length
        : 0 
}));
console.log("Books with Average Ratings:", averageRating);

    
//6.Books with price less than a certain amount
const getBooksBelowPrice = booksData.filter(priceLimit => priceLimit.price.amount < 40).map(book => ({title:book.title , price: book.price}));
console.log(getBooksBelowPrice);


//8.Find the most popular book
const getMostPopularBook = booksData.map(book => ({
    bookId: book.bookId, title: book.title,
    avgRating: book.reviews.length > 0 
        ? book.reviews.reduce((sum, review) => sum + review.rating, 0) / book.reviews.length
        : 0 
}));
console.log("Most popular books based on Average Ratings:", getMostPopularBook);


//9.Get books in multiple languages
const languages = ["English", "Spanish"];
let booksInLanguages = booksData.filter (book => book.languages.some(languages => languages.includes(languages)))
.map(book => ({bookId: book.bookId, languages: book.languages,}));
console.log(booksInLanguages);


//10. Find the most expensive book.
const mostExpensiveBook = booksData.reduce((max, book) => book.price.amount > max.price.amount ? book : max, booksData[0]);
console.log("Most Expensive Book:", mostExpensiveBook);


//11. Sort books by rating
const sortBooksByRating = booksData
    .map(book => ({
    bookId: book.bookId, price: book.price.amount,
    avgRating: book.reviews.length > 0 
        ? book.reviews.reduce((sum, review) => sum + review.rating, 0) / book.reviews.length
        :0    
}))
.sort((a, b) => b.avgRating - a.avgRating); 
console.log("Books sorted by rating:", sortBooksByRating);

//3. Books by a secific author
const getBooksByAuthor = (authorName) =>
    booksData.filter(book => book.author.name === authorName);

const author = prompt("Enter author name:");
const result = getBooksByAuthor(author);

if (result.length > 0) {
    alert(`Books by ${author}: \n` + result.map(book => book.title).join("\n"));
} else {
    alert("No books found.");
} 


//4. Books published by specific publisher
const getBooksByPublisher = (publisherName) =>
    booksData.filter(book => book.publisher.name === publisherName);

const publisher = prompt("Enter publisher name:");
const output = getBooksByPublisher(publisher);

if (output.length > 0) {
    alert(`Books by ${publisher}: \n` + output.map(book => book.title).join("\n"));
} else {
    alert("No books found.");
}


//5. Filter books by genre
const filterBooksByGenre = (genre) =>
    booksData.filter(book => book.genres.some(g => g === genre));

const genre = prompt("Enter genre:").trim();
const solution = filterBooksByGenre(genre);

if (output.length > 0) {
    alert(`Books by ${genre}: \n` + solution.map(book => `${book.title}`).join("\n"));
} else {
    alert("No books found.");
} 
