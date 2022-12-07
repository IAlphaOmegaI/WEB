//LOG IN---------------------------------------------------------------------------------------------------

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
    //EMAIL
    //PASSWORD
    var user =
      '{ "email": ["Xhurian@gmail.com","flavio@outlook.com","Luis@yahoo.com"], "password": ["Qafshtama1.","Lajthiza2.","Selita3."]}';
    var json = JSON.parse(user);
    // else if ((json.password.indexOf(passwordInput) > -1)&&(json.email.indexOf(emailInput)>-1)) {
    //   alert("Correct");
    // }
    var Epattern = new RegExp("^(?=.*[@.]).+$");
    var pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?]).+$"
    );
    let nr = 0;
    if (Epattern.test(emailInput)) {
      console.log("Email is " + emailInput);
      // alert("Email is " + emailInput);
      nr++;
    } else if (!Epattern.test(emailInput)) {
      alert("Email must include @ and . character");
    }
    if (pattern.test(passwordInput) && passwordInput.length > 7) {
      console.log("Password is " + passwordInput);
      // alert("Password is " + passwordInput);
      nr++;
    } else if (!Epattern.test(passwordInput)) {
      alert(
        "Password must include at least one Uppercase letter, one Lowercase letter and a special character. It also should be at least 8 characters long."
      );
    }
    // if (Epattern.test(emailInput) && Epattern.test(passwordInput))
    if ((nr = 2)) {
      if (json.email.indexOf(emailInput)) {
        alert("Your user isnt registred");
        return Checking;
      }
      if (json.password.indexOf(passwordInput)) {
        alert("Incorrect Password");
      }
    }
  }
}
$(".bttnInput").click(Checking());
$(document).keydown(function (key) {
  if (key.code == 13) {
    Checking();
  }
});

//LOG IN---------------------------------------------------------------------------------------------------
// var fs = request("fs");
// fs.readFileSync("./user1", "utf-8", (error, data) => {
//   console.log(data);
// });
// import data from "./user1.json" assert { type: "JSON" };
// console.log(data);
