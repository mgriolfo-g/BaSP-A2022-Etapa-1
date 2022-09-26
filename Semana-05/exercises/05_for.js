//5.For

// Script start declaration on console
console.log('**********Script start: 05_for.js**********');


// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para
// mostrar una alerta utilizando cada una de las palabras.

// Subtask start declaration on console
console.log('-Subtask 5a:');

var arrWord = ['first','second','third','fourth','fifth'];

// Subtask results print on console & alert
for (var i = 0; i < arrWord.length; i++) {
    alert(arrWord[i]);
    console.log(arrWord[i]);
}


// b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada
// palabra modificada.

// Subtask start declaration on console
console.log('-Subtask 5b:');


// Subtask results print on console & alert
for (var i = 0; i < arrWord.length; i++) {
    arrWord[i] = arrWord[i].substring(0,1).toUpperCase() + arrWord[i].substring(1).toLowerCase();
    alert(arrWord[i]);
}


/*
 * c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
 * bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la
 * cadena completa.
 */

// Subtask start declaration on console
console.log('-Subtask 5c:');

var sentence = '';

for (var i = 0; i < arrWord.length; i++) {
    sentence += arrWord[i] + ' ';
}

// Subtask results print on console & alert
alert(sentence);


/*
 * d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
 * es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0
 *  hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
 */

// Subtask start declaration on console
console.log('-Subtask 5d:');

var arrNum = [];

for (var i = 0; i < 10; i++) {
    arrNum.push(i);
}

// Subtask results print on console
console.log(arrNum);