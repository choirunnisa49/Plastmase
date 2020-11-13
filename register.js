alert('Register dulu yuk supaya kamu bisa ikutan posting artikel di Plastmase :)')
var fullname = document.forms['form']['fullname'];
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var fullname_error = document.getElementById('fullname_error');
var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

fullname.addEventListener('textInput', fullname_Verify);
email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);


function validated() {
    if(fullname.value.length < 10){
        fullname.style.border = "2px solid red";
        fullname_error.style.display = "block";
        fullname.focus();
        return false;
    }

    if(email.value.length < 9){
        email.style.border = "2px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

    if(password.value.length < 6){
        password.style.border = "2px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}

function fullname_Verify() {
    if(fullname.value.length >= 8){
        fullname.style.border = "2px solid silver";
        fullname_error.style.display = "none";
        return true;
    }
}

function email_Verify() {
    if(email.value.length >= 8){
        email.style.border = "2px solid silver";
        email_error.style.display = "none";
        return true;
    }
}

function pass_Verify() {
    if(password.value.length >= 5){
        password.style.border = "2px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}

var password = document.getElementById("password")
  , passwordConfirm = document.getElementById("passwordConfirm");


function validatePassword(){
  if(password.value != passwordConfirm.value) {
    passwordConfirm.setCustomValidity("Passwords Doesn't Match!");
  } else {
    passwordConfirm.setCustomValidity('');
  }
}

password.onchange = validatePassword;
passwordConfirm.onkeyup = validatePassword;

