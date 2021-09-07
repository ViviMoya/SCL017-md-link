/*  module.exports = () => {
  // ...
};*/
const chalk = require('chalk');
const fs = require('fs');
// const route = __dirname; // dirname -> obtiene la carpeta principal de un archivo
const route = process.argv[2]; //podemos usarlo pero hay que pasarle la ruta ej: 'node index ./ si quiero ver los archivos en mi carpeta'

//leer el contenido de un directorio
fs.readdir(route, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach(file => {
      console.log(chalk.green(file));
      console.log(chalk.blue.underline.bold(file.includes('.md')));
    })
  }
});

