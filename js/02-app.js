//Problemas de no usar prototypes.

function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
};

const juan = new Cliente('Sebastian', 100);

function formatCliente(cliente) {
  const {nombre, saldo} = cliente;
  return `El cliente ${nombre} tiene un saldo de${saldo}.`
}

//Instancia de empresa.
function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
};

const bustter = new Empresa('Bustter', 1000000000, 'Motociclismo');

function formatEmpresa(empresa) {
  const {nombre, saldo, categoria} = empresa;
  return `La empresa ${nombre} tiene un saldo de ${saldo}, y pertenece a la categoria de ${categoria}`
}

console.log( formatEmpresa(bustter));