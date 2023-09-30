const modelo = require("./modelo.js");
describe('El sistema', function() {
  let sistema;

  beforeEach(function() {
    sistema=new modelo.Sistema();
   
  });

  it('inicialmente no hay usuarios', function (){
    expect(sistema.numeroUsuarios()).toEqual(0);
 });

 it('Numero usuarios',function(){
  let lista=sistema.obtenerUsuarios();
  expect(Object.keys(lista).length).toEqual(0);
  sistema.agregarUsuario("pepe");
  expect(Object.keys(lista).length).toEqual(1);
});

 it('Añadir usuario',function(){
    sistema.agregarUsuario("pepe");
    expect(sistema.numeroUsuarios())>0;
    expect(sistema.usuarios["pepe"].nick).toEqual("pepe");
 });

 it('Obtener usuarios',function(){
  let lista=sistema.obtenerUsuarios();
  expect(Object.keys(lista).length).toEqual(0);
  sistema.agregarUsuario("pepe");
  sistema.agregarUsuario("carla");
  lista=sistema.obtenerUsuarios()
  expect(Object.keys(lista).length).toEqual(2);
});

it('Eliminar usuario',function(){
  expect(sistema.numeroUsuarios()).toEqual(0);
  sistema.agregarUsuario("pepe");
  expect(sistema.numeroUsuarios()).toEqual(1);
  sistema.eliminarUsuario("pepe");
  expect(sistema.numeroUsuarios()).toEqual(0);
});

it('Usuario Activo',function(){
  sistema.agregarUsuario("pepe");
  expect(sistema.usuarioActivo("pepe")).toEqual(true);
  sistema.eliminarUsuario("pepe");
  expect(sistema.usuarioActivo("pepe")).toEqual(false);
});


})