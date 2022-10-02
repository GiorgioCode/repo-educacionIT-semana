// EJEMPLO CON IF 
var edad = parseInt(prompt("por favor, digite su edad"))
if (edad >= 0 && edad < 18) {
    alert("disculpe, solo se permite el ingreso a mayores de 18 años")
} else {
    alert("que disfrutes navegando por nuestro sitio!")
}
//EJEMPLO CREACION DE OBJETO DATE

var fecha = new Date();
var dia = fecha.getDay();
var fecha_completa = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
console.log(fecha_completa);

// EJEMPLO CON ELSE IF

var hora = new Date().getHours();
if (hora <= 13) {
    document.getElementById("mensaje1").innerHTML = "Buenos dias!";
} else if (hora > 13 && hora <=20) {
    document.getElementById("mensaje1").innerHTML = "Buenas tardes!";
} else if (hora > 20 && hora <=23) {
    document.getElementById("mensaje1").innerHTML = "Buenas tardes!";
}

// EL PROBLEMA DEL ELSE

alert("le informaremos cuanto le falta contar para llegar a 10")
var numero = prompt("ingrese un numero menor a 10")
if ( numero <= 10) {
    var calculo = 10 - numero
    alert("le falta contar "+calculo+"numeros mas para llegar a 10")
} else {
    alert("debe elegir un numero menor a 10 para poder asistirlo")
} // en este caso, si se introducen numeros negativos que cumplirian la condicion, rompen el programa

// EJEMPLO CON SWITCH
var mensaje2 = document.getElementById("mensaje2")
switch (dia) {
    case 0:
        mensaje2.innerText = "que buen domingo para hacer un asado"
        break;
    case 1:
        mensaje2.innerText = "Hoy es LUNES! hoy tenemos clase de JavaScript!"
        break;
    case 2:
        mensaje2.innerText = "que buen MARTES para estudiar JavaScript"
        break;
    case 3:
        mensaje2.innerText = "Hoy es MIERCOLES! hoy tenemos clase de JavaScript!"
        break;
    case 4:
        mensaje2.innerText = "que buen JUEVES para estudiar JavaScript"
        break;
    case 5:
        mensaje2.innerText = "que buen VIERNES finalizar la semana"
        break;
    case 6:
        mensaje2.innerText = "Hoy es SABADO! estamos en fin de semana"
        break;
    default:
        break;
}
