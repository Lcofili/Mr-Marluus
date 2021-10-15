/// window function
// console.log(window)

const person = {
  name: "Luckey",
  age: 20,
  "street no": 30,
  marks: {
    javascript: 20,
    reactjs: 30,
    python: 15,
  },
  health: {
    height: 200,
    color: "black",
  },
  disabled: "none",

  greet: function () {
    return `my name is ${person.name}, i scored ${person.marks["javascript"]}`;
  },
};

// console.log("height" in person.health);
console.log("health" in person);

for (const key in person) console.log(key);

// let newKey = (person.width = 200);

// (person.marks.reactNative = 150), delete person.health.height;

// console.log(person.disabled);
// console.log(person.marks.javascript);
// console.log(person["marks"]["javascript"]);

// console.log(person.greet());

const Book1 = {
  title: "Together For Life",
  author: "Luckey",
  year: "2021",

  getSummary: function (title, author, year) {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
  },
};

const Book2 = {
  title: "Make That Choice",
  author: "Roman",
  year: "2022",

  getSummary: function () {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
  },
};

// console.log(Book1.getSummary());
// console.log(Book2.getSummary());

/// CLASS OBJECT

// class Books {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getSummary() {
//     return `${title} was written by ${author} in the year ${year}`;
//   }
// }
// const Book3 = new Books("Together For Life", "Luckey", "2021");
// const Book4 = new Books("Try Some More", "Roman", "2020");

// console.log(Book1.getSummary());
// console.log(Book4);

// const student = {
//   title: "python",
//   courses: ["intro to javascript", "loop in python", "machine learning"],

//   MyFunct: function () {
//     return `${this.title} and ${this.courses[2]}`;
//   },
// };

// // console.log(student.MyFunct()),

// console.log(console);

class Users {
  constructor(userName, Email, Password) {
    (this.userName = userName),
      (this.Email = Email),
      (this.Password = Password);
  }

  myFunct() {
    return `${this.userName} ${this.Email} ${this.Password}`;
  }
}

const FirstUser = new Users("Luckey", "Luckey@gmail.com", "luckey123");
const FirstUser1 = new Users("Romanus", "Romanus@gmail.com", "Romanus123");
const FirstUser2 = new Users("Stella", "Stella@gmail.com", "Stella123");

console.log(FirstUser);
console.log(FirstUser1);
console.log(FirstUser2);

let shoppingList = [
  "milo",
  "peak",
  "biscuit",
  "nutri-c",
  "indomie",
  "chocolate",
];

let newItems = ["goodmama", "hypo"];

shoppingList.reverse().push("goodmama", "hypo");
console.log(shoppingList);

// ANOTHER METHOD
let lastItem = shoppingList[shoppingList.length - 1];

shoppingList.pop();
console.log(shoppingList);

shoppingList.unshift(lastItem);
console.log(shoppingList);

shoppingList.push("goodmama", "hypo");
console.log(shoppingList);

const conversing = {
  adding: function (a, b) {
    return a + b;
  },
  temperature: function (celcius) {
    return celcius * 1.8 + 32 + "fahrenheit";
  },

  fahrenheightconvert: function (fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9 + "";
  },
};

console.log(conversing.adding(10, 20));

console.log(conversing.temperature(30));

console.log(conversing.fahrenheightconvert(30));

