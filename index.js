//DROPDOWN-------------------------------------------------------------------------------------------------
$(`form.d-flex`).on(`submit`, function returnSubmitOfText(e) {
  e.preventDefault();
});
$(".dropdownMenu").slideUp(0);

function dropDown(button, menu) {
  $(button).click(function () {
    $(menu).slideToggle(500);
  });
}
// for (var i = 1; i <= $(".dropdownMenu").length ; i++) {
//   var button = "#btndropdown" + i;
//   var menu = "#menu" + i;
//   dropDown(button, menu);
// }
$(".dropdownMenu").each(function (i){
  var button = "#btndropdown" + i;
  var menu = "#menu" + i;
  dropDown(button, menu);
})
//DROPDOWN-------------------------------------------------------------------------------------------------
//IMAGE PROCESSING-----------------------------------------------------------------------------------------
$(document).on(`click`, `.chart`, function showChartBigger() {
  const s = $(this),
    sc = s.clone();
  $(`.absolute, .secondary, body`).addClass(`active`);
  $(`.absolute-container`).empty().append(sc);
});
$(".absoluteBttn").click(function () {
  $(`.absolute, .secondary, body`).removeClass(`active`);
});
//IMAGE PROCESSING-----------------------------------------------------------------------------------------
//JSON-----------------------------------------------------------------------------------------------------
// alert("HI");
$.ajax({
  type:"GET",
  url: "./user1.json",
  data:"",
  success: function (json){
    // console.log(json.email[1]);
    // $.each(json.users, function(key, value){
    //   console.log(value.email)
    // })
    const email= $(".emailInput").val(), password= $(".passwordInput").val();
    $("bttnInput").click(()=>{
      const errorOutput=$("#formError");
      errorOutput.hide();
      email=="" && (password== "")
      ?  ()=>{
        errorOutput.text("Both Email and Password are missing!");
        errorOutput.show();
      }
      : email== "" || (password =="")
      ? ()=>{
        errorOutput.text("Either Email or Password is missing!");
        errorOutput.show();
      }
      : ()=>{
        var ePattern = new RegExp("^(?=.*[@.]).+$");
        var pattern = new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?]).+$"
        );
        ePattern.test(email) && (pattern.test(password))
        ? function () {
          $.each(json.users, function(key, value){
            // console.log(value.email)
            email==value.email && (password==value.password)
            ? ()=>{
              errorOutput.text("Logged In");
              errorOutput.show();
            }
            : email== value.email
            ? ()=>{
              errorOutput.text("Password Incorrect");
              errorOutput.show();
            }
            : password= value.password
            ? ()=>{
              errorOutput.text("Email Incorrect");
              errorOutput.show();
            }
            : ()=>{
              errorOutput.text("Both Email and Password are incorrect")
              errorOutput.show();
            }
          })
        }
        : ePattern.test(email) || (pattern.test(password)) 
        ?  () => {
            errorOutput.text("Either your Email or Password doesn't fulfill the criteria. Password must be 8 characters long, contain a special character and an upercase letter.");
            errorOutput.show();

        }
        : console.log("else");
    
      };
    })
    
  }




})

