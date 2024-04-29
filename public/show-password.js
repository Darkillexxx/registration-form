function showPassword() {
    const passwordField = document.getElementById("password-field");
    const passwordToggle = document.getElementById("password-toggle");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordToggle.textContent = "Hide";
    } else {
        passwordField.type = "password";
        passwordToggle.textContent = "Show";
    }
}