var object = [
    { "brand": "Toyota", "model": "Corolla", "year": 2014 },
    { "brand": "Honda", "model": "Civic", "year": 2016 },
    { "brand": "Ford", "model": "Fusion", "year": 2018 }
]



for (let x = 0; x < object.length; x++) {
    if (object[x].year > 2015) {
        console.log(object[x].brand)
    }

}