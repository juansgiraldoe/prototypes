//Herencia de prototypes.

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

function Persona(nombre, saldo, telefono) {
  //Heredar el constructor.
  Cliente.call(this, nombre, saldo)
  this.telefono = telefono;
}
//Clonar o asignar los protos antes de instanciar las variables.
Persona.prototype = Object.create( Cliente.prototype )
Persona.prototype.constructor = Cliente;


//Instanciarlo

const juan = new Persona('Juan', 10000, 3155562)
console.log(juan);
console.log(juan.mostrarMensaje());

Persona.prototype.mostrarTelefono = function () {
  return `El telefono de ${this.nombre} es ${this.telefono}`
}
console.log(juan.mostrarTelefono());