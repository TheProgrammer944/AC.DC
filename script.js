function calculateTotal() {
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let adults = parseInt(document.getElementById("adults").value);
    let kids = parseInt(document.getElementById("kids").value);

    if (date && time && (adults > 0 || kids > 0)) {
        document.getElementById("get-ticket-btn").classList.remove("hidden");
    } else {
        document.getElementById("get-ticket-btn").classList.add("hidden");
    }

    let total = (adults * 50) + (kids * 25);
    document.getElementById("total-price").textContent = "Total Price: " + total + " AED";
}

function generateTicket() {
    let bookingCode = Math.random().toString(36).substring(2, 10).toUpperCase();
    document.getElementById("booking-code").textContent = bookingCode;
    
    document.getElementById("ticket-summary").classList.remove("hidden");

    document.getElementById("ticket-details").innerHTML = `
        <strong>${document.getElementById("selected-show").textContent}</strong><br>
        Date: ${document.getElementById("date").value}<br>
        Time: ${document.getElementById("time").value}<br>
        Total Price: ${document.getElementById("total-price").textContent}
    `;
}
