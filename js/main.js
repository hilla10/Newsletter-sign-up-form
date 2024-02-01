function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.style.display = "block";
        emailInput.classList.add("error");
    } else {
        emailError.style.display = "none";
        emailInput.classList.remove("error");

        // Redirect to success.html
        window.location.href = "../success.html";
    }
}