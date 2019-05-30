const Credito = require('./../models/creditos');

const insertarCreditos = (datos) => {
	return new Promise((resolve, reject) => {
		let credito = new Credito(datos);
		credito.save((err, creditoDB) => {
			if (err) {
				reject(err);
			}

			if (!creditoDB) {
				reject('no se puedo insertar Datos');
			}

			resolve({
				ok: true,
				credito: creditoDB
				 
			});
		});
		
	});
};

module.exports = { insertarCreditos };
