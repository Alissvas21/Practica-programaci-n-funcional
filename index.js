//funciín pura

/* function multiplicar(numero){
 return numero;
}

let resultado = multiplicar(10);

console.log(resultado); */

/*let totalcompra = 0;
function sumarPrecio(cantidad, valor){
    return totalcompra = (totalcompra + (cantidad*valor));

}

console.log(sumarPrecio(1,100));
console.log(sumarPrecio(1,100));
console.log(sumarPrecio(1,100));
console.log(sumarPrecio(1,100));
console.log(sumarPrecio(1,100));*/

// funcion normal 

/*function multiplicar(numero){
    return numero*numero
}

console.log(multiplicar(5))*/

//función composición funcional

/*function multiplicar(numero){
    return numero*numero
}

function suma (num1, num2){
    return multiplicar (num1) + multiplicar (num2);
}

console.log (suma(4,5))*/

// función recursiva 

/*function saludar(){
    console.log('Hola a todos')
    saludar();
}

saludar();*/

// arreglo o inicio elementos de cada arreglo

const listaNumero = (4,5,6,7,8);
const nuevaLista = [];

for (numero in listaNumero){
    console.log(listaNumero[numero])
    nuevaLista.push(listaNumero[numero]*2)
}

console.log(nuevaLista)