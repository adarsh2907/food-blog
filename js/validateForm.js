function allowAlphaNumericSpace(e) {
    var code = ('charCode' in e) ? e.charCode : e.keyCode;
    if (!(code == 32) && // space
        //!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        e.preventDefault();
        alert("Numbers not allowed");
    }

}

function showAlert(e) {
    e.preventDefault()
    let name = document.getElementById('Name'),
        email = document.getElementById('Email'),
        subject = document.getElementById('Subject'),
        message = document.getElementById('Message');
    name.value="";
    email.value="";
    subject.value="";
    message.value="";
    alert("Data Send Successfully")
    
}