const fs = require('fs');

const leerArchivo = () => {
	let datos = fs.readFileSync('Creditos.json');
	let creditos = JSON.parse(datos);

	return creditos;
};
 


module.exports = { leerArchivo };
