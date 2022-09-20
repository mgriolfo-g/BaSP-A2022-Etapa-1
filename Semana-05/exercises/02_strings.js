// 2.Strings

// Script start declaration on console
console.log('**********Script start: 02_strings.js**********');


// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
// toUpperCase).

// Subtask start declaration on console
console.log('-Subtask 2a:');

var str5 = 'This example string';
var str5Upper = str5.toUpperCase();

// Subtask results print on console
console.log('Casting "' + str5 + '" to uppercase returns "' + str5Upper + '".');


// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
// caracteres guardando el resultado en una nueva variable (utilizar substring).

// Subtask start declaration on console
console.log('-Subtask 2b:');

var str6 = 'Another example string';
var str6Substr = str6.substring(0,5);

// Subtask results print on console
console.log('Taking the first 5 characters from "' + str6 + '" leaves us with "' + str6Substr + '".');


// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
// caracteres guardando el resultado en una nueva variable (utilizar substring).

// Subtask start declaration on console
console.log('-Subtask 2c:');

var str7 = 'Just another example string';
var str7Substr = str7.substring(str7.length-3);

// Subtask results print on console
console.log('And taking the last 3 characters from "' + str7 + '" leaves us with "' + str7Substr + '".');


/*
 * d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
 * mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
 * toLowerCase y el operador +).
 */

// Subtask start declaration on console
console.log('-Subtask 2d:');

var str8 = 'a KiNd oF WeiRd sTrINg';
var str8SentenCase = (str8.substring(0,1)).toUpperCase() + (str8.substring(1)).toLowerCase();

// Subtask results print on console
console.log('And casting "' + str8 + '" to sentence case gives us "' + str8SentenCase + '".');


// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición
// del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

// Subtask start declaration on console
console.log('-Subtask 2e:');

var str9 = 'Yet other sample string';
var str9WhiteSpacePos = str9.indexOf(' ');

// Subtask results print on console
console.log('We will find the first white space of "' + str9 + '" in position number ' + str9WhiteSpacePos + '.');


/*
 * f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
 * Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
 * palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
 * operador +).
 */

// Subtask start declaration on console
console.log('-Subtask 2f:');

var str10 = 'mistaKingly upPercased';
var str10firstUpper = str10.substring(0,1).toUpperCase() + str10.substring(1,str10.indexOf(' ')).toLowerCase() +
    ' ' +  str10.substring(str10.indexOf(' ')+1,str10.indexOf(' ')+2).toUpperCase() +
    str10.substring(str10.indexOf(' ')+2).toLowerCase();

// Subtask results print on console
console.log('And casting words in "' + str10 + '" with first letter uppercase gets us "' + str10firstUpper + '".');