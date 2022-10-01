window.onload = function() {
    var nameBox = document.getElementById('name-box');
    var surnameBox = document.getElementById('surname-box');
    var dniBox = document.getElementById('dni-box');
    var birthdayBox = document.getElementById('bday-box')
    var phoneBox = document.getElementById('phone-box');
    var addressBox = document.getElementById('addr-box');
    var cityBox = document.getElementById('city-box');
    var postalCodeBox = document.getElementById('postcode-box');
    var emailBox = document.getElementById('email-box');
    var passwordBox = document.getElementById('password-box');
    var confirmPasswordBox = document.getElementById('confirm-password-box');

    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var dni = document.getElementById('dni');
    var birthday = document.getElementById('birthday')
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    var city = document.getElementById('city');
    var postalCode = document.getElementById('postal-code');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirm-password');

    var submit = document.getElementById('submit-button');

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
                if (string[i] == " ") {      // Added to consider spaces in city field
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

    function checkLengthMax(string,leng) { 	// Check if a string has a max length (leng)
        if (string.length > leng) {
            return false;
        } else {
            return true;
        }
    }

    function checkIfLetNum(string) {     // Check if a string has only letters and numbers
        var hasNum = false;
        var hasLetter = false;

        for (var i = 0; i < string.length; i++) {
            if (checkIfNum(string[i])) {
                hasNum = true;
                continue;
            } else if (checkIfLetter(string[i])) {
                hasLetter = true;
                continue;
            } else {
                break;
            }
        }

        if (hasNum == true && hasLetter == true) {
            return true;
        } else {
            return false;
        }
    }

    function checkIfSpace(string) {     // Check if a string has a space
        for (var i = 0; i < string.length; i++) {
            if (string[i] == " ") {
                return true;
            }
        }
        return false;
    }

    // Field validation functions

    function validateName() {
        if (!(name.value.length > 3)) {
            return false;
        }  else if (!checkIfLetter(name.value)) {
            return false;
        } else {
            return true;
        }
    }

    function validateSurname() {
        if(!(surname.value.length > 3)) {
            return false;
        }  else if (!checkIfLetter(surname.value)) {
            return false;
        } else {
            return true;
        }
    }

    function validateBirthday() {
        if(!(birthday.value.length > 7) ) {
            return false;
        }  else if (!checkIfNum(dni.value)) {
            return false;
        } else {
            return true;
        }
    }

    function validateDni() {
        if(!(dni.value.length > 10) ) {
            return false;
        } else {
            return true;
        }
    }

    function validatePhone() {
        if(!(phone.value.length == 10) ) {
            return false;
        }  else if (!checkIfNum(phone.value)) {
            return false;
        } else {
            return true;
        }
    }

    function validateAddress() {
        if(!(address.value.length > 5) ) {
            return false;
        }  else if (!checkIfLetNum(address.value)) {
            return false;
        }  else if (!checkIfSpace(address.value.trim())) {      // Trimming dismisses spaces at start & end
            return false;
        } else {
            return true;
        }
    }

    function validateCity() {
        if(!(city.value.length > 3) ) {
            return false;
        }  else if (!checkIfLetter(city.value)) {
            return false;
        } else {
            return true;
        }
    }

    function validatePostalCode() {
        if((postalCode.value.length < 4) ) {
            return false;
        }  else if((postalCode.value.length > 5) ) {
            return false;
        }  else if (!checkIfNum(postalCode.value)) {
            return false;
        } else {
            return true;
        }
    }

    function validateEmail() {
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
         return (email.value.match(emailExpression))
    }

    function validatePassword() {
        if(!(password.value.length > 8) ) {
            return false;
        }  else if (!checkIfLetNum(password.value)) {
            return false;
        } else {
            return true;
        }
    }

    function validateConfirmPassword() {
        if(!(password.value.length > 8) ) {
            return false;
        }  else if (!checkIfLetNum(password.value)) {
            return false;
        }  else if (password.value != confirmPassword.value) {
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

    surname.onblur = function() {
        if (validateSurname()) {
            return null;
        } else {
            insertInvalidInput(surnameBox,'Surame must be at least 3 characters long, letters only');
            return null;
        }
    }

    surname.onfocus = function() {
        removeInvalidInput(surnameBox);
        return null;
    }

    dni.onblur = function() {
        if (validateDni()) {
            return null;
        } else {
            insertInvalidInput(dniBox,'DNI must have at least 7 numbers');
            return null;
        }
    }

    dni.onfocus = function() {
        removeInvalidInput(dniBox);
        return null;
    }

    birthday.onblur = function() {
        if (validateBirthday()) {
            return null;
        } else {
            insertInvalidInput(birthdayBox,'Birth date is not correct');
            return null;
        }
    }

    birthday.onfocus = function() {
        removeInvalidInput(birthdayBox);
        return null;
    }

    phone.onblur = function() {
        if (validatePhone()) {
            return null;
        } else {
            insertInvalidInput(phoneBox,'Phone must have 10 numbers');
            return null;
        }
    }

    phone.onfocus = function() {
        removeInvalidInput(phoneBox);
        return null;
    }

    address.onblur = function() {
        if (validateAddress()) {
            return null;
        } else {
            insertInvalidInput(addressBox,'Address must have 5 characters and 1 space between');
            return null;
        }
    }

    address.onfocus = function() {
        removeInvalidInput(addressBox);
        return null;
    }

    city.onblur = function() {
        if (validateCity()) {
            return null;
        } else {
            insertInvalidInput(cityBox,'City must have 3 characters');
            return null;
        }
    }

    city.onfocus = function() {
        removeInvalidInput(cityBox);
        return null;
    }

    postalCode.onblur = function() {
        if (validatePostalCode()) {
            return null;
        } else {
            insertInvalidInput(postalCodeBox,'Postal code must have 4 or 5 numbers');
            return null;
        }
    }

    postalCode.onfocus = function() {
        removeInvalidInput(postalCodeBox);
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

    confirmPassword.onblur = function() {
        if (validateConfirmPassword()) {
            return null;
        } else {
            insertInvalidInput(confirmPasswordBox,'Confirmed password must be at least 8 characters long, letters ' +
             '& numbers only, and must be equal to password');
            return null;
        }
    }

    confirmPassword.onfocus = function() {
        removeInvalidInput(confirmPasswordBox);
        return null;
    }

    // Submit button function

    submit.onclick = function(e) {
        e.preventDefault();
        var errFields = [];

        if (!validateName()) {
            errFields.push('Name');
        }

        if (!validateSurname()) {
            errFields.push('Surname');
        }

        if (!validateDni()) {
            errFields.push('DNI');
        }

        if (!validateBirthday()) {
            errFields.push('Birth date');
        }

        if (!validatePhone()) {
            errFields.push('Phone');
        }

        if (!validateAddress()) {
            errFields.push('Address');
        }

        if (!validateCity()) {
            errFields.push('City');
        }

        if (!validatePostalCode()) {
            errFields.push('Postal Code');
        }

        if(!validateEmail()) {
            errFields.push('Email');
        }

        if (!validatePassword()) {
            errFields.push('Password');
        }

        if (!validateConfirmPassword()) {
            errFields.push('Confirmed Password');
        }

        if(errFields.length !== 0) {
            alert('Errores: \n' + errFields.join('\n'));
        } else {
            alert('Exito.\nName: ' + name.value + '\nSurname: ' + surname.value + '\nDNI: ' + dni.value +
                '\nBirth date: ' + birthday.value + '\nPhone: ' + phone.value + '\nAddress: ' + address.value +
                '\nCity: ' + city.value + '\nPostal Code: ' + postalCode.value + '\nEmail: ' + email.value +
                '\nPassword: ' + password.value + '\nConfirmed password: ' + confirmPassword.value);
        }
    }

}
