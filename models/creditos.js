const mongoose = require('mongoose');

let creditosSchema = new mongoose.Schema({
	CantidadEstudiantes: Number,
	CreditosTotales: Number,
	TotalCosto: Number,
	Periodo: String,
	Estudiantes: Array,
	
});

module.exports = mongoose.model('credito', creditosSchema);


	