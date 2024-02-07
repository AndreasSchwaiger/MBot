const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; 
//const ip = '10.10.0.172';   

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
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}/befehl`);
});


// online
/*
app.listen(port, ip, () => {
    console.log(`Server läuft auf http://${ip}:${port}/befehl`);
});

*/