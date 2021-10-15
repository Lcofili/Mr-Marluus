//  let array = [{"name":"Luckey", age: 17}, ]

//  let numRandom = Math.floor(Math.random(0))
//  let valueArr = array.map[{}]
//  let userInput = (prompt("Enter Your Name " + valueArr))

//  let answer = (userInput === numRandom) ? "Welcome" : "Denied"

//  alert(answer)

// if (userInput = "name"  && userInput = age) {
//     output.innerHTML = "Happy New Day"
//  } else if (userInput >= 6 && userInput <= 11) {
//     output.innerHTML = "Good Morning"
//  } else if (userInput >= 12 && userInput <= 16) {
//     output.innerHTML = "Good Afternoon"
//  } else if (userInput >= 17 && userInput <= 21) {
//     output.innerHTML = "Good Evening"
//  } else if (userInput >= 22 && userInput <= 24) {
//   output.innerHTML = "Time To Sleep"
//  } else{
//     output.innerHTML = "Invalid Time"
//  }

// let Array = ["Luckey", "Romanus", "Sammy", "Stella", "Esther"];
// let userInput = prompt("What is your Name?");
// let output = document.getElementById("sometext");

// if (Array.indexOf(userInput) > -1) {
//   alert("Welcome " + userInput);
//   let age = Number(prompt("Enter your age"));
//   if (age > 17) {
//     output.innerHTML = "Welcome " + userInput + " " + "Access Granted";
//   } else {
//     alert("Access Denied");
//   }
// } else {
//   alert("Denied");
// }

// let Array = prompt("What is your Name?");
// let output = document.getElementById("sometext");

// let html = "";

// switch (Array) {
//   case "Luckey":
//     html += "Hello World";
//     //console.log("I am Happy");
//     //alert("I am Happy");
//     break;
//   case "Romanus":
//     html += "How Are You";
//     //console.log("Awesome");
//     //alert(" Welcome Home");
//     break;
//   case "Sammy":
//     html += "You Try";
//     //console.log("Thank You");
//     //alert("Thank You");
//     break;
//   default:
//     //console.log("Really Great");
//     html += "Hello";
// }
// output.innerHTML = html;

//  Using Loop

// let x = 1;

// do {
// console.log("Hello World");
// x++;
// } while (x < 10);

// DOT MAP //

// let allNumber = [2, 5, 6, 7, 83, 3] let a = allNumber.map((item, i) =>{ return
// })
// let a = allNumber.map((item, i) => `${item * 2}`);
// console.log(a);
// console.log(a)

// var input = 7;
// var output1 = ++input + ++input + ++input;
// var output2 = input++ + input++ + input++;
// var output3 = input++ + ++input + input++;
// console.log(output1 + " " + output2 + " " + output3);

//LOOP
// THREE THINGS TO CONSIDER
//1) INITIALIZATION
//2) INCREMENT
//3) CONDITIONS

// let x = 0;
// let d = document.getElementById("sometext");
// to pick user input number from user
// let user = prompt("put in your loop number");

// do {
//   x++;
// to get the even number from user
// if (x % 2 === 0) {
//   d.innerHTML += "the value of x =" + x + "<br>";
// }
// d.innerHTML = "i love coding";
// to get the loop arranged
// d.innerHTML += "I love coding" + "<br>";

// d.innerHTML += "the value of x =" + x + "<br>";
//   console.log(x);
// } while (x < 20);
//  while (x < user)

// let y = document.getElementById("user");

// for (let a = 0; a <= 10; ++a) {
//   console.log(a);
//   y.innerHTML += "the value of a = " + a + "<br>";
// }

// let z = document.getElementsByClassName("element");

// for (let b = 0; b < z.length; b++) {
//   z[b].style.color = "green";
//   z[b].style.background = "yellow";
//   z[b].style.height = "100vh";
//   z[b].style.width = "100%";
//   z[b].style.font = "30px";
// }

// for (let w = 0; w < 10; w++) {
//   if (w === 3) {
//     continue;
//   }
//   console.log(w);
// }

// let sales = document.getElementById("sales");

// for (let sales = 150; sales < 150; sales++) {
//   console.log(sales);
// }

// ON WEDNESDAYS, 11 AUGUST 2021 CLASS
// let sales = [
//   {
//     name: "romanus",
//     amount: 40,
//     refund: null,
//   },
//   {
//     name: "blessing",
//     amount: 100,
//     refund: null,
//   },
//   {
//     name: "gideon",
//     amount: 150,
//     refund: yes,
//   },
// ];

