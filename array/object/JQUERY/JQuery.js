// $("#element").click(() => {
//   $("div").css("background", "red");
//   $("div").css("height", "100vh");
//   $("div").css("width", "100%");
//   $("div").css("display", "flex");
//   $("div").css("justify-content", "center");
//   $("div").css("align-items", "center");
// });

// $("#element").click(() => {
//   $("div").hide();
// });

// $("#element").click(() => {
//   $("#output").hide();
// });

// $("#show").click(() => {
//   $("#output").show();
// });

// let htmlTag = $("#output").text();
// console.log(htmlTag);

// $("#change").click(() => {
//   $("#changeimage").attr("src", "cartoon 11.jpeg");

//   // $("#change").hide();
// });

// let;

// $("#inputbutton").click(() => {
//   let content_value = $("#inputVal").val();
//   console.log(content_value);
// });

// $("#inputbutton").hide();

// $("#inputVal").keyup(() => {
//   $("#inputVal").val() === ""
//     ? $("#inputbutton").hide()
//     : $("#inputbutton").show();

//   $("#inputbutton").click(() => {
//     let content_value = $("#inputVal").val();
//     console.log(content_value);
//   });
// });

// $("#selection").change(() => {
/// to get one selected option from your selection
//   let selectedItems = $("#selection option").val();
//   /// to get all the option in the selection
//   let selectedItems = $("#selection option:selected").val();

// yield.innerHTML = selectedItems;

//   console.log(selectedItems);
// });

// $("input[name = 'gender']").change(() => {
//   let radioInput = $("input[name = 'gender']:checked").val();

//   console.log(radioInput);
// });

// $("#togglebutton").click(() => {
//   $("#toggletext").toggle();
// });

// $("#togglebutton").click(() => {
//   $("#toggletext").toggle("flip");
// });

///to hide and show text using Jquery
// $("#effects").click(() => {
//   $("#effects").hide(2000).show(3000);
// });

// $("#changing").click(() => {
//   $("#box").animate(
//     {
//       width: "=100px",
//       height: "=100px",
//       marginLeft: "300px",
//       backgroundColor: "green",
//     },
//     3000,
//     () => {
//       $("#box").hide(4000).show(2000);
//       $("#toggletext").hide(4000).show(1000);
//     }
//   );
// });


let $("#Next").click(() => {
  let currentImage = $(".active");
  let nextImage = currentImage.next();

  if(currentImage.length){
    currentImage.removClass("active")..css("z-index", -10);
    currentImage.addClass("active").css("z-index", 10)
  }
})