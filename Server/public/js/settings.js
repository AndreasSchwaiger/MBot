function checkLineFollowing() {
  if (document.getElementById('autonomousDriving').checked) {
    document.getElementById('lineFollowing').disabled = true;
  } else {
    document.getElementById('lineFollowing').disabled = false;
  }
}

function checkAutonomousDriving() {
  if (document.getElementById('lineFollowing').checked) {
    document.getElementById('autonomousDriving').disabled = true;
  } else {
    document.getElementById('autonomousDriving').disabled = false;
  }
}