// solution

// for (let a = 0; a < sales.length; a++) {
//   let TotalSales = sales[a];

//for guys who refubnd
//   if (TotalSales.refund) {
//     console.log(TotalSales);
//   }
// }
// for guys who didnt refund
// if(!TotalSales.refund)

/// ON FRIDAY 13 AUGUST CLASS

// let y = document.getElementById("user");

// let ask = prompt("How many banana do you want to eat?");
// let calories = 30;
// let total = 0;

// for (let i = 1; i <= ask; i++) {
//   total += calories;
//   if (i > 1) {
//     y.innerHTML += `you ate ${i} bananas and it contains ${
//       calories * i
//     } calories <br> `;
//   } else {
//     y.innerHTML += `you ate ${i} banana and it contains ${
//       calories * i
//     } calories <br> `;
//   }
// }
// y.innerHTML += `total calories = ${total}`;

// let y = document.getElementById("user");

// let i = 0;

/// to get even number
// while(i< 10) {
// console.log(i);
// i++
// y.innerHTML = i;
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

/// to get odd number

// while (i <= 10) {
//   if (!(i % 2 == 0)) {
//     console.log(i)
//   }
//   i++;
// }

/// Another method to get odd number
// if (i % 2 == 0) {
//   console.log(i);
// }
// i++;
// }

// let y = document.getElementById("user");

// const MyFunction = (a, b, c) => {
//   let d = a + b + c;
//   console.log(d);
// };
// y.innerHTML = MyFunction(3, 4, 5);

// const MyFunction = (a, b, c) => {
//   let d = a + b + c;
//   let w = a + b;
//   console.log(w);
//   return w;
// };
// y.innerHTML = MyFunction(3, 4, 5);

// userName = "Luckey";
// passsword = "Luckey123";

// const MyFunction = () => {
//   let user = prompt("Enter your Username");
//   let pass = prompt("Enter your password");

//   if (userName !== user || passsword !== pass) {
//     alert("You have entered a wrong Input");
//   } else {
//     y.innerHTML += alert("Successful");
//     ("welcome to the homescreen"); alert("Successful");
//   }
// };

let y = document.getElementById("user");

// let num1 = document.getElementById("firstInput");
// let num2 = document.getElementById("secondInput");

// const Cal = () => {
//   let a = Number(num1.value);
//   let b = Number(num2.value);
//   let c = a + b;
//   y.innerHTML = `${a} + ${b} = ${c}`;
// };

// let num1 = document.getElementById("firstInput");
// let num2 = document.getElementById("secondInput");

// const Cal = () => {
//   let a = Number(num1.value);
//   let b = Number(num2.value);
//   let c = a - b;
//   y.innerHTML = `${a} - ${b} = ${c}`;
// };

// let num1 = document.getElementById("firstInput");
// let num2 = document.getElementById("secondInput");

// const Cal = () => {
//   let a = Number(num1.value);
//   let b = Number(num2.value);
//   let c = a * b;
//   y.innerHTML = `${a} * ${b} = ${c}`;
// };

// let num1 = document.getElementById("firstInput");
// let num2 = document.getElementById("secondInput");

// const Cal = () => {
//   let a = Number(num1.value);
//   let b = Number(num2.value);
//   let c = a / b;
//   y.innerHTML = `${a} / ${b} = ${c}`;
// };

// let num1 = document.getElementById("firstInput");
// let num2 = document.getElementById("secondInput");

// const Cal = () => {
//   let a = Number(num1.value);
//   let b = Number(num2.value);
//   let c = a / b;
//   y.innerHTML = `${a} / ${b} = ${c}`;
// };

// const funct = (1, 2, 3, 4) => {
//   let c = Number(num1.value);
//   let d = Number(num2.value);
//   let e = c + d;
//   y.innerHTML = `${c} + ${d} = ${e}`;
// };

const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
  }
});

const key = e.target;
const action = key.dataset.action;
if (!action) {
  console.log("number key!");
}

if (
  action === "add" ||
  action === "subtract" ||
  action === "multiply" ||
  action === "divide"
) {
  console.log("operator key!");
}

if (action === "decimal") {
  console.log("decimal key!");
}

if (action === "clear") {
  console.log("clear key!");
}

if (action === "calculate") {
  console.log("equal key!");
}
