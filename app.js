// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Create array that will contains the names:
let amigos =[];



function agregarAmigo(){
    // Función que acumula una lista llamada amigos a medida que se van ingresando en el campo id=Amigo.
    //alert("bienvenido");
    let texto = document.getElementById("amigo").value;   // Captura el valor ingresado en el campo id=amigo

    
    // Verificar si el campo está vacío, si está vacío genera mensaje, si tiene un valor lo adiciona a la lista amigos
    if(texto.length > 0) {  // Condición que vlida si el campo tiene datos ingresados
                amigos.push(texto); // Adiciona el valor a la lista 
                console.log(amigos); // Genera el listado en la consola (pruebas)
                document.getElementById("amigo").value=''; // Limpia el campo id=amigo

            }    
    else {
            alert("Debe ingresar un nombre"); // mensaje o condición si el campo id=amigo está vacío.
            }
            

}


function listarAmigos(){
    // Esta función genera el cargue de la lista de amigos a medida que se van adicionando con el botón agregar

    let listaAmigos =  document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // limpiar el contenido antes de agregar nuevos amigos
    
    amigos.forEach(amigo => {
        let li = document.createElement("li"); // Crea un elemento del tipo html li
        li.textContent  = amigo;    //  Adiciona a cada elemento li el valor de la variable amigo
        listaAmigos.appendChild(li);    // Adiciona a la lista de amigo los nombres de los amigos.
    });

}

function sortearAmigo(){
    let totalAmigos = amigos.length;  // Genera un conteo de la lista de amigos y almacena la cantidad en variable
    ganador = document.getElementById("resultado").innerHTML=""; // Limpia el contenido del ganador
    if(totalAmigos>=2){ // Generamos la condición
    let numeroGanador = Math.floor(Math.random()*totalAmigos)+1;  //Generamos el número aleatorio
    //console.log("total amigos:",totalAmigos, " Ganador:",numeroGanador);  //linea de prueba
    //console.log("el ganador es ", amigos[numeroGanador-1]);  // linea de prueba
    amigoGanador=amigos[numeroGanador-1];  // identifica el amigo ganador
    document.getElementById('resultado').innerHTML = "El ganador del sorteo es " + amigoGanador;  // Genera el resultado en pantalla
    }
    else {
        console.log("Ingrese un mínimo de 2 amigos antes de jugar amigos antes jugar");  // Mensaje de error.
    }
    
}

// Cargamos la función de generacion de contenido:
function generarContenido(){
    agregarAmigo();
    listarAmigos();

}
