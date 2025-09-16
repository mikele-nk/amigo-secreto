let amigos= [];
const ingresoNombres = document.querySelector('#amigo');
const listaAmigos = document.querySelector('#listaAmigos');
const amigoSorteado = document.getElementById('resultado');



// AGREGAR AMIGO
function agregarAmigo(nombre) {
    let inputAmigos = document.getElementById("amigo");
    let amigo= inputAmigos.value;
    
    if (amigo ===""){
        alert("por favor, ingresa el nombre de un amigo");
    
    }else{

    if (amigos.includes(amigo)){
        alert("ese amigo ya fue agregado");
        

    }else{
        actualizarLista(); 
    }
    ingresoNombres.value= ""
   }
  

    
    
}
// actualizar lista 

function actualizarLista() {
    amigoSorteado.innerHTML= "";
    amigos.push(ingresoNombres.value);
    listaAmigos.innerHTML= "";
    for (let amigo in amigos){
        const liAmigo = document.createElement("li");
        liAmigo.innerHTML= amigos[amigo];
        listaAmigos.appendChild(liAmigo);
    }
}

// SORTEAR AMIGO
function sortearAmigo() {
    if (amigos.length > 0){
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];

        const liSorteado = document.createElement('li');
        liSorteado.innerHTML = `El amigo secreto es ${amigoSecreto}`;

        amigoSorteado.appendChild(liSorteado);
    listaAmigos.innerHTML= "";
    // vacio el array para generar una nueva lista
    amigos= [];


    }
}
