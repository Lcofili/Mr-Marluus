let [firstvalue, secondvalue] = [3, "john", "edwin"];

console.log(firstvalue);
console.log(secondvalue);

let motorCar = {
  color: "red",
  wheel: 4,
  doors: 4,
  allColors: {
    firstcolor: "white",
    secondcolor: "pink",
  },
};
console.log(motorCar.color);
console.log(motorCar.wheel);
console.log(motorCar.allColors.firstcolor);

let {
  color,
  doors,
  allColors: { firstcolor },
} = motorCar;
console.log(color);
console.log(firstcolor);

let allNums = [2, 4, 6, 8, 9, 0, 7];

let codeName = [
  {
    name: "goodluck",
    score: 50,
  },
  {
    name: "stella",
    score: 12,
  },
  {
    name: "luckey",
    score: 70,
  },
  {
    name: "judith",
    score: 30,
  },
];

let newScore = codeName.filter((item) => {
  return item.name === "stella";
});
console.log(newScore);

// let FilterNums = allNums.filter((item) => {
//   return item % 2 !== 0;
// });
// console.log(filterNums);

// let allReduce = allNums.reduce((x, y) => {
//   return x + y;
// }, 7);
// console.log(allReduce);

// allNums.map((item, index) => {
//   console.log(item * 2);
// });

// for (let x = 0; x < allNums.length; x++) {
//   console.log(allNums[x] * 2);
// }


function tryReduce (a, b, c, d, e) {
  let newvalues = Array.from(arguments)

  let man = newvalues.filter(item) =>{
    // return man
    return item % 2 === 0
  }
  let new = newvalues.filter(x, y) =>{
    return x + y
  }
  return newvalues
}
console.log(tryReduce (9, 6, 3, 9, 2))

const newRead = (...args) =>{
  let jjj = args.filter((item) =>{
    return item % 2 === 0
  })
  return jjj
}
console.log(newRead(4,"name","john" 4,6,9,5,4,12,7,5,0,8,4,45))