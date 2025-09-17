let availableSeats = 10;  // Initial number of available seats

// Update the UI with the current available seats
function updateSeats() {
    document.getElementById('available-seats').innerText = availableSeats;
}

// Book a ticket and update the status
function bookTicket() {
    if (availableSeats > 0) {
        availableSeats--;
        updateSeats();
        document.getElementById('confirmation').style.display = 'block';
        document.getElementById('book-ticket').disabled = true;  // Disable button once ticket is booked
    } else {
        alert("Sorry, no available seats left!");
    }
}

// Initially update seats display
updateSeats();
