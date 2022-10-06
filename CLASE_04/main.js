// FizzBuzz

// Escribir un programa que muestre en pantalla los numeros del 1 al 100
// pero que sistituya en la cuenta a los numeros multiplos de 3 por la palabra "Fizz",
// a los numeros multiplos de 5 por la palabra "Buzz" y a los numeros multiplos de 3 y de 5
//por la palabra "FizzBuzz".

//Ejemplo: 1,2,Fizz,4,Buzz,...

var ciclos = +prompt("cuantos terminos desea calcular?")
var mostrar = 0;

for(var i=1;i<=ciclos;i++){
    if (i%5==0) {
        mostrar = "Buzz"
    } else if (i%3==0) {
        mostrar = "Fizz"
    } else if(i%3==0 && i%5==0) {
        mostrar = "FizzBuzz"
    } else {
        mostrar = i
    }
    document.getElementById("fizzbuzz").innerHTML += mostrar+", "
}