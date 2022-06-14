//Se inicia el juego declarando en 0 el numero de juegos y luego se solicita ingresar la cantidad a jugar.
do {
    var cant_juegos = prompt("¿Cuantas veces quieres jugar?");
    var cant_juegos = parseInt(cant_juegos); }
while (isNaN(cant_juegos) || cant_juegos < 0) 

//El juego en si, repitiendose segun la cantidad de veces señaladas.
for (var i = 0; i < cant_juegos; i++) {

//Solicitar al usuario su jugada.
var jugada_usuario = prompt("Elige entre: piedra, papel o tijeras: ");

//En caso de error de ingreso
while (jugada_usuario != "piedra" && jugada_usuario != "papel" && jugada_usuario != "tijeras") {
var jugada_usuario = prompt("Sólo con minúsculas, elige entre piedra, papel o tijeras:") };

//Declaracion de la jugada de la consola.
var jugada_consola = Math.floor(Math.random() * 3) + 1;
if (jugada_consola == 1) { jugada_consola = "piedra" }
else if (jugada_consola == 2) { jugada_consola = "papel" }
else if (jugada_consola == 3) { jugada_consola = "tijeras" }

//Se comparan ambas jugadas.
var resultado = function (jugada_usuario, jugada_consola) {
    if (jugada_usuario === jugada_consola) {
        return "Haz Empatado con la computadora :P"; }
            if (jugada_usuario === "piedra") {
                if (jugada_consola === "tijeras") {
                    return "Has ganado a la computadora :D"; }
                        else { 
                            return "Has perdido con la computadora :(" }
        }

    if (jugada_usuario === "papel") {
        if (jugada_consola === "piedra") {
            return "Haz ganado a la computadora :D"; }
                else { 
                    return "Has perdido con la computadora :(" }
        }

    if (jugada_usuario === "tijeras") {
        if (jugada_consola === "papel") {
            return "Haz ganado a la computadora :D"; }
                else { 
                    return "Has perdido con la computadora :(" }
        }
    };

//Se despliega el resumen del juego.
alert("Tu jugada ha sido " + jugada_usuario + " y tu oponente ha jugado " + jugada_consola + ". " + resultado(jugada_usuario, jugada_consola));
}