var object = [
    { "name": "City One", "country": "Country A", "population": 500000 },
    { "name": "City Two", "country": "Country B", "population": 2000000 },
    { "name": "City Three", "country": "Country C", "population": 3000000 }
]



for (let x = 0; x < object.length; x++) {
    if (object[x].population > 1000000) {
        console.log(object[x].name)
    }

}