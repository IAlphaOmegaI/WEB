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
