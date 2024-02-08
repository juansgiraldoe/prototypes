//Prototypes.

//Object literal.
const cliente = {
  nombre: 'Juan',
  saldo: 500,
}

console.log(cliente);
console.log(typeof cliente);

//Object constructor: es mas dinamico.

function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const juan = new Cliente('Sebastian', 100);

console.log(juan);