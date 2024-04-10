const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000; 
const ip = '10.10.3.147';   



// Middleware für das Parsen von JSON-Daten
app.use(bodyParser.json());

// Statische Dateien wie CSS und JS bereitstellen
app.use(express.static('public'));

// Middleware für das Parsen von JSON-Daten
app.use(bodyParser.json());


// Endpunkt für die Befehlsverarbeitung
app.post('/befehl', (req, res) => {
    const command = req.body.command;

    console.log('Empfangener Befehl:', command);

    // Hier kannst du den Befehl an den mBot senden
    sendCommandToMbot(command);

    res.send('Befehl empfangen und verarbeitet');
});

app.post('/parameters', (req, res) => {
    const { name, value } = req.body;
    console.log('Received parameters:', name, '=', value);

    // Send the parameters to the mBot
    sendParametersToMbot(name, value);

    res.send('Parameters received and processed');
});


const net = require('net');

function sendParametersToMbot(name, value) {
    const mBotIP = 'mBot_IP'; // Replace 'mBot_IP' with the actual IP address of your mBot
    const mBotPort = 8888; // Replace with the port your mBot listens on

    // Create a TCP client socket
    const client = new net.Socket();

    // Connect to the mBot
    client.connect(mBotPort, mBotIP, () => {
        console.log('Connected to mBot');
        // Send the data to the mBot
        client.write(JSON.stringify({ name, value }));
    });

    // Event listener for handling errors
    client.on('error', (error) => {
        console.error('Error:', error.message);
    });

    // Event listener for handling connection closure
    client.on('close', () => {
        console.log('Connection to mBot closed');
    });
}

function sendCommandToMbot(name, value) {
    // Define the IP address and port of the mBot
    const mBotIP = '10.10.1.28'; // Replace 'mBot_IP' with the actual IP address of your mBot
    const mBotPort = 3000; // Replace with the port your mBot listens on

    // Create a TCP client socket
    const client = new net.Socket();

    // Connect to the mBot
    client.connect(mBotPort, mBotIP, () => {
        console.log('Connected to mBot');
        // Send the command to the mBot
        client.write(JSON.stringify({ name, value }));
    });

    // Event listener for receiving data from the mBot (optional)
    client.on('data', (data) => {
        console.log('Received data from mBot:', data.toString());
    });

    // Event listener for handling errors
    client.on('error', (error) => {
        console.error('Error:', error.message);
    });

    // Event listener for handling connection closure
    client.on('close', () => {
        console.log('Connection to mBot closed');
    });
}


// Function to send command to mBot
function sendCommandToMbot(command) {
    // Define the IP address and port of the mBot
    const mBotIP = '10.10.1.28'; // Replace 'mBot_IP' with the actual IP address of your mBot
    const mBotPort = 3000; // Replace with the port your mBot listens on

    // Create a TCP client socket
    const client = new net.Socket();

    // Connect to the mBot
    client.connect(mBotPort, mBotIP, () => {
        console.log('Connected to mBot');
        // Send the command to the mBot
        client.write(command);
    });

    // Event listener for receiving data from the mBot (optional)
    client.on('data', (data) => {
        console.log('Received data from mBot:', data.toString());
    });

    // Event listener for handling errors
    client.on('error', (error) => {
        console.error('Error:', error.message);
    });

    // Event listener for handling connection closure
    client.on('close', () => {
        console.log('Connection to mBot closed');
    });
}

module.exports = sendCommandToMbot;


app.get('/movement.html', (req, res) => {

    res.sendFile(process.cwd()+"/public/html/movement.html");
    
});

app.get('/homepage.html', (req, res) => {

    res.sendFile(process.cwd()+"/public/html/homepage.html");
    
});

app.get('/joystick.html', (req, res) => {

    res.sendFile(process.cwd()+"/public/html/Joystick.html");
    
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
