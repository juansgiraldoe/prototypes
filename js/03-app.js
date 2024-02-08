//El proto determina funciones a las que solo tiene acceso cierto objeto.

function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
};

Cliente.prototype.tipoCliente = function () {
  let tipo;
  if ( this.saldo > 10000) {
    tipo = 'Gold';
  } else if ( this.saldo > 5000 ){
    tipo = 'Platinum';
  } else {
    tipo = 'Normal';
  }
  return tipo;
}

Cliente.prototype.retiro = function (r) {
  this.saldo -= r;
}

Cliente.prototype.mostrarMensaje = function () {
  return `El cliente ${this.nombre} tiene un saldo de ${this.saldo} y es de tipo ${this.tipoCliente()}`
}
//Instanciarlo.
const pedro = new Cliente('Pedro', 4000);

pedro.retiro(100);

console.log(pedro.mostrarMensaje());

console.log(pedro);