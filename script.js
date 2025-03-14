function openBooking(title, image) {
    document.getElementById("selected-show").textContent = "Booking for: " + title;
    document.getElementById("show-image").src = image;

    let bookingSection = document.getElementById("booking");
    bookingSection.classList.add("active");

    // Get the kids' input field and label
    let kidsBox = document.querySelector(".booking-box:nth-child(5)"); // Adjust based on structure
    let kidsInput = document.getElementById("kids");

    // Hide kids' input field if Murder Mystery is selected
    if (title === "The Mystery Night") {
        kidsBox.style.display = "none";
        kidsInput.value = 0; // Reset value to prevent incorrect calculations
    } else {
        kidsBox.style.display = "block";
    }
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
    document.getElementById("booking-code").textContent = bookingCode;

    let showName = document.getElementById("selected-show").textContent.replace("Booking for: ", "");
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let adults = parseInt(document.getElementById("adults").value);
    let kids = parseInt(document.getElementById("kids").value);
    let total = (adults * 50) + (kids * 25);

    let summaryText = `
        <strong>Show:</strong> ${showName} <br>
        <strong>Date:</strong> ${date} <br>
        <strong>Time:</strong> ${time} <br>
        <strong>Number of People (13+):</strong> ${adults} <br>
        <strong>Number of People (U13):</strong> ${kids} <br>
        <strong>Total Price:</strong> ${total} AED
    `;

    document.getElementById("ticket-details").innerHTML = summaryText;
    document.getElementById("ticket-summary").classList.remove("hidden");
}
