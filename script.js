function openBooking(title, image) {
    document.getElementById("selected-show").textContent = "Booking for: " + title;
    document.getElementById("show-image").src = image;

    let bookingSection = document.getElementById("booking");
    bookingSection.classList.add("active");
}

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
    alert("Your booking code is: " + bookingCode);
}
