const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000; 
const ip = '10.10.3.147';   


// Middleware für das Parsen von JSON-Daten
app.use(bodyParser.json());


// Endpunkt für die Befehlsverarbeitung
app.post('/befehl', (req, res) => {
    const command = req.body.command;
    console.log('Empfangener Befehl:', command);

    // Hier kannst du den Befehl an den mBot senden

    res.send('Befehl empfangen und verarbeitet');
});


app.get('/movement', (req, res) => {

    res.sendFile(process.cwd()+"/html/movement.html");
    
});

// local
/*

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}/befehl`);
});

*/


const server = app.listen(port, '0.0.0.0', () => {
    const address = server.address();
    console.log(`Server läuft auf http://${address.address}:${address.port}/befehl`);
});
