//LOG IN---------------------------------------------------------------------------------------------------
var passwordInput = $(".passwordInput").val();
var emailInput = $(".emailInput").val();
function Checking() {
  var passwordInput = $(".passwordInput").val();
  var emailInput = $(".emailInput").val();
  if (emailInput == "" && (passwordInput = "")) {
    alert("Both Email and Password are missing");
    return Checking;
  } else if (emailInput == "") {
    alert("Email missing");
    return Checking;
  } else if (passwordInput == "") {
    alert("Password missing");
    return Checking;
  } else {
    //
    // (emailInput == "" && (passwordInput = ""))
    // ? ()=>{
    //   alert("Both Email and Password are missing");
    //   return Checking;
    // }
    // :(emailInput == "")
    // ? ()=>{
    //   alert("Email missing");
    //   return Checking;
    // }
    // :(passwordInput == "")
    // ? ()=>{
    //   alert("Password missing");
    //   return Checking;
    // }
    // : function Execute(){
    //EMAIL
    //PASSWORD
    // var user =
    //   '{ "email": ["Xhurian@gmail.com","flavio@outlook.com","Luis@yahoo.com"], "password": ["Qafshtama1.","Lajthiza2.","Selita3."]}';
    // var json = JSON.parse(user);
    // else if ((json.password.indexOf(passwordInput) > -1)&&(json.email.indexOf(emailInput)>-1)) {
    //   alert("Correct");
    // }
    var Epattern = new RegExp("^(?=.*[@.]).+$");
    var pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?]).+$"
    );
    var nr = 0;
    // if (Epattern.test(emailInput)) {
    //   console.log("Email is " + emailInput);
    //   // alert("Email is " + emailInput);
    //   nr++;
    // } else if (!Epattern.test(emailInput)) {
    //   alert("Email must include @ and . character");
    // }
    function Summon(Keyword, alertWord) {
      console.log(Keyword.toUpperCase() + " is " + alertWord);
      nr++;
    }
    //
    Epattern.test(emailInput)
      ? Summon("email", emailInput)
      : alert("Email must include at least a @ and . character");
    // if (pattern.test(passwordInput) && passwordInput.length > 7) {
    //   console.log("Password is " + passwordInput);
    //   // alert("Password is " + passwordInput);
    //   nr++;
    // } else if (!Epattern.test(passwordInput)) {
    //   alert(
    //     "Password must include at least one Uppercase letter, one Lowercase letter and a special character. It also should be at least 8 characters long."
    //   );
    pattern.test(passwordInput) && passwordInput.length > 7
      ? Summon("password", passwordInput)
      : alert(
          "Password must include at least one Uppercase letter, one Lowercase letter and a special character. It also should be at least 8 characters long."
        );
  }
  $.ajax({
    type: "GET",
    url: `./user1.json`,
    // data:``,
    success: function (json) {
      console.log(json.email);
      nr == 2
        ? () => {
            json.email.forEach(function (i) {
              (json.email[i] = emailInput && json.email[i] == passwordInput)
                ? alert("Logged in")
                : alert(
                    "Either your email isnt registred or your password is incorrect"
                  );
            });
          }
        : console.log("error");
    },
    error: function (err) {
      console.log(err);
    },
  });
}

$(".bttnInput").click(Checking());
$(document).keydown(function (key) {
  if (key.code == "Enter") {
    Checking();
  }
});
//

//LOG IN---------------------------------------------------------------------------------------------------

// fetch("./user1.json")
//   .then((response) => response.json())
//   .then((json) => {
//     const jsonfile = json;
//     (nr = 2) && jsonfile.email.indexOf(emailInput)
//       ? () => {
//           alert("Your user isnt registred");
//           return Checking;
//         }
//       : jsonfile.password.indexOf(passwordInput)
//       ? alert("Incorrect Password")
//       : alert("Logged in");
//   });

//ne duam qe ajo pevec se te kontrolloj te sigurohet qe kane te njejtin index ne vektor pra emaili 1 te jete me passowrd 1 etj...
//if(nr==2){
//for(var i=0, i<json.email.length(), i++){
//if(json.email[i]=emailInput  && (json.email[i]==passwordInput)){
//alert("Logged in")
//}
//else{
//alert("Either your email isnt registred or your password is incorrect");
//
//
// }}}
// $.getJSON("./user1.json", function (json) {});
//
//
//
//
//
//
//
//
json.email.forEach(function (i) {
  console.log(i);
  (json.email[i] = emailInput && json.email[i] == passwordInput)
    ? alert("Logged in")
    : alert("Either your email isnt registred or your password is incorrect");
});
