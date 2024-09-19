/*
Crear 3 objetos de las siguientes cosas:
Carro
Casa
Humano
Acceder a las propiedades de cada objeto
Cambiar 3 propiedades de cada objeto
 

Crear 2 arreglos uno para nombres y otro para edades.
Acceder al arreglo de nombres en el índice 3, 5, 7 y 100
Acceder al arreglo de edades en el índice 7, 1, 3 y 100
Cambiar los índices 4,5,6 a otro valor de cada arreglo.

*/

/*
Crear 3 objetos de las siguientes cosas:
Carro
Casa
Humano
 */

const carro = {
    marca: "volkswagen",
    modelo: "jetta",
    color: "gris"
}

const casa = {
    calle: "panfilo natera",
    color: "negro",
    numero: 913
}

const humano = {
    genero: "si",
    cantidadExtremidades: 3,
    trabajo: "no hay"
}

/*
Acceder a las propiedades de cada objeto
Cambiar 3 propiedades de cada objeto 
*/

function imprimir() {
    console.log(carro.marca);
    console.log(carro.modelo);
    console.log(carro.color);
    console.log(casa.calle);
    console.log(casa.color);
    console.log(casa.numero);
    console.log(humano.cantidadExtremidades);
    console.log(humano.genero);
    console.log(humano.trabajo);
}

imprimir();

carro.color = "rojo";
carro.modelo = "W15";
carro.marca = "BMW";

casa.calle = "mentevideo";
casa.color = "blanco";
casa.numero = 12763;

humano.cantidadExtremidades = 4;
humano.genero = "marisco";
humano.trabajo = "taquero";

imprimir();

/*
Crear 2 arreglos uno para nombres y otro para edades.
Acceder al arreglo de nombres en el índice 3, 5, 7 y 100
Acceder al arreglo de edades en el índice 7, 1, 3 y 100
Cambiar los índices 4,5,6 a otro valor de cada arreglo.
*/

let nombre = ["Juan", "Jorge", "Edwin", "Leslie", "Dani", "Merequetengue"]
let edades = [21, 20, 19, 21, 22, 21, 32]

console.log(nombre[3]);
console.log(nombre[5]);
console.log(nombre[7]);
console.log(nombre[100]);

console.log(edades[7]);
console.log(edades[1]);
console.log(edades[3]);
console.log(edades[100]);

nombre[4] = "Principito";
nombre[5] = "Rey";
nombre[6] = "Vieja rata";

edades[4] = 43;
edades[5] = 34;
edades[6] = 54;

console.log(nombre);
console.log(edades);