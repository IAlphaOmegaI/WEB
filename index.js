//DROPDOWN-------------------------------------------------------------------------------------------------
// $(".dropdownMenu").hide();
$(`form.d-flex`).on(`submit`, function returnSubmitOfText(e) {
  e.preventDefault();
});
$(".dropdownMenu").slideUp(0);
function dropDown(button, menu) {
  $(button).click(function () {
    $(menu).slideToggle(500);
  });
}
//When you press button/x it should by default add the dropdown menu/x to corespond to that button/x which can be achieved through contacination and a for loop
//6 is the number of rows in the table
for (var i = 1; i <= 6; i++) {
  var button = "#btndropdown" + i;
  var menu = "#menu" + i;
  dropDown(button, menu);
}
//DROPDOWN-------------------------------------------------------------------------------------------------
//SEARCH INPUT---------------------------------------------------------------------------------------------
// alert(JSON.stringify($("#search")));
// var searchInput = $("#search");
// var searchQuery = [, ,];
// var length = $(".par").length;
// for (var j = 0; j < length; j++) {
//   searchQuery[j] = document.querySelectorAll(".par")[j].innerText;
// }
// $("#searchBttn").click(function () {
//   $(".par").each(function parseParagraphs() {
//     const s = $(this);
//     alert(s.text().includes(searchInput.value) ? s.text() : "");
//   });
// });
// $(".secondary").hide();
//SEARCH INPUT---------------------------------------------------------------------------------------------
//Ne do marrim inputin e searchit dhe do ta kontrollojme kunder tekstit qe kemi ne faqen tone
var SearchEngine = $("#search");
const searchDiv = $(".searchList");
$(SearchEngine).keyup(function () {
  var Search = SearchEngine.val().toLowerCase();
  //Inputi i userit mund te jete i crregullt kur vjen tek Case-i i shkronjave, kjo hap probleme sepse search engine jone eshte case sensetive.
  // var startWithUpperCase =
  //   Search.slice(0, 1).toUpperCase() + Search.slice(1).toLowerCase();
  // var textCase = [
  //   Search,
  //   Search.toUpperCase(),
  //   Search.toLowerCase(),
  //   startWithUpperCase,
  // ];
  const searchList = $(".searchListInner");
  const searchDiv = $(".searchList");
  // console.log(Search);
  // for (var j = 0; j < textCase.length; j++) {
  for (var i = 0; i < $(".par").length; i++) {
    var s = $(".par")[i];
    // console.log($(".par")[i].innerText);
    if (s.innerText.toLowerCase().includes(Search)) {
      console.log(
        "Found. The desired word is in the paragraph with # " +
          i +
          " with position " +
          s.innerText.search(Search)
      );
    }
    searchDiv.css("display", "block");
    let linumber = "li" + i;
    let listItem = document.createElement("li");
    listItem.setAttribute("id", linumber);
    listItem.text("Paragraph " + i + " position " + s.innerText.search(Search));

    searchList.append(listItem);
    // s.toggle(s.innerText.toLowerCase().indexOf(Search) > -1);
  }
  // }
});
//////////////   setTimeout(() => {
//////////////     // searchDiv.css("display", "none");
//////////////     searchDiv.slideUp();
//////////////     searchList.empty();
//////////////     console.clear();
//////////////   }, 5000);
////////////// });
// $(".par").each()
//SEARCH INPUT---------------------------------------------------------------------------------------------
//IMAGE PROCESSING-----------------------------------------------------------------------------------------
$(document).on(`click`, `.chart`, function showChartBigger() {
  const s = $(this),
    sc = s.clone();
  $(`.absolute, .secondary, body`).addClass(`active`);
  $(`.absolute-container`).empty().append(sc);
  // $(`.absoluteBttn`).css({ position: "fixed", display: "block" });
  // $(".main").css({ filter: "blur(20px)", "z-index": "1000" });
  // $(".wave").hide();
});
$(".absoluteBttn").click(function () {
  $(`.absolute, .secondary, body`).removeClass(`active`);
  // $(`.absoluteBttn`).css({ position: "absolute", display: "none" });
  // $(".main").css({ filter: "blur(0px)", "z-index": "-10" });
  // $(".wave").show();
  // $(".absolute").removeClass("active");
});
//IMAGE PROCESSING-----------------------------------------------------------------------------------------
// $(document).ready(function () {
//   $("#search").on("keyup", function () {
//       var Search = $("#search").val().toLowerCase();
//     s.toggle(s.text().toLowerCase().indexOf(value) > -1);
//     const searchDiv = $(".searchList");
//     searchDiv.css("display", "block");
//     let listnumber = "li" + i;
//     let listItem = document.createElement("li");
//     listItem.attr("id", listnumber);
//     listItem.text()="Paragraph " + i + " position " + s.innerText.search(Search);
//     $(".searchListInner").append(listItem);
//   });
// });
//JSON------------------------------------------------------------------------------------------------------
// var fs = require("./user1.json");
// try {
//   const result = JSON.parse(fs.name);
// } catch (err) {
//   // 👇️ This runs
//   console.log("Error: ", err.message);
// }
