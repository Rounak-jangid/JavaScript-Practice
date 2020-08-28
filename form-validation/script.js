function validate() {
    if (document.myForm.fname.value == "") {
        alert("Please provide your first name");
        document.fname.focus();
        return false;
    }

    if (document.myForm.lname.value == "") {
        alert("Please provide your last name");
        document.lname.focus();
        return false;
    }

    if (document.myForm.usrnam.value == "") {
        alert("Please write your username");
        document.usrnam.focus();
        return false;
    }
    
    if (document.myForm.email.value == "") {
        alert("You must provide an email");
        document.email.focus();
        return false;
    }

    if (document.myForm.pnum.value == "") {
        alert("You must provide your mobile number");
        document.pnum.focus();
        return false;
    }
    return (true);
}

function showEmail() {
    document.getElementById("email_mess").style.display = "block";
}

function hideEmail() {
    document.getElementById("email_mess").style.display = "none";
}

function validateEmail() {
    var emailMess = document.myForm.email.value;
    var emcheck = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var emcheck2 = /[0-9]/g;
    var extension = document.getElementById("exten");
    var number = document.getElementById("number");
    if (emailMess.match(emcheck)) {
        extension.classList.remove("invalid");
        extension.classList.add("valid");
        return false;
    } else {
        extension.classList.remove("valid");
        extension.classList.add("invalid");
    }

    if (emailMess.match(emcheck2)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
        return false;
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
}

function validateMobile() {
    var mcode = document.myForm.pcode.value;
    var mnum = document.myForm.pnum;
    var mcheckIn = mnum.indexOf("+91");
    var mcheckCa = mnum.indexOf("+1");
    var mcheckBr = mnum.indexOf("+55");

    if (mnum.test(mcheckIn)) {
        document.myForm.pnum.value = "9" + mnum.value;
        return false;
    } else if (mnum.test(mcheckCa)) {
        document.myForm.pnum.value = "4" + mnum.value;
        return false;
    } else {
        document.myForm.pnum.value = "1" + mnum.value;
        return false;
    }
}

var input = document.getElementById("pwd");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number1");
var length = document.getElementById("length");
var special = document.getElementById("special");

function showPass() {
    document.getElementById("message").style.display = "block";
}

function hidePass() {
    document.getElementById("message").style.display = "none";
}

function validatePass() {
    
    

    // password should have a lowercase
    var lowerCase = /[a-z]/g;

    if (input.value.match(lowerCase)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // password should have a uppercase
    var upperCase = /[A-Z]/g;

    if (input.value.match(upperCase)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(input.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
  
    // Validate length
    if(input.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }

    // password should have special character
    var specialCase = /[!@#$%^&*]/g;

    if (input.value.match(specialCase)) {
        special.classList.remove("invalid");
        special.classList.add("valid");
    } else {
        special.classList.remove("valid");
        special.classList.add("invalid");
    }
}