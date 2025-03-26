let form = document.querySelector("form");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirmPassword");

// Tạo phần tử hiển thị lỗi
let errorSpan = document.createElement("span");
errorSpan.style.color = "red";
errorSpan.style.display = "block";
errorSpan.style.fontSize = "14px";
errorSpan.style.marginTop = "5px";
passwordInput.parentNode.insertBefore(errorSpan, passwordInput.nextSibling);

// Tạo thông báo đăng ký thành công
let successMessage = document.createElement("div");
successMessage.style.color = "green";
successMessage.style.backgroundColor = "#D4EDDA";
successMessage.style.border = "1px solid #C3E6CB";
successMessage.style.padding = "10px";
successMessage.style.marginTop = "10px";
successMessage.style.display = "none";
successMessage.style.textAlign = "center";
successMessage.style.borderRadius = "5px";
successMessage.textContent = "🎉 Đăng ký thành công! Hãy đăng nhập ngay.";
form.insertBefore(successMessage, form.firstChild);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = usernameInput.value.trim();
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;

    // Kiểm tra điều kiện mật khẩu
    let hasLowerCase = /[a-z]/.test(password);
    let hasUpperCase = /[A-Z]/.test(password);
    let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    let isLongEnough = password.length >= 7;

    if (!isLongEnough) {
        errorSpan.textContent = "❌ Mật khẩu phải có ít nhất 7 ký tự.";
        successMessage.style.display = "none";
    } else if (!hasUpperCase) {
        errorSpan.textContent = "❌ Mật khẩu phải chứa ít nhất một chữ cái viết hoa.";
        successMessage.style.display = "none";
    } else if (!hasSpecialChar) {
        errorSpan.textContent = "❌ Mật khẩu phải chứa ít nhất một ký tự đặc biệt.";
        successMessage.style.display = "none";
    } else if (password !== confirmPassword) {
        errorSpan.textContent = "❌ Mật khẩu nhập lại không khớp.";
        successMessage.style.display = "none";
    } else {
        errorSpan.textContent = ""; // Xóa thông báo lỗi nếu hợp lệ

        // Lấy danh sách users từ localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Kiểm tra xem username đã tồn tại chưa
        let existingUser = users.find(user => user.username === username);
        if (existingUser) {
            errorSpan.textContent = "❌ Tên người dùng đã tồn tại!";
            return;
        }

        // Thêm người dùng mới vào danh sách
        users.push({ username, password });

        // Lưu danh sách mới vào localStorage
        localStorage.setItem("users", JSON.stringify(users));

        // Hiển thị thông báo thành công
        successMessage.style.display = "block";

        // Chuyển hướng sau 2 giây
        setTimeout(() => {
            location.href = "./bai8.html";  // Chuyển về trang đăng nhập
        }, 2000);
    }
});

// Thêm khoảng cách dưới các input
document.querySelectorAll("input").forEach(input => {
    input.style.marginBottom = "10px";
});

// Đăng nhập bằng Google
function handleCredentialResponse(response) {
    const jwtToken = response.credential;
    const userInfo = JSON.parse(atob(jwtToken.split(".")[1]));
    localStorage.setItem("user", JSON.stringify(userInfo));
    alert("Đăng nhập thành công với Google!");
    window.location.href = "index.html";
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID",
        callback: handleCredentialResponse
    });
};

// Đăng nhập bằng Facebook
function loginWithFacebook() {
    FB.login(function (response) {
        if (response.authResponse) {
            FB.api('/me', { fields: 'name,email,picture' }, function (userInfo) {
                localStorage.setItem("user", JSON.stringify(userInfo));
                alert("Đăng nhập thành công với Facebook!");
                window.location.href = "index.html";
            });
        } else {
            alert("Đăng nhập Facebook thất bại!");
        }
    }, { scope: 'email,public_profile' });
}
