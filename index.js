const app = require('./config/server');
require('./app/routes/bloque')(app);

app.listen(app.get('port'),() => {
	console.log("El servidor está en: ", app.get('port'));
});

const { Blockchain, Transaccion} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const miLlave = ec.keyFromPrivate('772dcf672d039840baa294b8aaa5f6e6f288bcd5da1c2648f8e10fcbdf3d6dfa');
const cartera = miLlave.getPublic('hex');

let digiCoin = new Blockchain();

console.log("Minando.....");
console.log("----------------------------------------------------------------")
console.log("Balance de minero es: " + digiCoin.getDinero(cartera));
console.log("----------------------------------------------------------------")
digiCoin.cambiarDificultad(2);
const tx1 = new Transaccion(cartera,'llavePublicaDeAlguien',80);
tx1.signTransaccion(miLlave);
digiCoin.agregarTransaccion(tx1);
digiCoin.minarTransaccionesPendientes(cartera);

console.log("----------------------------------------------------------------")
console.log("Es la cadena valida???: " + digiCoin.CadenaEsValida());
console.log("----------------------------------------------------------------")
console.log("Balance de minero es: " + digiCoin.getDinero(cartera));
console.log("----------------------------------------------------------------")