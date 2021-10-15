var arr = [
    { "name":"luis", age: 18 }, 
    {"name": "martin", age: 17}, 
    {"name": "miles", age: 20}, 
    {"name": "elon", age: 19},
];

//console.log(arr)

// arr[0] = "esther"
// c/onsole.log(arr)
// //console.log(arr.pop())
// //console.log(arr.push("paul"))
// //console.log(arr)

// //console.log(arr.sort)

// //console.log(arr.reverse)

//console.log(arr.splice(0, 2))

let numRandom = Math.floor(Math.random() * arr.length)
let valueArr = arr[numRandom -1]
//onsole.log(valueArr)

let userInput = Number(prompt("whats the position of " + valueArr))

let answer = (userInput === numRandom) ? "True" : "False"

alert(answer)


let car = {
    color: "blue",
    type: "honda",
    doors: 4
}
//To add color
car.color = "white"
car["color"] = "black"
console.log(car)

let person = {
    "firstname": "Luckey",
    "secondname": "Ofili",
    "age": 20,
    "complexion": "fair",
    "skills": ["javascript", "react.js", "node.js"],
    "fullname": function () {
        return this.firstname + " " + this.secondname
    }
}

console.log(person.fullname())
alert(person.fullname())

//To assign a skill
person.skills[1] = "html"
console.log(person.skills[1])


let person1 = {
    "obj1": person,
    "obj2": {
        "name": "peace",
        "age": 20,
        "hair": "brown",
    }
}

console.log(person1.obj1.skills[2])
