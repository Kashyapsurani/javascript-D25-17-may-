var object = [
    { "title": "Course One", "instructor": "Instructor A", "duration": 8 },
    { "title": "Course Two", "instructor": "Instructor B", "duration": 12 },
    { "title": "Course Three", "instructor": "Instructor C", "duration": 15 }
]



for (let x = 0; x < object.length; x++) {
    if (object[x].duration > 10) {
        console.log(object[x].title)
    }

}