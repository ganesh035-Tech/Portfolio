// =========================
// CONTACT FORM VALIDATION
// =========================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let valid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }

    // Email validation
    if (email === "") {

        emailError.textContent = "Please enter your email.";

        valid = false;

    } else if (!email.includes("@") || !email.includes(".")) {

        emailError.textContent = "Please enter a valid email.";
        valid = false;

    }

    // Message validation
    if (message === "") {

        messageError.textContent = "Please enter your message.";
        valid = false;

    }

    // Successful submission
    if (valid) {

        alert("Thank you! Your message has been submitted.");

        form.reset();
    }

});