const https = require ('node:https');
const fs = require('node:fs');
const { randomBytes } = require ('node:crypto');

const opciones = {
	key: fs.readFileSync('clave.pem'),
	cert: fs.readFileSync('certificado.pem')
};


https.createServer(opciones, (req,res) => {
	if (req.url === '/login') {
		const sesion = randomBytes(32).toString('hex');
		res.setHeader('Set-Cookie',
			'__Host-session=${sesion}; HttpOnly; Secure; SameSte=Struct; Path=/');
		res.end('Cookie de sesion envada');
		return;
	}

	if (req.url==='/ver'){
		res.setHeader('Content-Type', 'text/plain; charset=utf-8');
		res.end(req.headers.cookie || 'Sin cookie');
		return;
	}

	res.statusCode = 404;
	res.end('Ruta no encontrada');
	
}).listen(3443, '127.0.0.1');
