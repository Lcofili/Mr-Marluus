/// FUNCTION INSIDE A FUNCTION
let y = document.getElementById("user");

// const OutsideFunction = () => {
//   let b = 2000;
//   let c = 3000;
//   const insideFunction = () => {
//     b++;
//     c++;
//     return b;
//   };

//   console.log(insideFunction());
//   const anotherFunction = () => {
//     b++;
//     return b;
//   };
//   console.log(anotherFunction());
//   const newFunction = () => {
//     c++;
//     return c;
//   };
//   console.log(c);
// };

// OutsideFunction();

// let num1 = document.getElementById("input");

// let shoppingList = [];

// const AddItem = () => {
//   let adding = num1.value;
//   shoppingList.push(adding);

//   localStorage.setItem("shoppingList", shoppingList);

//   const outputList = () => {
//     let dataValue = "";
//     for (let i = 0; i < shoppingList.length; i++) {
//       dataValue += i + 1 + "." + shoppingList[i] + "<br>";
//     }
//     y.innerHTML = dataValue;
//   };
//   outputList();
// };

// let car = {
//   name: "honda",
//   color: "blue",
// };
// for (let prop in window) {
//   document.write(window[prop] + "<br>");
// }
// y.innerHTML = window.innerWidth;
// y.innerHTML = window.innerHeight;

// const peeMachine = () => {
//   window.location.reload();
// };

// // let y = document.getElementById("user");

// const SubmitData = () => {
//   let first = document.getElementById("firstname").value;
//   console.log(first);
//   let second = document.getElementById("secondname").value;
//   console.log(second);
//   // let email = document.getElementById("email").value;
//   // let password = document.getElementById("password").value;
//   // let confrimPassword = document.getElementById("confirm password").value;
//   if (first === "") {
//     y.innerHTML = "First name is required";
//   } else {
//     y.innerHTML = `Welcome ${firstname}`;
//   }
//   // console.log(firstName);
// };

// let y = document.getElementById("user");

// const SubmitData = () => {
//   let num1 = document.getElementById("firstname").value;
//   let num2 = document.getElementById("secondname").value;
//   let num3 = document.getElementById("email").value;
//   let num4 = document.getElementById("password").value;
//   let num5 = document.getElementById("confirm password").value;

//   if (num1 === "") {
//     output.innerHTML = "Firstname is required";
//     return false;
//   }

//   if (num2 === "") {
//     output.innerHTML = "secondname is required";
//     return false;
//   }

//   if (num3 === "") {
//     output.innerHTML = "Enter your email";
//     return false;
//   }

//   if (num4 === "") {
//     output.innerHTML = "Enter your password";
//     return false;
//   }

//   if (num5 !== num4) {
//     output.innerHTML = "password doesnt match";
//     return false;
//   } else {
//     output.innerHTML = `Welcome ${firstName}`;
//     return true;
//   }
//   // console.log(firstName);
// };

let output = document.getElementById("carousel");

let ImageCount = 0;

let images = [
  "image/cartoon 4.jpeg",
  "image/cartoon 5.jpeg",
  "image/cartoon 6.jpeg",
  "image/cartoon 11.jpeg",
  "image/cartoon 10.png",
];
let imageColor = ["111", "222", "00FF00", "333", "0000FF"];

let swapImage = () => {
  ImageCount++;
  if (ImageCount >= images.length) {
    ImageCount = 0;
  }

  output.src = images[ImageCount];
};

const IntervalTime = () => {
  setInterval(swapImage, 2000);
};
IntervalTime();
