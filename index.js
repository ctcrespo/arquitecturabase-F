const fs = require("fs");
const express = require('express');
const app = express(); 
const modelo = require("./Servidor/modelo.js"); 
const PORT = process.env.PORT || 3000; 

app.use(express.static(__dirname + "/")); 

let sistema=new modelo.Sistema(); 

app.get("/", function(request,response){ 
    var contenido=fs.readFileSync(__dirname+"/Cliente/index.html");
    response.setHeader('Content-Type', 'text/html'); 
    response.send(contenido); 
}); 

    app.listen(PORT, () => { 
        console.log(`App está escuchando en el puerto ${PORT}`); 
        console.log('Ctrl+C para salir'); 
});
/**
 * GUARDAR CAMBIOS
 * git add .
 * git commit -"cambios"
 * git push
 */