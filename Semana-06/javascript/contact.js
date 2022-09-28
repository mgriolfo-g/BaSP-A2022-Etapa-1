window.onload = function() {
    var nameBox = document.getElementById('name-box');
    var emailBox = document.getElementById('email-box');
    var messageBox = document.getElementById('message-box');

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var area = document.getElementById('area');
    var message = document.getElementById('message');

    var submit = document.getElementById('input-button');

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
                if (string[i] == " "){      // Added to consider spaces in message field
                    continue;
                }
                return false;
            }
        }
        return true;
    }

    function checkLength(string,leng) { 	// Check if a string has a certain length (leng)
        if (string.length < leng) {
            return false;
        } else {
            return true;
        }
    }

    function checkIfLetOrNum(string) {     // Check if a string has only letters and numbers
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

        if ( (hasNum == true || hasLetter == true) && hasOther == false){
            return true;
        } else {
            return false;
        }
    }

    // Field validation functions

    function validateName() {
        if(!checkLength(name.value, 3) ) {
            return false;
        }  else if (!checkIfLetter(name.value)) {
            return false;
        } else {
            return true;
        }
    }

    function validateEmail() {
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if(email.value.match(emailExpression)) {
            return true;
        } else {
            return false;
        }
    }

    function validateMessage() {
        if(!checkLength(message.value, 3) ) {
            return false;
        }  else if (!checkIfLetOrNum(message.value)) {
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

    name.onblur = function() {
        if (validateName()) {
            return null;
        } else {
            insertInvalidInput(nameBox,'Name must be at least 3 characters long, letters only');
            return null;
        }
    }

    name.onfocus = function() {
        removeInvalidInput(nameBox);
        return null;
    }

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

    message.onblur = function() {
        if (validateName()) {
            return null;
        } else {
            insertInvalidInput(messageBox,'Message must be at least 3 characters long');
            return null;
        }
    }

    message.onfocus = function() {
        removeInvalidInput(messageBox);
        return null;
    }

    // Submit button function

    submit.onclick = function(e) {
        e.preventDefault();
        var errFields = [];

        if(!validateName()) {
            errFields.push('Email');
        }

        if(!validateEmail()) {
            errFields.push('Email');
        }

        if (!validateMessage()) {
            errFields.push('Message');
        }

        if(errFields.length !== 0) {
            alert('Errores: ' + errFields.join(', '));
        } else {
            alert('Exito.\nName: ' + name.value + '\nEmail: ' + email.value +
            '\nResource Area: ' + area.value + '\nMessage: ' + message.value);
        }
    }

}
