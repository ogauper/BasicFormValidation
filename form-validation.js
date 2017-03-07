function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if(userEntered.length<6){
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if (userEntered.length>6) {
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameSuccess").innerHTML="Good Username.";
    document.getElementById("usernameSuccess").classList.remove("hidden-message");
    document.getElementById("usernameSuccess").classList.add("shown-message");

  }


  if(passEntered == "password"){
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
  else{
    document.getElementById("passwordSuccess").innerHTML="Good Password.";
    document.getElementById("passwordSuccess").classList.remove("hidden-message");
    document.getElementById("passwordSuccess").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-success");



  }
}
