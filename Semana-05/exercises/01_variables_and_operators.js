// 1.Variables y Operadores

// Script start declaration on console
console.log('**********Script start: 01_variables_and_operators.js**********');


// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en
// una 3er variable.

// Subtask start declaration on console
console.log('-Subtask 1a:');

var num1 = 3;
var num2 = 5;

var sum = num1 + num2;

// Subtask results print on console
console.log(num1 + ' + ' + num2 + ' = ' + sum);


// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

// Subtask start declaration on console
console.log('-Subtask 1b:');

var str1 = 'string';
var str2 = 'Concatenation';

var strConcat = str1 + str2;

// Subtask results print on console
console.log('Concatenating ' + str1 + ' with ' + str2 + ' makes ' + strConcat + ' !');


// c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando
// el resultado de la suma en una 3er variable (utilizar length).

// Subtask start declaration on console
console.log('-Subtask 1c:');

var str3 = 'counting';
var str4 = 'Characters';

var sumStringLength = str3.length + str4.length;

// Subtask results print on console
console.log('Length of ' + str3 + ' (' + str3.length +  ') plus length of ' + str4 + ' (' + str4.length + ') equals '
    + sumStringLength + ' !');