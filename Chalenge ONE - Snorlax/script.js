/*LA LLAVE DEL REEMPLAZO ES LA SIGUIENTE
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */


//FUNCION DE ENCRIPTADO DE TEXTO DE ENTRADA //

const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function encriptar() {
//OBTENER TEXTO Y MDOFICARLO PARA QUE ESTÉ EN MINÚSCULAS SIN ACENTOS//
    let stringEncriptada = document.getElementById('texto').value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // RECORRER CARACTERES Y SUSTITUIR VOCALES POR LAS LLAVES DE ENCRIPTADO//
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    document.getElementById('mensajeEncriptado').innerHTML = stringEncriptada ;
    document.getElementById('snorlax').style.visibility = 'hidden';
    document.getElementById('botonCopiar').style.visibility = 'visible';
}

// FUNCION DE DESENCRIPTADO DE TEXTO DE ENTRADA// 
function desencriptar() {

    let stringDesencriptada = document.getElementById('texto').value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // RECORRER CARACTERES Y SUSTITUIR LAS LLAVES DE ENCRIPTADO POR VOCALES PARA DESENCRIPTAR//
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    document.getElementById('mensajeEncriptado').innerHTML = `<mensaje>${stringDesencriptada}</mensaje>`
    document.getElementById('snorlax').style.visibility = 'hidden';
    document.getElementById('botonCopiar').style.visibility = 'visible'
}

// FUNCION DE COPIAR MENSAJE ENCRIPTADO O DESENCRIPTADO HECHO CON ESTE METODO QUE AUNQUE ESTA DESACTUALIZADO//
// Y NO RECOMENDADO CON EL NUEVO ENFOQUE USANDO API ME PARECIO MUY COMPLICADO PARA MI NIVEL ACTUAL //


let boton = document.getElementById("botonCopiar");
let divTexto = document.getElementById("mensajeEncriptado");

boton.addEventListener("click", function() {    
    let textoTemporal = document.createElement("input");
    textoTemporal.value = divTexto.textContent;    
    document.body.appendChild(textoTemporal);    
    textoTemporal.select();    
    document.execCommand("copy");    
    document.body.removeChild(textoTemporal);    
});
