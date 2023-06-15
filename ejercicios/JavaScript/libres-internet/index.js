process.stdin.resume();
process.stdin.setEncoding("utf8");
// Your code here!

function sumaRecursivaEnteros(n) {
  if (n < 1) {
    return 0;
  } else {
    return n + sumaRecursivaEnteros(n - 1);
  }
}

console.log(sumaRecursivaEnteros(3));
// function cuentaAtras(numero) {
//   // Condición base: Si el número que recibe es
//   // menor de 0 entonces salimos de la función
//   if (numero < 0) { return }

//   // Si el número era mayor o igual a 0, lo mostramos
//   console.log(numero)

//   // Y llamamos a la función con el número anterior
//   cuentaAtras(numero - 1)
// }
// cuentaAtras(3)

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(6));

let frutas = ["🍎", "🍌", "🍓"];

for (let fruta of frutas) {
  console.log(fruta); // imprime el elemento en la posición i
}

////////////////
function sumarPares(numeros) {
  let suma = 0;
  // tu código aquí
  // for(let numero of numeros){
  //   numero % 2 ===0 ? suma += numero : 0 ;
  // }
  numeros.forEach((num) => (num % 2 === 0 ? (suma += num) : undefined));
  return suma;
}
console.log(sumarPares(1, 2, 1, 3, 6, 5, 8, 7, 4));
///////////////////
function acabanEnA(words) {
  // tu código aquí
  const result = words.every((word) => word.endsWith("a")) ? true : false;
  console.log(result);
  return result;
}
console.log(acabanEnA(["casa", "asa", "taza", "coche"]));
////////////////////

function sortAbsoluteNumbers(numbers) {
  // tu código aquí
  numbers.sort((a, b) => Math.abs(a) - Math.abs(b));
  return numbers;
}

console.log(sortAbsoluteNumbers([-1, 2, 3, 4, -5, 6, 7, 8, -9]));
/////////////////

function buscaPalabras(words, word) {
  // tu código aquí
  const indiceWord = words.indexOf(word);
  const palLargas = words.filter((w) => w.length > indiceWord);
  return palLargas;
}

console.log(buscaPalabras(["casa", "coche"], "casa"));
console.log(buscaPalabras(["play", "balon", "asa", "taza", "tio"], "tio"));
console.log(
  buscaPalabras(["play", "midu", "asa", "libro", "lino", "dino"], "dino")
);

//----------MATRICES - FILA-COLUMNA------

const matrix = [
  ["HTML", "CSS", "JavaScript"],
  ["Java", "C++", "Python"],
  ["Ruby", "Go", "Swift"],
];
function findJavaScript(matrix) {
  // tu código aquí

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "JavaScript") {
        return [i, j];
      }

      //console.log(matrix[i][j]);
    }
  }

  return [-1, -1];
}

const position = findJavaScript(matrix);
console.log(position);

//--Minimi y maximo------
function minAndMaxWord(words) {
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < words.length; i++) {
    if (words[i] < words[minIndex]) {
      minIndex = i;
    }
    if (words[i] > words[maxIndex]) {
      maxIndex = i;
    }
  }

  return [minIndex, maxIndex];
}

minAndMaxWord([2, 1, 3, 4, 5, 6, 7, 8, 9]);
minAndMaxWord([999, 255, 121]);
