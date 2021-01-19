const fs = require('fs');
fs.readFile("hola.txt",
(error,data) => 
{
    if (error) throw error;
    console.log(data.toString());
});

setImmediate( 
()=> {
    console.log("Esto se ejecuta mientras se lee el archivo");
});