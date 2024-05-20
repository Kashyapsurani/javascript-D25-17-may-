var object = [
    { "name": "John", "age": 20, "grade": "A" },
    { "name": "Alice", "age": 22, "grade": "B" },
    { "name": "Bob", "age": 21, "grade": "A" }
]



for (let x = 0; x < object.length; x++) {
    if (object[x].grade ==  "A") {
        console.log(object[x].name)
    }

}