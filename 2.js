var object = [
    { "name": "John", "position": "Manager", "salary": 65000 },
    { "name": "Alice", "position": "Developer", "salary": 55000 },
    { "name": "Bob", "position": "Designer", "salary": 70000 }
]



for (let x = 0; x < object.length; x++) {
    if (object[x].salary > 60000) {
        console.log(object[x].name)
    }

}