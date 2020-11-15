// console.log("Hola desde el archivo JS");

//var nombre = prompt ("Hola! ¿Cual es tu nombre?")
//alert ("Hola " + nombre + "! Bienvenido a MediaFit!")

//var numero = 50
//var edad= prompt ("Cuantos años tenes " + nombre + "?")
//var edadParseada = parseInt(edad)
//alert(50+parseInt(edad))


//var dia = prompt ("Elegí un dia para empezar a entrenar (Lunes a Viernes)")
//var hora = prompt ("Elegí en que horario queres entrenar (10 a 22 hs)")
//alert ("Tu turno quedo reservado para el dia " + dia + " a las " + hora + "hs. ¡Te esperamos!.") 

//let resultado = 5;

//if ( resultado > 10) {
//    console.log("Resultado es mayor que 10");
//} else if (resultado == 10) { 
//    console.log("Resultado es igual que 10");
//} else {
//    console.log("Resultado es menor a 10");
//}

let tipoString = "Hola soy un string;"

let tipoNumberInt = 15;
let tipoNumberFloat = 15.512312;

let tipoBoolean1 = true;
let tipoBoolean2 = false;

let comparacion = Number("15")

console.log(typeof comparacion)
console.log(comparacion)


// After

var condicion1 = false;
var condicion2 = false;

if (condicion1) {
    console.log("Ocurrio la condicion 1.")
}

else if (condicion2) {
    console.log("Ocurrio la condicion 2.")
}
else {
    console.log("No ocurrio nada.")
}



var mostrado = false

var permiteMensajes = true;

if (!mostrado && permiteMensajes) {
    alert("ALERTA. Es la primera vez que se muestra este mensaje.");
    mostrado = true;
}
if (!permiteMensajes) {
    console.log("El usuario no permite mensajes.")
}
if (mostrado) {
    alert("ALERTA. Es la segunda vez que se muestra este mensaje.")    
}

var numero1 = 5;
var numero2 = 8;

if ((numero1 > numero2) || numero2 == 8) {
    alert("Acertaste");
}


var saludo = prompt("Puedes saludar?")

if(saludo == "Hola"){
    alert("Hola, como estas?")
}