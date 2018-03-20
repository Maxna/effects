$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").toggle();
    $("#initially-showing").toggle();
  });
  $(".clickable2").click(function() {
    $("#initially-hidden2").toggle();
    $("#initially-showing2").toggle();
  });
  $(".clickable3").click(function() {
    $("#initially-hidden3").toggle();
    $("#initially-showing3").toggle();
  });
});
