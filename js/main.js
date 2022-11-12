//Consigna #2: A través de un callback asociado al evento DOMContentLoaded de document, escribir en la consola el texto "Contenido del DOM cargado"
window.addEventListener('DOMContentLoaded', () => 
{
    console.log("Contenido del DOM cargado.");

    //Variables Globales
    let origen = document.getElementById('origen');
    let input = document.getElementsByTagName('input');
    let button = document.querySelector('button');
    let destino = document.getElementById('destino');
    
    //Consigna #3: Cargar desde JS el value del textarea con el siguiente contenido: <p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>
    origen.value = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>'

    /*Consigna #4: Cuando se dispare el evento input del textarea, obtener un HTMLCollection con todos los <input> de la página y 
    cambiar a false su propiedad disabled para que los mismos dejen de estar deshabilitados. Hacer lo mismo con el botón que falta.*/
    origen.addEventListener('input', () => {
        for (let i = 0; i < input.length; i++) {
            input[i].removeAttribute('disabled')
            button.removeAttribute('disabled')
        }
    })
    
    //Consigna #5: Programar los 5 botones superiores para que cumplan estas funciones:
    
    //-a Botón "Reemplazar": reemplaza el contenido del div destino por el contenido del textarea origen.
    input[0].addEventListener("click", () => {
        destino.innerHTML = origen.value
    })

     //Función Agregar"
    function Agregar(){
        let parrafo = document.createElement('p')
        parrafo.innerHTML = origen.value
        destino.appendChild(parrafo)
    }

    //-b Botón "Agregar": agrega el contenido del textarea origen al contenido del div destino.
    input[1].addEventListener("click", Agregar)

    // -c Botón "Agregar 5 veces": agrega 5 veces el contenido del textarea origen al contenido del div destino.
    input[2].addEventListener("click", () => {
        for (let i = 0; i < 5; i++) {
            Agregar()
        }
    })
    
    // -d Botón "Agregar 10 veces": agrega 10 veces el contenido del textarea origen al contenido del div destino.
    input[3].addEventListener("click", () => {
        for (let i = 0; i < 10; i++) {
            Agregar()
        }
    })

    // -e Botón "Agregar n veces": agrega la cantidad de veces que indique el usuario (a partir de un prompt) el contenido del textarea origen al contenido del div destino.
    input[4].addEventListener("click", () => {
        let number = Number(prompt('Inserte un número'))
        for (let i = 0; i < number; i++) {
            Agregar()
        }
    })

    //Consigna #6: Programar los 3 botones inferiores para que cumplan estas funciones

    //-a Botón "Vaciar": vacía el contenido del div destino.
    input[5].addEventListener("click", () => {
        destino.innerHTML = ''
    })

    //-b Botón "Convertir a mayúsculas": convierte en mayúsculas el contenido del div destino.
    input[6].addEventListener("click", () => {
        destino.innerHTML = destino.innerHTML.toUpperCase()
    })

    //-c "Botón "Convertir a minúsculas": convierte en minúsculas el contenido del div destino.
    button.addEventListener("click", () => {
        destino.innerHTML = destino.innerHTML.toLowerCase()
    })
    

    // Consigna #7: Una vez terminados los puntos anteriores, obtener un HTMLCollection con todos los <li> de la página y agregar al inicio de su contenido el texto "[Ok] ".
    let li = document.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
        li[i].innerText = '[Ok] ' + li[i].innerText
    }
});