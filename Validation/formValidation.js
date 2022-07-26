function validationForm(){
    let username = document.forms["RegForm"]["Name"];
    let email = document.forms["RegForm"]["Email"];
    let phone = document.forms["RegForm"]["Telephone"];
    let select = document.forms["RegForm"]["Subject"];
    let pass = document.forms["RegForm"]["Password"];

    nameRegex = /^[A-Za-z]+$/
    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()])[A-Za-z\d@#$!%*?&^()]{8,}$/
    numberRegex = /^[0-9]*$/

    alphaNumeric = /^[A-Za-z0-9]+$/     //expression that takes on letters and numbers only not special characters

    //let username = document.forms["RegForm"]["username"];
    
    if(username.value == "" || !nameRegex.test(username.value)){
        //alert("Please enter your name with alphabets only");
        username.style.border = "2px solid red";
        username.innerHTML = "Please enter your name";
        //username.focus();
        return false;
    }
    if(email.value == "" || !emailRegex.test(email.value)){
        // alert("Please enter your email");
        email.style.border = "2px solid red";
        email.innerHTML = "Please enter your email"
        // email.focus();
        // email.focus();
    }
    if(email.value.indexOf("@", 0)<0 || email.value.indexOf ("."),0 <0 ){
    //     alert("Please enter a valid email address");
    //     email.focus();
       return false;
    }
    else {
        email.style.border = "2px solid green";
    }
    if (pass.value == "" || !passRegex.test(pass.value)) {
        // alert("Please enter your password");
        pass.style.border = "2px solid red";
        // pass.focus();
        return false;
      }
      else {
        pass.style.border = "2px solid green";
      }
    
    if (phone.value == "" || phone.value.length  != 10 || !numberRegex.test(phone.value)){
        // alert("Please enter a valid phone number");
        phone.style.border = "2px solid red";
        // phone.focus();
        return false;
    }
    else {
        phone.style.border = "2px solid green";
    }

    if (select.selectedIndex < 1) {
        // alert("Please enter your course.");
        select.focus();
        select.style.border = "2px solid red";
        return false;
      }
      else {
        select.style.border = "2px solid green";
      }
      return true;
    
}
    
