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
    var signUpURL = "https://basp-m2022-api-rest-server.herokuapp.com/signup";

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

    if (localStorage.getItem('lastname-ls') != null) {
        name.setAttribute('value', localStorage.getItem('name-ls'));
        surname.setAttribute('value', localStorage.getItem('lastname-ls'));
        dni.setAttribute('value', localStorage.getItem('dni-ls'));
        birthday.setAttribute('value', localStorage.getItem('dob-ls'));
        phone.setAttribute('value', localStorage.getItem('phone-ls'));
        address.setAttribute('value', localStorage.getItem('address-ls'));
        city.setAttribute('value', localStorage.getItem('city-ls'));
        postalCode.setAttribute('value', localStorage.getItem('zip-ls'));
        email.setAttribute('value', localStorage.getItem('email-ls'));
        password.setAttribute('value', localStorage.getItem('password-ls'));
        confirmPassword.setAttribute('value', localStorage.getItem('password-ls'));
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

    function formatDateMMDDYYYY(inputDate) {
        var date = new Date(inputDate);
        if (!isNaN(date.getTime())) {
            var day = (date.getDate() + 1).toString();
            var month = (date.getMonth() + 1).toString();
            // Months use 0 index.
            return (month[1] ? month: '0' + month[0]) + '/' + (day[1] ? day : '0' + day[0]) + '/' + date.getFullYear();
        }
    }

    // Field validation functions

    function validateName() {
        if (!(name.value.length > 2)) {
            return false;
        }  else if (!checkIfLetter(name.value)) {
            return false;
        } else {
            return true;
        }
    }

    function validateSurname() {
        if(!(surname.value.length > 2)) {
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
        if(!(dni.value.length > 6) ) {
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
        if(!(password.value.length > 7) ) {
            return false;
        }  else if (!checkIfLetNum(password.value)) {
            return false;
        } else {
            return true;
        }
    }

    function validateConfirmPassword() {
        if(!(password.value.length > 7) ) {
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

    span.onclick = function() {     // CLose button on modal
        modal.style.display = "none";
        modalBody.removeChild(modalBody.firstChild);
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
            var signUpURLWithQPs = signUpURL + "?name=" + name.value + "&lastName=" + surname.value +
            "&dni=" + dni.value + "&dob=" +  formatDateMMDDYYYY(birthday.value)  + "&phone=" + phone.value +
            "&address=" + address.value + "&city=" + city.value + "&zip=" + postalCode.value +
            "&email=" + email.value + "&password=" + password.value;

            fetch(signUpURLWithQPs)
            .then( function(response) {
                return response.json();
            })
            .then( function(data) {
                console.log(data);
                if (data.success == true) {
                    successMsg = data.msg + '. Showing previously inserted data: ' + '\n' +
                    'Name: ' + data.data.name + '\n' + 'Surname: ' + data.data.lastName + '\n'+
                    'DNI: ' + data.data.dni + '\n' + 'Birthday: ' + data.data.dob + '\n' + 
                    'Phone: ' + data.data.phone + '\n' + 'Address: ' + data.data.address + '\n' +
                    'City: ' + data.data.city + '\n' + 'Postal Code: ' + data.data.zip + '\n' +
                    'Email: ' + data.data.email + '\n' + 'Password: ' + data.data.password;
                    //alert(successMsg);
                    modalPopUp(successMsg);
                    // localStorage set
                    window.localStorage.setItem("name-ls", data.data.name);
                    window.localStorage.setItem("lastname-ls", data.data.lastName);
                    window.localStorage.setItem("dni-ls", data.data.dni);
                    window.localStorage.setItem("dob-ls", (new Date(data.data.dob).toISOString().split('T')[0]));
                    window.localStorage.setItem("phone-ls", data.data.phone);
                    window.localStorage.setItem("address-ls", data.data.address);
                    window.localStorage.setItem("city-ls", data.data.city);
                    window.localStorage.setItem("zip-ls", data.data.zip);
                    window.localStorage.setItem("email-ls", data.data.email);
                    window.localStorage.setItem("password-ls", data.data.password);
                } else {
                    var errArrStr = '';
                    for (i = 0; i < data.errors.length; i++) {
                        errArrStr += '\n' + data.errors[i].msg.toString();
                    }
                    throw new Error(errArrStr);
                }
            })
            .catch( function(err) {
                //alert(err);
                modalPopUp(err);
            })
        }
    }

}
