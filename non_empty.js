function required(){
    var empt = document.forms["contact"]["Name"].value;
    var empt1 = document.forms["contact"]["Message"].value;
    var empt2 = document.forms["contact"]["Email"].value;
    if (empt == "" || empt1 == "" || empt2 == ""){
        alert("Please input a Value");
        return false;
    }
    else {
        alert('Code has accepted : you can try another');
        return true; 
    }
}

function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        return true;
    }
    else{
        alert("You have entered an invalid email address!");
        return false;
    }
}
