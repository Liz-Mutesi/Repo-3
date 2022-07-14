function validationForm(){
    let username = document.forms["RegForm"]["Name"];
    let email = document.forms["RegForm"]["Email"];
    let phone = document.forms["RegForm"]["Telephone"];
    //let username = document.forms["RegForm"]["username"];
    
    if(username.value == ""){
        //alert("Please enter your name");
        username.style.border = "2px solid red";
        //username.innerHTML = "Please enter your name";
        username.focus();
        return false;
    }
    if(email.value == ""){
        alert("Please enter your email");
        email.focus();
    }
    if(email.value.indexOf("@", 0)<0 || email.value.indexOf ("."),0 <0 ){
        alert("Please enter a valid email address");
        email.focus();
        return false;
    }
    if(phone.value == "" || phone.value.length != 10){
        alert("Please enter your valid phone number");
        username.focus();
        return false;
    }
}