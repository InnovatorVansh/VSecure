// Lock/Unlock control functionality
let isLocked = true;

// Function to update the lock status
function updateLockStatus() {
  if (isLocked) {
    document.getElementById('status-text').textContent = "Vehicle is Locked";
    document.getElementById('lock-btn').disabled = true;
    document.getElementById('unlock-btn').disabled = false;
  } else {
    document.getElementById('status-text').textContent = "Vehicle is Unlocked";
    document.getElementById('unlock-btn').disabled = true;
    document.getElementById('lock-btn').disabled = false;
  }
}

// Event listeners for Lock and Unlock buttons
document.getElementById('lock-btn').addEventListener('click', function() {
  isLocked = true;
  updateLockStatus();
});

document.getElementById('unlock-btn').addEventListener('click', function() {
  isLocked = false;
  updateLockStatus();
});

// Initialize lock status on page load
updateLockStatus();