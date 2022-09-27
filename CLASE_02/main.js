console.log("############################################### ")
console.log("#################  OPERADORES LÓGICOS  ######## ")
console.log("############################################### ")

//ASIGNAMOS VARIABLES X E Y
var x = 7;
var y = 4;

//OPERADOR AND &&

(x < 10 && y > 1); // true 
(x < 10 && y < 1); // false

//OPERADOR AND ||

(x == 5 || y == 5); // false 
(x == 7 || y == 0); // true
(x == 0 || y == 4); // true
(x == 7 || y == 4); // true

//OPERADOR NEGACIÓN

var verdadero = true
!verdadero //false


console.log("############################################### ")
console.log("##############  Interaccion con HTML   ######## ")
console.log("############################################### ")

//getElementById
var titulo = document.getElementById("titulo")
titulo.className = "fondo_azul letra_grande_blanca"

//getElementsByClassName
var fruta = document.getElementsByClassName("fruta")
console.log(fruta)
fruta[0].className = "estilo_fruta"

//getElementsByTagName
var item_lista = document.getElementsByTagName("li")
item_lista[3].className = "estilo_fruta"

//querySelectorAll
var items_lista = document.querySelectorAll(".fruta")
items_lista.innerText = "estilo_fruta"
console.log(items_lista)

//innerText
var titulo_principal = document.getElementById("titulo_principal")
titulo_principal.innerText = "Hola EducacionIT!"

//value
document.getElementById("nombre").value = "pepe"

// Crear nodo de tipo Elemento, etiqueta p
var parrafo = document.createElement("p");
// Insertar HTML interno
parrafo.innerHTML = "<h2>¡Hola Estudiantes de JavaScript!</h2>"; 
// Añadir el nodo Element como hijo de body
document.body.append(parrafo);

