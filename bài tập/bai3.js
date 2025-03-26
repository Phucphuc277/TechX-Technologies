document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let isValid = true;
    
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();
    
    if (!username) {
        document.getElementById("error-username").textContent = "Invalid: Username không được để trống";
        isValid = false;
    }
    if (!email) {
        document.getElementById("error-email").textContent = "Invalid: Email không được để trống";
        isValid = false;
    }
    if (!password) {
        document.getElementById("error-password").textContent = "Invalid: Password không được để trống";
        isValid = false;
    }
    if (!phone) {
        document.getElementById("error-phone").textContent = "Invalid: Phone number không được để trống";
        isValid = false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
        document.getElementById("error-email").textContent = "Invalid: Email không đúng định dạng";
        isValid = false;
    }
    
    const phonePattern = /^\d{10,}$/;
    if (phone && !phonePattern.test(phone)) {
        document.getElementById("error-phone").textContent = "Invalid: Phone number không đúng định dạng";
        isValid = false;
    }
    
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password && !passwordPattern.test(password)) {
        document.getElementById("error-password").textContent = "Invalid: Password phải có ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt";
        isValid = false;
    }
    
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();
    }
});