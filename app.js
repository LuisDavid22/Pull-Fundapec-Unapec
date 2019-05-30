const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/unapecDB', { useNewUrlParser: true }, (err, res) => {
	if (err) throw err;
});

const archivo = require('./functions/archivo');
const db = require('./functions/database');

const insertarDatos = async () => {
	console.log('Leyendo archivo...\n\n');
	let creditos = archivo.leerArchivo();
	
	console.log(creditos);
	console.log('\n\n')
	
   db.insertarCreditos(creditos);
};

try {
	insertarDatos();

	console.log('Datos insertados correctamente');
  }
  catch(err) {
	console.log(err);
  }
