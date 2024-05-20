var object = [
    { "name": "Library One", "location": "Location A", "books": 3000 },
    { "name": "Library Two", "location": "Location B", "books": 7000 },
    { "name": "Library Three", "location": "Location C", "books": 9000 }
]

for (var x = 0; x < object.length; x++) {
    if (object[x].books > 5000) {
        console.log(object[x].name)
    }
}