$(".dropdownMenu").slideUp();
function dropDown(button, menu) {
  $(button).click(function () {
    $(menu).slideToggle();
  });
}
//When you press button/x it should by default add the dropdown menu/x to corespond to that button/x which can be achieved through contacination and a for loop
//6 is the number of rows in the table
for (var i = 1; i <= 6; i++) {
  var button = "#btndropdown" + i;
  var menu = "#menu" + i;
  dropDown(button, menu);
}
// alert(JSON.stringify($("#search")));
const searchInput = $("#search");
var searchQuery = [, ,];
var length = $(".par").length;
for (var j = 0; j < length; j++) {
  searchQuery[j] = document.querySelectorAll(".par")[j].innerText;
}
$("#searcBttn").click(function () {
  $(".par").each(function parseParagraphs() {
    const s = $(this);
    alert(s.text().includes(searchInput.value) ? s.text() : "");
  });
});

$(document).on(`click`, `.chart`, function showChartBigger() {
  const s = $(this),
    sc = s.clone();
  $(`.absolute`).addClass(`active`).empty().append(sc);
  $(`.absoluteBttn`).css({ position: "fixed", display: "block" });
  $(".main").css({ filter: "blur(20px)", "z-index": "1000" });
  $(".wave").hide();
});
$(".absoluteBttn").click(function () {
  $(`.absoluteBttn`).css({ position: "absolute", display: "none" });
  $(".main").css({ filter: "blur(0px)", "z-index": "-10" });
  $(".wave").show();
  $(".absolute").removeClass("active");
});
