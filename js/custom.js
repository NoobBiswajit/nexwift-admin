const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("dashboard_left");

toggle.onclick = function () {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("active");
};
// ==============
$(document).ready(function () {
  $("#toggle").click(function () {
    $(".h_link").toggle();
  });
});
$(document).ready(function () {
  $("#toggle").click(function () {
    $(".show_arrow").toggle();
  });
});