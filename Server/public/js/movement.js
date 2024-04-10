document.addEventListener('DOMContentLoaded', function () {

    const sendCommand = async (command) => {
        try {
            const response = await fetch('http://10.10.3.147:3000/befehl', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ command })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.text();
            console.log(data); // Log response from server
        } catch (error) {
            console.error('Error:', error);
        }
    };
    //WASD Steuerung    let currentAction = null;
 
    // Funktion zur Ausführung der Aktion basierend auf der gedrückten Taste
    function performAction(action) {
        // Aktion ausführen
        console.log(action);
        sendCommand(action)
        document.getElementById("last_input").innerText = action;
    }
 
    // Eventlistener für Keydown
    document.addEventListener('keydown', function(event) {
        if (event.repeat) return; // Ignoriere wiederholte Tastenanschläge
 
        // Aktion basierend auf der gedrückten Taste ausführen
        if (event.key == 'w') {
            performAction('forward'); // Einmalig senden
        } else if (event.key == 'a') {
            performAction('left');
        } else if (event.key == 'd') {
            performAction('right');
        } else if (event.key == 's') {
            performAction('backward');
        }
    });
 
    // Eventlistener für Keyup
    document.addEventListener('keyup', function(event) {
        // 'Stop' Aktion senden, wenn eine Taste losgelassen wird
        performAction('stop');
    });


    // Elemente abrufen
    const leftArea = document.querySelector('.left');
    const rightArea = document.querySelector('.right');
    const forwardArea = document.querySelector('.forward');
    const backwardArea = document.querySelector('.backward');
    
      // Funktion, die bei 'mouseover' ausgelöst wird
      function handleMouseOver() {
            console.log('Mouse Over!');
            // Füge hier den Code hinzu, der bei jedem 'mouseover' ausgeführt werden soll
        }

        // Funktion, die bei 'mouseout' ausgelöst wird
        function handleMouseOut() {
            console.log('Mouse Out!');
            // Füge hier den Code hinzu, der bei jedem 'mouseout' ausgeführt werden soll
        }

        // 'mouseover'-Event-Listener für jeden Bereich
        leftArea.addEventListener('mouseover', () => {
            console.log("left");
            handleMouseOver();
        });

        rightArea.addEventListener('mouseover', () => {
            console.log("right");
            handleMouseOver();
        });

        forwardArea.addEventListener('mouseover', () => {
            console.log("forward");
            handleMouseOver();
        });

        backwardArea.addEventListener('mouseover', () => {
            console.log("backward");
            handleMouseOver();
        });


        // 'mouseout'-Event-Listener für jeden Bereich
        leftArea.addEventListener('mouseout', () => {
            handleMouseOut();
        });

        rightArea.addEventListener('mouseout', () => {
            handleMouseOut();
        });

        forwardArea.addEventListener('mouseout', () => {
            handleMouseOut();
        });

        backwardArea.addEventListener('mouseout', () => {
            handleMouseOut();
        });
});