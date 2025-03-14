function openBooking(title, image) {
    document.getElementById("selected-show").textContent = "Booking for: " + title;
    document.getElementById("show-image").src = image;
    document.getElementById("booking").style.display = "block";
}

function calculateTotal() {
    let adults = parseInt(document.getElementById("adults").value);
    let kids = parseInt(document.getElementById("kids").value);

    let total = (adults * 50) + (kids * 25);
    document.getElementById("total-price").textContent = "Total Price: " + total + " AED";
}

function generateTicket() {
    let bookingCode = Math.random().toString(36).substring(2, 10).toUpperCase(); // Random Code

    document.getElementById("booking-code").textContent = bookingCode;
    document.getElementById("ticket").style.display = "block";
}
