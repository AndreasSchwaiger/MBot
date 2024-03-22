document.addEventListener('DOMContentLoaded', function () {

    //WASD Steuerung
    document.addEventListener('keydown', function(event) {
        if ((event.key == 'w' )) {
            console.log(event.key + "up");
            document.getElementById("last_input").innerText =  event.key;
        } else if ((event.key == 'a' )) {
            console.log(event.key + "left");
            document.getElementById("last_input").innerText =  event.key;
        } else if ((event.key == 'd' )) {
            console.log(event.key + "right");
            document.getElementById("last_input").innerText =  event.key;
        } else if ((event.key == 's' )) {
            console.log(event.key + "down");
            document.getElementById("last_input").innerText =  event.key;
        } else {
        }
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