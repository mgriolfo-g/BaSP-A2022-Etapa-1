window.onload = function() {
    var emailBox = document.getElementById('email-box');
    var passwordBox = document.getElementById('password-box');

    var email = document.getElementById('email');
    var password = document.getElementById('password');

    var submit = document.getElementById('submit-button');
    var loginURL = "https://basp-m2022-api-rest-server.herokuapp.com/login";

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var modalBody = document.getElementsByClassName('modal-body')[0];

    function modalPopUp(message){
        modal.style.display='flex';
        if (modalBody.firstChild != null) {
            modalBody.removeChild(modalBody.firstChild);
        }
        var alertMsg = document.createElement('p');
        alertMsg.innerText = message;
        modalBody.append(alertMsg);
    }

    // Internal check functions

    function checkIfNum(string) {   // Check if a string (or a single char) is a number
        var checkString = String(string);
        for (var i = 0; i < checkString.length; i++) {
            if(checkString[i].charCodeAt(0) < 48 || checkString[i].charCodeAt(0) > 57) {
                return false;
            }
        }
        return true;
    }

    function checkIfLetter(string){     // Check if a string (or a single char) is a letter
        for (var i = 0; i < string.length; i++) {
            var strUpper = string[i].toUpperCase();
            var strLower = string[i].toLowerCase();
            if (strLower == strUpper){
                return false;
            }
        }
        return true;
    }

    function checkIfLetNum(string) {     // Check if a string has only letters and numbers
        var hasNum = false;
        var hasLetter = false;
        var hasOther = false;

        for (var i = 0; i < string.length; i++) {
            if (checkIfNum(string[i])) {
                hasNum = true;
                continue;
            } else if (checkIfLetter(string[i])) {
                hasLetter = true;
                continue;
            } else {
                hasOther = true;
                break;
            }
        }

        if (hasNum == true && hasLetter == true && hasOther == false){
            return true;
        } else {
            return false;
        }
    }

    // Field validation functions

    function validateEmail() {
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
         return (email.value.match(emailExpression));
    }

    function validatePassword() {
        if(!(password.value.length > 7)) {
            return false;
        }  else if (!checkIfLetNum(password.value)) {
            return false;
        } else {
            return true;
        }
    }

    // Input error message functions

    function insertInvalidInput(boxName,inputErrMsg) {
        var inputErr = document.createElement("p");
        inputErr.style = "color:red;font-size:10px;justify-content:left";
        inputErr.innerText = inputErrMsg;
        inputErr.setAttribute('id','invalid-msg-' + boxName.getAttribute('id'));
        boxName.append(inputErr);
        return null;
    }

    function removeInvalidInput(boxName){
        var invInput = document.getElementById('invalid-msg-' + boxName.getAttribute('id'));
        if (invInput !== null) {
            invInput.remove();
        }
        return null;
    }

    // Form actions on blur and focus

    email.onblur = function() {
        if (validateEmail()) {
            return null;
        } else {
            insertInvalidInput(emailBox,'Invalid Email');
            return null;
        }
    }

    email.onfocus = function() {
        removeInvalidInput(emailBox);
        return null;
    }

    password.onblur = function() {
        if (validatePassword()) {
            return null;
        } else {
            insertInvalidInput(passwordBox,'Password must be at least 8 characters long, letters & numbers only');
            return null;
        }
    }

    password.onfocus = function() {
        removeInvalidInput(passwordBox);
        return null;
    }

    span.onclick = function() {     // CLose button on modal
        modal.style.display = "none";
        modalBody.removeChild(modalBody.firstChild);
    }

    // Submit button function

    submit.onclick = function(e) {
        e.preventDefault();
        var errFields = [];

        if(!validateEmail()) {
            errFields.push('Email');
        }

        if (!validatePassword()) {
            errFields.push('Password');
        }

        if(errFields.length !== 0) {
            alert('Errores: ' + errFields.join(', '));
        } else {
            var loginURLWithQPs = loginURL + "?email=" + email.value + "&password=" + password.value;
            fetch(loginURLWithQPs)
            .then( function(response) {
                return response.json();
            })
            .then( function(data) {
                if (data.success == true) {
                    //alert(data.msg);
                    modalPopUp(data.msg);
                } else {
                    throw new Error(data.msg);
                }
            })
            .catch( function(err) {
                //alert(err);
                modalPopUp(err);
            })
        }
    }

}