var object = [
    { "name": "Restaurant One", "cuisine": "Italian", "rating": 3.5 },
    { "name": "Restaurant Two", "cuisine": "Chinese", "rating": 4.2 },
    { "name": "Restaurant Three", "cuisine": "Mexican", "rating": 4.8 }
]

for (var x = 0; x < object.length; x++) {
    if (object[x].rating > 4) {
        console.log(object[x].name)
    }
}