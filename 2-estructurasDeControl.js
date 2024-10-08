// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
     if (numero % 2 === 0) {
      console.log("El número es par");
    } else {
      console.log("El número es impar");
    }
  }
  
  // Imprimir
  verificarParImpar(7);  // "El número es impar"
  verificarParImpar(10); // "El número es par"
  
}

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    if (edad < 18) {
    console.log("Menor de edad");
  } else if (edad >= 18 && edad <= 65) {
    console.log("Adulto");
  } else {
    console.log("Adulto mayor");
  }
}
// Imprimir
determinarCategoriaEdad(10);  // "Menor de edad"
determinarCategoriaEdad(30);  // "Adulto"
determinarCategoriaEdad(70);  // "Adulto mayor"
}

}

// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    //Funcion
function imprimirHastaCero(numero) {
  while (numero >= 0) {
    console.log(numero);
    numero--;
  }
}
// Imprimir
imprimirHastaCero(5); // Imprime: 5, 4, 3, 2, 1, 0
}
 let contador = 0;
  do {
    console.log("Estoy aprendiendo JavaScript");
    contador++;
  } while (contador < 5);
}

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    let contador = 0;
  do {
    console.log("Estoy aprendiendo JavaScript");
    contador++;
  } while (contador < 5);
}


}

// Imprimir
imprimirMensaje();
// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
     for (let i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// Imprimir
imprimirNumerosPares(10); // Imprime: 0, 2, 4, 6, 8, 10

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    
  for (let i = 1; i <= 10; i++) {
    if (i === 6) {
      break;
    }
    console.log(i);
  }
}

// Imprimir
detenerEnSeis(); // Imprime: 1, 2, 3, 4, 5

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
}

// Imprimir
saltarCinco(); // Imprime: 1, 2, 3, 4, 6, 7, 8, 9, 10

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
  let dia;
  switch (numero) {
    case 1:
      dia = "Lunes";
      break;
    case 2:
      dia = "Martes";
      break;
    case 3:
      dia = "Miércoles";
      break;
    case 4:
      dia = "Jueves";
      break;
    case 5:
      dia = "Viernes";
      break;
    case 6:
      dia = "Sábado";
      break;
    case 7:
      dia = "Domingo";
      break;
    default:
      dia = "Número inválido";
  }
  return dia;
}

// Imprimir
console.log(obtenerDiaDeLaSemana(1)); // "Lunes"
console.log(obtenerDiaDeLaSemana(5)); // "Viernes"
console.log(obtenerDiaDeLaSemana(7)); // "Domingo"
console.log(obtenerDiaDeLaSemana(10)); // "Número inválido"


// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    let esVocal = false;
  switch (caracter.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      esVocal = true;
      break;
    default:
      esVocal = false;
  }
  return esVocal;
}

// Ejemplo de uso
console.log(esVocal('a')); // true
console.log(esVocal('b')); // false
console.log(esVocal('E')); // true
console.log(esVocal('x')); // false

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
    console.log("Todos los números son positivos");
  } else if (a < 0 || b < 0 || c < 0) {
    console.log("Al menos uno de los números es negativo");
  } else if (a < 0 && b < 0 && c < 0) {
    console.log("Todos los números son negativos");
  } else {
    console.log("Hay una combinación de positivos y negativos");
  }
}

// Imprimir
evaluarNumeros(1, 2, 3);    // "Todos los números son positivos"
evaluarNumeros(-1, 2, 3);   // "Al menos uno de los números es negativo"
evaluarNumeros(-1, -2, -3); // "Todos los números son negativos"

// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};
