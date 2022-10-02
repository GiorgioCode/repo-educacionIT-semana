
//FOR

// Solicitamos un valor al usuario
var ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let indice = 1; indice <= 10; indice++) {
    var resultado = ingresarNumero * indice ;
    console.log(ingresarNumero +" X "+ indice +" = "+ resultado);
}


// WHILE

var entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}

// DO WHILE

var repetir = false; //se define afuera para no redefinir en cada iteracion
do{
alert("Este mensaje aparecerá hasta que usted no quiera.");
repetir = confirm("desea ver de nuevo el mensaje?")
}while(repetir)

// FIZZBUZZ
// Escribir un programa que muestre en pantalla los números del 1 al 100, 
// sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 
// por “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5
// por la palabra “fizzbuzz”.

var terminos = prompt("cuantos terminos de sucecion desea calcular?");
var ciclos = parseInt(terminos);
var mostrar = 0;

for (let i = 1; i <= ciclos; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        mostrar = "FizzBuzz";
    } else if (i % 3 == 0) {
        mostrar = "Fizz";
    } else if (i % 5 == 0) {
        mostrar = "Buzz";
    } else {
        mostrar = i;
    }
    document.getElementById("fizzbuzz").innerHTML += mostrar+", "
}