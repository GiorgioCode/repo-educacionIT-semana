const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}];

for (const item of productos) {
    let contenedor = document.getElementById("contenedorDatos");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML += `<h3> ID: ${item.id}</h3>
                            <p>  Producto: ${item.nombre}</p>
                            <b> $ ${item.precio}</b>`;
    
}

//mostrar fecha y hora
function mostrarFecha() {
    document.getElementById("fechayhora").innerHTML = Date();
}

//mostrar coordenadas
function funcionCoordenadas(e) {
    x = e.clientX;
    y = e.clientY;
    coor = "Coordenadas: (" + x + "," + y + ")";
    document.getElementById("textoCoordenadas").innerHTML = coor
}

function limpiarCoordenadas() {
    document.getElementById("textoCoordenadas").innerHTML = "";
}
//ESCUCHAR EVENTO EN BOTON
let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click", respuestaClick)
function respuestaClick(){
  alert("Alguien ha clickeado el boton =)");
}

//INPUT DE TEXTO

let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target
    //Obtengo el valor del primero hijo <input type="text"> con formulario.children[0].value
    //Obtengo el valor del segundo hijo <input type="number"> con formulario.children[1].value
    alert("FORMULARIO ENVIADO. El nombre es "+formulario.children[0].value+" y la edad es "+formulario.children[1].value)
}


