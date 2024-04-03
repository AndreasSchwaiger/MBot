// Function to save data
function saveData() {
    var color = document.getElementById("color").value;
    var volume = document.getElementById("volume").value;
    var speed = document.getElementById("speed").value;
    
    localStorage.setItem("color", color);
    localStorage.setItem("volume", volume);
    localStorage.setItem("speed", speed);
    
    displaySavedData();
}

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
