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
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let adults = document.getElementById("adults").value;
    let kids = document.getElementById("kids").value;
    let bookingCode = Math.random().toString(36).substring(2, 10).toUpperCase();

    let ticketDetails = `
        Show: ${document.getElementById("selected-show").textContent} <br>
        Date: ${date} <br>
        Time: ${time} <br>
        13+ Attendees: ${adults} <br>
        Under 13 Attendees: ${kids} <br>
        ${document.getElementById("total-price").textContent}
    `;

    document.getElementById("ticket-details").innerHTML = ticketDetails;
    document.getElementById("booking-code").textContent = bookingCode;
    document.getElementById("ticket").style.display = "block";
}
