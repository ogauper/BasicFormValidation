function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if(userEntered.length<6){
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }

  else if (userEntered.indexOf(" ")> 0){
    document.getElementById("usernameError").innerHTML="Username may not contain spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else {
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameSuccess").innerHTML="Good Username.";
    document.getElementById("usernameSuccess").classList.remove("hidden-message");
    document.getElementById("usernameSuccess").classList.add("shown-message");

  }


  if(passEntered.toLowerCase() == "password"){
  document.getElementById("passwordError").innerHTML="Password cannot be 'password'.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
  else if(passEntered.length<6||passEntered.length>20){
  document.getElementById("passwordError").innerHTML="Password must be between 6 and 20 characters.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  }

  else if(passEntered == userEntered){
  document.getElementById("passwordError").innerHTML="Password must be different from username..";
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
