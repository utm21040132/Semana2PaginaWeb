/*
Desarrolla un programa que reciba como entrada las calificaciones de un grupo de estudiantes en una materia específica. El programa debe calcular y mostrar el promedio de calificaciones, la calificación más alta y la calificación más baja del grupo.

*/

//Programa 1
const calificaciones = [85, 90, 78, 92, 88, 76];

function sacarPromedios(calificaciones) {
    //Iniciamos variables
    let suma = 0;
    let calificacionMasAlta = calificaciones[0];
    let calificacionMasBaja = calificaciones[0];

    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
        
        if (calificaciones[i] > calificacionMasAlta) {
            calificacionMasAlta = calificaciones[i];
        }
        
        if (calificaciones[i] < calificacionMasBaja) {
            calificacionMasBaja = calificaciones[i];
        }
    }

    //Sacamos el promedio
    const promedio = suma / calificaciones.length;
    //Imprimimos
    console.log("Promedio de calificaciones: " + promedio.toFixed(2));
    console.log("Calificación más alta: " + calificacionMasAlta);
    console.log("Calificación más baja: " + calificacionMasBaja);
}
  
sacarPromedios(calificaciones);


//Programa 2

/*
Escribe un programa que solicite al usuario ingresar la cantidad y el precio de varios productos que ha comprado en una tienda. El programa debe calcular el total de la compra, aplicar un impuesto del 12%, y mostrar el monto total a pagar. 
*/


function calcularCompra() {
    let totalSinImpuesto = 0;
    const impuesto = 0.12;
        //El parse es para que el dato de entrada se haga float ya que un string no nos sirve
        //Prompt es para que salte una entrada de texto
    let cantidad = parseInt(prompt("¿Cuántos productos compró?"));

    for (let i = 0; i < cantidad; i++) {
        
        let precio = parseFloat(prompt("Ingrese el precio del producto " + (i + 1) + ":"));
        // (i + 1) solo enumera el articulo
        totalSinImpuesto += precio;
    }

    const totalConImpuesto = totalSinImpuesto * (1 + impuesto);

    console.log("Total sin impuesto: $" + totalSinImpuesto.toFixed(2));
    console.log("Total con impuesto (12%): $" + totalConImpuesto.toFixed(2));
}

calcularCompra();


//Programa 3

/*
Desarrolla un programa que permita al usuario ingresar una cantidad de dinero en dólares estadounidenses (USD) y luego convertir esa cantidad a euros (EUR) y pesos mexicanos (MXN). El programa debe utilizar tasas de cambio predefinidas y mostrar los montos convertidos. 
*/

function divisas() {

    let dolares = parseFloat(prompt("Ingrese la cantidad en dólares:"));

    let euros = dolares * 0.85;
    let pesosMexicanos = dolares * 19.90;

    console.log(dolares + " USD son equivalentes a " + euros.toFixed(2) + " EUR.");
    console.log(dolares + " USD son equivalentes a " + pesosMexicanos.toFixed(2) + " MXN.");
}

divisas();

//Programa 4

/*
Desarrolla un juego en el que la computadora "piense" en un número aleatorio entre 1 y 100, y el jugador tenga que adivinarlo. Después de cada intento, la computadora debe indicar si el número propuesto por el jugador es demasiado alto, demasiado bajo o correcto. El juego debe terminar cuando el jugador adivine correctamente el número.
*/

function juego() {

    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    //Math.floor(Math.random() * 100) + 1 genera un número entero entre 1 y 100
    let numeroDado = null;
    
   
    while (numeroDado !== numeroSecreto) {
        // Solicitar al jugador que ingrese su numero
        numeroDado = parseInt(prompt("Adivina el número entre 1 y 100:"));

        if (numeroDado > numeroSecreto) {
            console.log("Demasiado alto. Intenta de nuevo.");
        } else if (numeroDado < numeroSecreto) {
            console.log("Demasiado bajo. Intenta de nuevo.");
        } else if (numeroDado === numeroSecreto) {
            console.log("¡Correcto! El número es " + numeroSecreto + ".");
        } else {
            console.log("Por favor, ingresa un número válido.");
        }
    }
}

juego();
