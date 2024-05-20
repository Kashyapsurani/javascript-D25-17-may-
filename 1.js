var object = [
    { "title": "Book One", "author": "Author One", "year": 1999 },
    { "title": "Book Two", "author": "Author Two", "year": 2005 },
    { "title": "Book Three", "author": "Author Three", "year": 2010 }
]



for (let x = 0; x < object.length; x++) {
    if (object[x].year > 2000) {
        console.log(object[x].title)
    }

}