function Sistema() {
    this.usuarios = {};
    this.agregarUsuario = function (nick) {
        if(!this.usuarios[nick]){
            console.log("nuevo usuario con nick:" +nick);
            this.usuarios[nick] = new Usuario(nick);
        }
        else{
            console.log("el nick esta en uso");
        }
    }
    this.obtenerUsuarios=function(){
        return this.usuarios;
    } 

    this.obtenerTodosNick=function(){
        return Object.keys(this.usuarios);
    }
    this.usuarioActivo=function (nick){
        // if(!this.usuarios[nick]){
        //     console.log("Este usuario no existe:" +nick);
        //     return false;
        // }
        // else{
        //     console.log("este usuario ya existe");
        //     return true;
        // }
        return(nick in this.usuarios);
    }
    this.eliminarUsuario=function (nick){
        if(this.usuarios[nick]){
            console.log("El usuario"+nick+"ha sido eliminado")
            delete this.usuarios[nick];
        }
        else{
            console.log("el usuario no existe")
        }
    }
      this.numeroUsuarios=function(){
        let lista=Object.keys(this.usuarios);
        return lista.length;
    }
   
}

function Usuario(nick) {
    this.nick = nick;
}

module.exports.Sistema=Sistema