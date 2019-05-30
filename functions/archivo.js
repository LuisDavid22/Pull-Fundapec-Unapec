const fs = require('fs');

const leerArchivo = (ruta) => {
	let datos = fs.readFileSync(ruta);
	let creditos = JSON.parse(datos);

	return creditos;
};
 


module.exports = { leerArchivo };
