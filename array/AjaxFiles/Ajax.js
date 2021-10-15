// let xhtt = new XMLHttpRequest();

// xhtt.onreadystatechange = () => {
//   if (xhtt.readyState === 4 && xhtt.status === 200) {
//     console.log(xhtt.readyState);
//     let respond = JSON.parse(xhtt.responseText);
//     console.log(respond);
//     let questions = respond.results[0].questions;

//     // console.log(questions);
//     let incorrect_answers1 = respond.results[0].incorrect_answers[0];
//     let incorrect_answers2 = respond.results[0].incorrect_answers[1];
//     let correct_answer = respond.results[0].correct_answer;

//     console.log(questions);
//     console.log("A : ", incorrect_answer1);
//     console.log("B : ", incorrect_answer2);
//     console.log("this is the correct answer", correct_answer);
//   }
//   // console.log(xhtt.responseText);
// };

// xhtt.open("GET", "https://opentdb.com/api.php?amount=10");

// xhtt.send();

// let randonNumber = Math.floor(Math, randon() * 10);
// let y = document.getElementById("holdIput");
// let z = document.getElementById("correct")

// $.ajax({
//   url: "https://opentdb.com/api.php?amount=10",
//   type: "GET",
//   datatype: "json",

//   success: (data) => {
//     console.log(data);

//     $("questn").text(data.results[randonNumber].question);

//     $("#send").click(() => {
//       let holdInput = "#ans".val();
//       let correct_ans = data.result[randonNumber].correct_answer;

//       if(holdInput !== correct_ans ){
//         y.innerHTML += 'incorrect answer $(holdInput)'
//       }else{
//         z.innerHTML += 'correct'${holdInput}
//       }
//     });
//   },
//   error: () => {
//     console.log("can not get data");
//   },
// });
