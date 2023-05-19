class  PERSONA{

    constructor(name, password){
       this.name = name;
       this.password = password;
    
    }
}


function login(){

let u = prompt("Your username?");
let p = prompt("Your password?");
validateUser(u,p);
}


  login();



function validateUser(username, password) {
 let listOfUsers = [
    new PERSONA("Eiren", "1234"),
    new PERSONA("admin", "admin"),
    new PERSONA("eiren", "admin"),
    new PERSONA("test", "0000")
 ]
 
  let boolToCheck=true;
  if(username == null || password == null){boolToCheck = false; login();} 
    // Check if username and password are not empty
    if (username.trim() == "" || password.trim() == "") {
      boolToCheck = false;
      login();
    }
   


  
    // Validate username and password against some rules
    // For example, require a minimum length, or specific characters
    if (username.length < 4) {
        boolToCheck = false;
        login();
    }
  
    // Check if username and password match some predefined values
    // For example, check against a list of valid users and passwords
   
     if (username !== "Eiren" || password !== "admin") {
         boolToCheck = false;
         login();
     }
  
    // If all checks passed, return true
   
    


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


  let counter=0;
  function test(){
    counter+=1;
    switch(counter){
    case 1:
      alert('Ouch! That hurts...')
    break;
    case 2:
      alert('Please, I am trying to do my job... dont hit me!')
    
    break;
    
    case 3:
      alert("¡Stop already!")  
    
    
    break;

    case 4:
      
    alert("Now I'm going to get you banned!");
    login();
    break;

    case 5:
    alert("AHHH! I WILL NOT SERVE YOU ANYMORE, OFFER ME AN APOLOGY!") 
    
  
sorry();

    break; 
    }
    
  }

  function sorry(){
    let sorr = prompt("Offer her an Apology...")
    

    if(sorr == "Im sorry" || sorr == "I am sorry" || sorr == "sorry"){
      alert("You should, now let me do my work -hmph!-");
      counter=0;
    }
    else{

      sorry();
    }

  }