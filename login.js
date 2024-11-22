function submitLogin() {
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    if (emailInput === "" || passwordInput === "") {
        alert("Please enter both email and password");
        return;
    }
    
    // Jika login berhasil, arahkan ke halaman lain
    window.location.href = "index.html";
}
