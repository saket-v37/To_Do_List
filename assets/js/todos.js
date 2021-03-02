// //Check Off Specific ToDo By Checking
// $("li").click(function () {
//   // if li is gray
//   if ($(this).css("color") === "rgb(128, 128, 128)") {
//     $(this).css({
//       // turn it black
//       color: "black",
//       textDecoration: "none",
//     });
//   }
//   //   else
//   else {
//     //   turn it gray
//     $(this).css({
//       color: "gray",
//       textDecoration: "line-through",
//     });
//   }
// });

//Check Off Specific ToDo By Checking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Click On X to Delete li
$("ul").on("click", "span", function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  e.stopPropogation();
});
// adding new todo from input to ul
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //   grabbing new todo text from input
    var todoItem = $(this).val();
    $(this).val("");
    // Create anew li and add to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + todoItem + "</li>"
    );
  }
});
$(".fa-plus-square").click(function () {
  $("input[type='text']").fadeToggle();
});
