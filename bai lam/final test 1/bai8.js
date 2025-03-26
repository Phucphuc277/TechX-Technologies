import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Cấu hình Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAa2ozkfv5J1VYVdBZNd8undB4D8UPfh70",
    authDomain: "iqwuqieuwie.firebaseapp.com",
    projectId: "iqwuqieuwie",
    storageBucket: "iqwuqieuwie.appspot.com",
    messagingSenderId: "98267647642",
    appId: "1:98267647642:web:d9dd7c90839480e0e11923"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Xử lý form đăng nhập
function handleFormLogin() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!localStorage.getItem("users")) {
            alert("No user found");
          } else {
            let users = JSON.parse(localStorage.getItem("users"));
        
            const username = document.getElementById("username");
            const password = document.getElementById("password");
        
            let existingUser = users.find(
              (index) =>
                index.username === username.value.trim() &&
                index.password === password.value.trim()
            );
        
            if (existingUser) {
              localStorage.setItem("currentUser", JSON.stringify(existingUser));
              location.href = "./index.html";
            } else {
              alert("Email or password is incorrect");
            }
          }
    });
}

function createErrorElement(inputElement) {
    const errorElement = document.createElement("p");
    errorElement.style.color = "red";
    errorElement.style.fontSize = "14px";
    errorElement.style.marginTop = "5px";
    inputElement.insertAdjacentElement("afterend", errorElement);
    return errorElement;
}

// Đăng nhập với Google
function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then(() => window.location.href = "trangchu.html")
        .catch((error) => console.error("Error: ", error));
}

// Đăng nhập với Facebook
function loginWithFacebook() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then(() => window.location.href = "trangchu.html")
        .catch((error) => console.error("Error: ", error));
}

// Đăng nhập với Instagram
function loginWithInstagram() {
    const clientId = '453e1963bafe8ff52cf8e11c60c320b3';
    const redirectUri = 'https://yourwebsite.com/redirect';
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;
    window.location.href = authUrl;
}

// Gán các hàm vào window để gọi từ HTML
document.addEventListener("DOMContentLoaded", handleFormLogin);
window.loginWithGoogle = loginWithGoogle;
window.loginWithFacebook = loginWithFacebook;
window.loginWithInstagram = loginWithInstagram;
