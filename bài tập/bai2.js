document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;

        // Lấy giá trị từ input
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const verifyPassword = document.getElementById("verifyPassword").value.trim();

        // Reset lỗi trước khi kiểm tra
        document.getElementById("usernameError").innerText = "";
        document.getElementById("emailError").innerText = "";
        document.getElementById("passwordError").innerText = "";
        document.getElementById("verifyPasswordError").innerText = "";

        // Kiểm tra username (6-18 ký tự)
        if (username.length < 6 || username.length > 18) {
            document.getElementById("usernameError").innerText = "Username phải từ 6 đến 18 ký tự";
            isValid = false;
        }

        // Kiểm tra email (định dạng hợp lệ)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById("emailError").innerText = "Email không hợp lệ";
            isValid = false;
        }

        // Kiểm tra password (8-20 ký tự)
        if (password.length < 8 || password.length > 20) {
            document.getElementById("passwordError").innerText = "Mật khẩu phải từ 8 đến 20 ký tự";
            isValid = false;
        }

        // Kiểm tra verifyPassword (phải trùng với password)
        if (verifyPassword !== password) {
            document.getElementById("verifyPasswordError").innerText = "Mật khẩu xác nhận không khớp";
            isValid = false;
        }

        // Nếu hợp lệ, lưu vào LocalStorage
        if (isValid) {
            alert("Đăng nhập thành công!");
            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
        }
    });
});
