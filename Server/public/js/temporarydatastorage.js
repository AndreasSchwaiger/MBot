// Function to save data
function saveData() {
    var color = document.getElementById("color").value;
    var volume = document.getElementById("volume").value;
    var speed = document.getElementById("speed").value;
    
    sendValueCommand("color", color)
    sendValueCommand("volume", volume)
    sendValueCommand("speed", speed)

    localStorage.setItem("color", color);
    localStorage.setItem("volume", volume);
    localStorage.setItem("speed", speed);
    
    displaySavedData();
}

const sendValueCommand = async (nameData, valueData) => {
    try {
        const response = await fetch('http://10.10.3.147:3000/parameters', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameData,
                value: valueData
            })
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
// Function to display saved data
function displaySavedData() {
    var color = localStorage.getItem("color");
    console.log(localStorage.getItem("color"));
    var volume = localStorage.getItem("volume");
    var speed = localStorage.getItem("speed");
    
    if (color && volume && speed) {
        document.getElementById("displayData").innerText = "Saved Data: Color - " + color + ", Volume - " + volume + ", Speed - " + speed;
    } else {
        document.getElementById("displayData").innerText = "No data saved.";
    }
}

// Display saved data on page load
window.onload = function() {
    displaySavedData();
}

// Remove data from localStorage on page refresh
function resetData() {
    localStorage.removeItem("color");
    localStorage.removeItem("volume");
    localStorage.removeItem("speed");

    document.getElementById("color").value = document.getElementById("color").defaultValue;
    var volume = document.getElementById("volume").value= document.getElementById("volume").defaultValue;
    var speed = document.getElementById("speed").value = document.getElementById("speed").defaultValue;

    document.getElementById("displayData").innerText = "No data saved.";
}
