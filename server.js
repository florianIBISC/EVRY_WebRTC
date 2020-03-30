/*var express = require('express')
var fs = require('fs')
var http = require('http')
var app = express()
const port = 3000;


// Redirect all traffic to index.html
app.use((req, res) => res.sendFile(`${__dirname}/index.html`));
app.use((req, res) => res.sendFile(`${__dirname}/script.js`));

http.createServer({}, app)
.listen(port, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
});*/

const https = require("https")
var fs = require('fs')
const finalhandler = require("finalhandler")
const serveStatic = require("serve-static")
 
// Crée une fonction middleware qui servira le contenu du dossier courant de façon statique
const serve = serveStatic("./")
 
// Création du serveur
const server = https.createServer({
	key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')},function(req, res) {
    serve(req, res, finalhandler(req, res)) // Traitement de la requête par le middleware
})
 
// Lancement
server.listen(8080, function() {
    console.log("Static server sur http://localhost:8080")
})
