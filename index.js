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
$(".dropdownMenu").each(function (i){
  console.log(i);
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
const errorOutput=$("#formError");
$.ajax({
  type:"GET",
  url: "./user1.json",
  data:"",
  success: function (json){
    const email= $(".emailInput").val(), password= $(".passwordInput").val();
    $(".bttnInput").click(()=>{
      if (email=="" && (password== ""))
      {
        errorOutput.text("Both Email and Password are missing!");
        errorOutput.show();
      }
      else if (email== "" || (password ==""))
      {
        errorOutput.text("Either Email or Password is missing!");
        errorOutput.show();
      }
      else{
        var ePattern = new RegExp("^(?=.*[@.]).+$");
        var pattern = new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?]).+$"
        );
        ePattern.test(email) && (pattern.test(password))
        ? function () {
          $.each(json.users, function(key, value){
            if (email==value.email && (password==value.password))
            {
              errorOutput.text("Logged In");
              errorOutput.show();
            }
            else if (email== value.email)
            {
              errorOutput.text("Password Incorrect");
              errorOutput.show();
            }
            else if (password= value.password)
            {
              errorOutput.text("Email Incorrect");
              errorOutput.show();
            }
            else{
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
  },
  error: function (errorCode){
    console.log(errorCode);
  }
})
$(".emailInput").keydown(function Dissapear(){
  errorOutput.hide();
})
$(".passwordInput").keydown(function (){
  Dissapear();
})
//JSON-----------------------------------------------------------------------------------------------------
//Marketing------------------------------------------------------------------------------------------------
function Parallax(child){
  var
  matrix= $(child).css("transform"),
  matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
  //
  $("#between").on("mousemove" ,function (event){
      var X=parseInt(matrixValues[4])+event.pageX/50;
      var Y=parseInt(matrixValues[5])+event.pageY/50;
      $(child).css("transform", "matrix(1, 0, 0, 1, "+ X +", "+ Y +")");
  })
};
Parallax(".colOdd");
Parallax(".colEven");
//Marketing------------------------------------------------------------------------------------------------
//Animation------------------------------------------------------------------------------------------------
$(document).ready(function(){
  $(window).scroll(function(){
    //
    console.log($(window).scrollTop());
    //
    $(window).scrollTop()>=366
    ? $(".r").addClass("animation")
    : console.log("error");
    //
    $(window).scrollTop() >=920
    ?()=>{
      $(".colOdd").addClass("animatedOdd");
      $(".colEven").addClass("animatedEven");
    }
    : console.log("error");
    //
    ($(window).scrollTop() >=3070)
     ? $(".table").addClass("animationTable")
    : console.log("error");
    //
    


  })
})
  // var animationName,
  // animationDuration,
  // directionOfAnimation,
  // value,
  // secondaryValue;
  // function AnimationClass(selector,animationName,animationDuration,directionOfAnimation,value,secondaryValue){
  //   $(selector).css({
  //     "animation-name":animationName,
  //     "animation-duration":animationDuration,
  //     directionOfAnimation: value+"px",
  //   })
  // }
  //
  // animation-name: --animation-name;
  // animation-duration: --animation-duration;
  // animation-fill-mode: forwards;
  // --direction:--value;
  // // top: 100px;
  // @keyframes container {
  //     from{     
  //         --direction:--value;}
  //     to{
  //         --direction:--secondaryValue;
  //     }
  // }
// }
//Animation------------------------------------------------------------------------------------------------
