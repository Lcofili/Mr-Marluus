//console.dir(document)

//let a = document.getElementById("sometext")

//a.innerHTML = "c#"

//document.getElementById("moretext").innerHTML = "this is a paragraph"

//let array = [
//    "Luckey",
  //  "Romanus",
   // "Sammy",
    //"Stella",
//]

//let userInput = prompt("What Time is it?")
//let x = array.indexOf(userInput) > -1 ? true : false
//let output = document.getElementById("sometext")

//output.innerHTML = x ? "welcome" : "denied"
//output.innerHTML += " " + userInput
//let y = true

//if (x) {
  //  output.innerHTML = "Welcome" 
//} else {
//    output.innerHTML = "Denied"
//}

//user.innerHTML = array.indexOf(userInput) > -1 ? true : false
///let userInput = prompt("Name please")
//let user =document.getElementById("sometext")
///array.indexOf(userInput) > -1? document.write(`welcome ${userInput}`) : document.write(`${userInput} not found`)
///user.innerHTML = array.indexOf(userInput) > -1 ? alert(welcome) : alert(denied)


if (userInput >= 0 && userInput <= 5) {
   output.innerHTML = "Happy New Day"
} else if (userInput >= 6 && userInput <= 11) {
   output.innerHTML = "Good Morning"
} else if (userInput >= 12 && userInput <= 16) {
   output.innerHTML = "Good Afternoon"
} else if (userInput >= 17 && userInput <= 21) {
   output.innerHTML = "Good Evening"
} else if (userInput >= 22 && userInput <= 24) {
 output.innerHTML = "Time To Sleep"
} else{
   output.innerHTML = "Invalid Time"
}
