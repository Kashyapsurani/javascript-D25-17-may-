var object = [
    { "title": "Movie One", "director": "Director A", "rating": 6.5 },
    { "title": "Movie Two", "director": "Director B", "rating": 7.8 },
    { "title": "Movie Three", "director": "Director C", "rating": 8.2 }
]



for (let x = 0; x < object.length; x++) {
    if (object[x].rating > 7) {
        console.log(object[x].title)
    }

}