let books = [
    {
        title: "Adventure of Tom Sawyer",
        author: "Mark Twain",
        year: 1990
    },
    {
        title: "Agni Veena",
        author: "Kazi Nasrul Islam",
        year: 1992
    },
    {
        title: "Animal Farm",
        author: "George Orwell",
        year: 1994
    },
    {
        title: "Baburnama",
        author: "Babar",
        year: 1554
    }
]

function bookTitle (titles) {
    titles.sort ()
    console.log(titles.join (", "));
}

function extractTitle (books, callback) {
    let titles = books.map ((book) => book.title)
    callback (titles)
}

extractTitle (books, bookTitle)