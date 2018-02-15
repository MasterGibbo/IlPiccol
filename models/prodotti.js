var mongoose = require('mongoose');
//var Utente = require('utenti.js');
var Schema = mongoose.Schema;


var schemaProdotto = new Schema({
	nome: String,
	prezzo: Number,
	produttore: String, 
	quantita: Number,
	//immagine: [ObjectId] ?
	commenti: [{testo: String, data: Date, autore: String, voti: Number}],
	voto: Number,
	tags: [String]
});

module.exports = mongoose.model('Prodotto', schemaProdotto);