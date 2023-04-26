class  PERSONA{

    constructor(name, password){
       this.name = name;
       this.password = password;
    
    }
}

/*function usersListed(){
    var usersListed = PERSONA[2];
    usersListed[0].name = "Eiren";
    usersListed[0].password = "1234";
    usersListed[1].name = "Guest";
    usersListed[1].password = "0000";
    usersListed[2].name = "Admin";
    usersListed[2].password = "admin";
}*/
//usersListed();

function login(){

var u = prompt("Your username?");
var p = prompt("Your password?");

validateUser(u,p);
}
login();
function validateUser(username, password) {
    var boolToCheck;
    // Check if username and password are not empty
    if (username.trim() === "" || password.trim() === "") {
      boolToCheck = false;
    }
  
    // Validate username and password against some rules
    // For example, require a minimum length, or specific characters
    if (username.length < 4) {
        boolToCheck = false;
    }
  
    // Check if username and password match some predefined values
    // For example, check against a list of valid users and passwords
    if (username !== "Eiren" || password !== "1234") {
        boolToCheck = false;
    }
  
    // If all checks passed, return true
    boolToCheck = true;
    
    logPassed(boolToCheck);
}



  function logPassed(xech){

    if(xech==true){
      alert("Login Successful");
    }
    else{
      alert("Login Failed");
      login();
    }
  }
  
