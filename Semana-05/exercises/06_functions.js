// 6. Funciones

// Script start declaration on console
console.log('**********Script start: 06_functions.js**********');


// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
// el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

// Subtask start declaration on console
console.log('-Subtask 6a:');

function addNum(num3,num4) {
    return num3 + num4;
}

var sum2 = addNum(3,5);

// Subtask results print on console
console.log(sum2);


/*
 * b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un
 * número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el
 * valor NaN como resultado.
 */

// Subtask start declaration on console
console.log('-Subtask 6b:');

function addNum2(num5,num6) {
    if ( isNaN(num5) || isNaN(num6) ) {
        alert('addNum2 function exception: not a number parameter')
        return 'Error';
    }
    return num5 + num6;
}

// Subtask results print on console
console.log(addNum2(3,'five'));
console.log(addNum2(3,5));


// c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un
// número entero.

// Subtask start declaration on console
console.log('-Subtask 6c:');

function validateInteger(num7) {
    return Number.isInteger(num7);
}

// Subtask results print on console
console.log(validateInteger(3));
console.log(validateInteger(3.5));


/*
 * d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los
 * números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a
 * entero (redondeado).
 */

// Subtask start declaration on console
console.log('-Subtask 6d:');

function addNum3(num8,num9) {
    if ( isNaN(num8) || isNaN(num9) ) {
        alert('addNum3 function exception: not a number parameter');
        return 'Error';
    }
    if (validateInteger(num8) == false) {
        alert('addNum3 function alert: ' + num8 + ' is not an integer. Rounding to proceed');
        num8 = Math.round(num8);
    }
    if (validateInteger(num9) == false) {
        alert('addNum3 function alert: ' + num9 + ' is not an integer. Rounding to proceed');
        num9 = Math.round(num9);
    }

    return num8 + num9;
}

// Subtask results print on console
console.log(addNum3(3,'five'));
console.log(addNum3(3,5));
console.log(addNum3(3.4,5));
console.log(addNum3(3.5,5.5));


// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma
// probando que todo siga funcionando igual.

// Subtask start declaration on console
console.log('-Subtask 6e:');

function roundNum(num) {
    if (validateInteger(num) == false) {
        alert('roundNum function alert: ' + num + ' is not an integer. Rounding to proceed');
        num = Math.round(num);
    }
    return num;
}

function addNum4(num10,num11) {
    if ( isNaN(num10) || isNaN(num11) ) {
        alert('addNum4 function exception: not a number parameter');
        return 'Error';
    }
    num10 = roundNum(num10);
    num11 = roundNum(num11);

    return num10 + num11;
}

// Subtask results print on console
console.log(addNum4('five',3));
console.log(addNum4(3,5));
console.log(addNum4(3.4,5));
console.log(addNum4(3.5,5.5));