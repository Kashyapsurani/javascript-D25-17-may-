var object = [
    { "name": "Laptop", "category": "Electronics", "price": 1000 },
    { "name": "Shirt", "category": "Clothing", "price": 50 },
    { "name": "Phone", "category": "Electronics", "price": 700 }
]



for (let x = 0; x < object.length; x++) {
    if (object[x].category == "Electronics") {
        console.log(object[x].name)
    }

}