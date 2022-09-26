// 3. Arrays

// Script start declaration on console
console.log('**********Script start: 03_arrays.js**********');


// a. Dado el siguiente array: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
// 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'] mostrar por consola los meses 5 y 11 (utilizar console.log).

// Subtask start declaration on console
console.log('-Subtask 3a:');

var arrMonth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
    'Noviembre', 'Diciembre'];

// Subtask results print on console
console.log('El mes 5 es ' + arrMonth[4] + ' y el mes 11 es ' + arrMonth[10] + '!');


// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

// Subtask start declaration on console
console.log('-Subtask 3b:');

// Subtask results print on console
console.log(arrMonth.sort());


// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

// Subtask start declaration on console
console.log('-Subtask 3c:');

arrMonth.unshift('Aguinaldo');
arrMonth.push('Bono Performance');

// Subtask results print on console
console.log(arrMonth);


// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

// Subtask start declaration on console
console.log('-Subtask 3d:');

arrMonth.shift();
arrMonth.pop();

// Subtask results print on console
console.log(arrMonth);


// e. Invertir el orden del array (utilizar reverse).

// Subtask start declaration on console
console.log('-Subtask 3e:');

arrMonth.reverse();

// Subtask results print on console
console.log(arrMonth);


// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

// Subtask start declaration on console
console.log('-Subtask 3f:');

var strArrMonth = arrMonth.join('-');

// Subtask results print on console
console.log(strArrMonth);


// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

// Subtask start declaration on console
console.log('-Subtask 3g:');

var arrMonth2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
    'Noviembre', 'Diciembre'];

var arrMonth5to11 = arrMonth2.slice(4,11);

// Subtask results print on console
console.log(arrMonth5to11);
