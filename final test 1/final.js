document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCart() {
        let cartList = document.getElementById("cart-items");
        let cartMessage = document.getElementById("cart-message");
        let cartCount = document.getElementById("cart-count");
        let cartCountFooter = document.getElementById("cart-count-footer");
        let totalItems = 0;
        cartList.innerHTML = "";

        cart.forEach((item, index) => {
            totalItems += item.quantity;

            let listItem = document.createElement("li");
            listItem.classList.add("cart-item");
            listItem.innerHTML = `
                <img src="${item.image}" class="cart-item-img">
                <div class="cart-item-info">
                    <strong>${item.name}</strong>
                    <p>${item.color}</p>
                    <p class="cart-item-price">${item.price.toLocaleString()}₫ <span class="old-price">${item.oldPrice ? item.oldPrice.toLocaleString() + '₫' : ''}</span></p>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">✖</button>
            `;
            cartList.appendChild(listItem);
        });

        cartMessage.textContent = totalItems + " items added to cart";
        cartCount.textContent = totalItems;
        cartCountFooter.textContent = totalItems;
    }

    function addToCart(name, price, image, color, oldPrice = null) {
        price = Number(price);
        oldPrice = oldPrice ? Number(oldPrice) : null;

        let existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, image, color, oldPrice, quantity: 1 });
        }
        saveCart();
        updateCart();
    }

    function removeFromCart(index) {
        if (index >= 0 && index < cart.length) {
            cart[index].quantity--;
            if (cart[index].quantity === 0) cart.splice(index, 1);
            saveCart();
            updateCart();
        }
    }

    function toggleCart() {
        let cartContainer = document.getElementById("cart-container");
        cartContainer.classList.toggle("active");
    }

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.toggleCart = toggleCart;

    updateCart();
});
document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCart() {
        let cartList = document.getElementById("cart-items");
        let cartMessage = document.getElementById("cart-message");
        let cartCount = document.getElementById("cart-count");
        let cartCountFooter = document.getElementById("cart-count-footer");
        let cartTotal = document.getElementById("cart-total"); // Lấy phần tử tổng tiền

        let totalItems = 0;
        let totalPrice = 0; // Biến tính tổng tiền

        cartList.innerHTML = "";

        cart.forEach((item, index) => {
            totalItems += item.quantity;
            totalPrice += item.price * item.quantity; // Cộng dồn tổng tiền

            let listItem = document.createElement("li");
            listItem.classList.add("cart-item");
            listItem.innerHTML = `
                <img src="${item.image}" class="cart-item-img">
                <div class="cart-item-info">
                    <strong>${item.name}</strong>
                    <p>${item.color}</p>
                    <p class="cart-item-price">${item.price.toLocaleString()}₫ 
                    <span class="old-price">${item.oldPrice ? item.oldPrice.toLocaleString() + '₫' : ''}</span></p>
                    <p>Số lượng: ${item.quantity}</p>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">✖</button>
            `;
            cartList.appendChild(listItem);
        });

        cartMessage.textContent = totalItems + " items added to cart";
        cartCount.textContent = totalItems;
        cartCountFooter.textContent = totalItems;

        // 🛒 Cập nhật tổng tiền
        cartTotal.textContent = "Total: " + totalPrice.toLocaleString() + "₫";
    }

    function addToCart(name, price, image, color, oldPrice = null) {
        price = Number(price);
        oldPrice = oldPrice ? Number(oldPrice) : null;

        let existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, image, color, oldPrice, quantity: 1 });
        }
        saveCart();
        updateCart();
    }

    function removeFromCart(index) {
        if (index >= 0 && index < cart.length) {
            cart[index].quantity--;
            if (cart[index].quantity === 0) cart.splice(index, 1);
            saveCart();
            updateCart();
        }
    }

    function toggleCart() {
        let cartContainer = document.getElementById("cart-container");
        cartContainer.classList.toggle("active");
    }

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.toggleCart = toggleCart;

    updateCart();
});
function toggleCart() {
    let cartContainer = document.getElementById("cart-container");
    if (cartContainer.classList.contains("active")) {
        cartContainer.classList.remove("active");
        cartContainer.style.display = "none"; // Ẩn giỏ hàng
    } else {
        cartContainer.classList.add("active");
        cartContainer.style.display = "block"; // Hiện giỏ hàng
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // --- Các mã hiện có (ví dụ: xử lý giỏ hàng) ---
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCart() {
        let cartList = document.getElementById("cart-items");
        let cartMessage = document.getElementById("cart-message");
        let cartCount = document.getElementById("cart-count");
        let cartCountFooter = document.getElementById("cart-count-footer");
        let cartTotal = document.getElementById("cart-total");
        let totalItems = 0;
        let totalPrice = 0;
        cartList.innerHTML = "";

        cart.forEach((item, index) => {
            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;
            
            let itemImage = item.image && item.image.trim() !== "" && item.image !== "undefined" ? item.image : "./image/default.jpg";
            
            let listItem = document.createElement("li");
            listItem.classList.add("cart-item");
            listItem.innerHTML = `
                <img src="${itemImage}" class="cart-item-img" 
                     onerror="this.onerror=null; this.src='/final%20test%201/image/default.jpg';">
                <div class="cart-item-info">
                    <strong>${item.name}</strong>
                    <p>${item.color || "Không có màu"}</p>
                    <p class="cart-item-price">${item.price.toLocaleString()}₫ 
                    <span class="old-price">${item.oldPrice ? item.oldPrice.toLocaleString() + '₫' : ''}</span></p>
                    <p>Số lượng: ${item.quantity}</p>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">✖</button>
            `;
            cartList.appendChild(listItem);
        });

        cartMessage.textContent = totalItems + " items added to cart";
        cartCount.textContent = totalItems;
        cartCountFooter.textContent = totalItems;
        cartTotal.textContent = "Total: " + totalPrice.toLocaleString() + "₫";
    }

    function addToCart(name, price, image, color, oldPrice = null) {
        if (!image || image.trim() === "" || image === "undefined") {
            let productElement = document.querySelector(`[data-name='${name}']`);
            if (productElement) {
                let imgElement = productElement.querySelector("img");
                image = imgElement ? imgElement.src : "./image/default.jpg";
            } else {
                image = "./image/default.jpg";
            }
        }
        
        price = Number(price);
        oldPrice = oldPrice ? Number(oldPrice) : null;
        let existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, image, color, oldPrice, quantity: 1 });
        }
        saveCart();
        updateCart();
    }

    function removeFromCart(index) {
        if (index >= 0 && index < cart.length) {
            cart[index].quantity--;
            if (cart[index].quantity === 0) cart.splice(index, 1);
            saveCart();
            updateCart();
        }
    }

    function toggleCart() {
        let cartContainer = document.getElementById("cart-container");
        cartContainer.classList.toggle("active");
    }

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.toggleCart = toggleCart;
    updateCart();
    
    console.log(localStorage.getItem("cart"));

    // --- Thêm chức năng tìm kiếm sản phẩm ---
    const products = [
      { name: "POP Icon Keys", link: "product1.html" },
      { name: "MX Keys Mini", link: "product2.html" },
      { name: "K380 Pink Bluetooth Keyboard", link: "product3.html" },
      { name: "Signature Slim Keyboard K950", link: "product4.html" },
      { name: "MX Mechanical", link: "product5.html" },
      { name: "Pebble Keys 2 K380s", link: "product6.html" }
    ];

    const searchInput = document.querySelector('.search-box input[type="text"]');
    const resultsContainer = document.querySelector('.search-results');

    if (searchInput && resultsContainer) {
      searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        resultsContainer.innerHTML = ""; // Xóa kết quả cũ

        if (!query) return; // Nếu không có từ khóa, không hiển thị gì

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(query));

        matchedProducts.forEach(product => {
          const item = document.createElement('div');
          item.classList.add('search-result-item');
          item.textContent = product.name;

          item.addEventListener('click', function () {
            window.location.href = product.link;
          });

          resultsContainer.appendChild(item);
        });
      });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".checkout").addEventListener("click", function () {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
            alert("Giỏ hàng của bạn đang trống!");
        } else {
            window.location.href = "./checkout.html"; // Chuyển hướng tới trang checkout
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar-menu");
    const toggleBtn = document.getElementById("toggle-sidebar");
    const avatar = document.getElementById("avatar");
    const usernameDisplay = document.getElementById("username");
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");
    const sendChatBtn = document.getElementById("send-chat");

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        usernameDisplay.textContent = currentUser.username;
        usernameDisplay.style.color = "white";
    }

    toggleBtn.innerHTML = "!!!";

    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("open");
        toggleBtn.innerHTML = sidebar.classList.contains("open") 
            ? "X"
            : "!!!";
        toggleBtn.classList.toggle("rotate-btn");
        toggleBtn.style.fontSize = "24px";
        toggleBtn.style.width = "50px";
        toggleBtn.style.height = "50px";
        toggleBtn.style.backgroundColor = "red";
        toggleBtn.style.color = "white";
    });

    avatar.addEventListener("click", function () {
        let newAvatar = prompt("Nhập URL ảnh đại diện mới:");
        if (newAvatar) {
            avatar.src = newAvatar;
        }
    });

    sendChatBtn.addEventListener("click", function () {
        let userMessage = chatInput.value.trim();
        if (userMessage) {
            let userBubble = document.createElement("div");
            userBubble.className = "chat-bubble user";
            userBubble.innerHTML = `<div class='chat-content'><img src='user-avatar.png' class='chat-avatar' style='width: 40px; height: 40px;'> Bạn: ${userMessage}</div>`;
            chatMessages.appendChild(userBubble);
            chatInput.value = "";

            setTimeout(() => {
                let aiBubble = document.createElement("div");
                aiBubble.className = "chat-bubble ai";
                aiBubble.innerHTML = `<div class='chat-content'><img src='./image/chatbot-cartoon-smart-vector-intelligent-technology-agent-assistant_502617_wh860-removebg-preview.png' class='chat-avatar small' style='width: 40px; height: 40px;'> <span style='color: white;'>Chatbot:</span> ${generateAIResponse(userMessage)}</div>`;
                chatMessages.appendChild(aiBubble);
            }, 1000);
        }
    });

    chatInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendChatBtn.click();
        }
    });

    function generateAIResponse(message) {
        const responses = {
            "xin chào": "Chào bạn! Tôi có thể giúp gì cho bạn?",
            "bạn tên gì": "Tôi là chatbot thông minh của bạn!",
            "hôm nay thế nào": "Tôi luôn sẵn sàng hỗ trợ bạn!",
            "Chuột/bàn phím này có dây hay không dây?": "Tất cả đều không dây",
            "Chuột này có dùng được cho Macbook không?": "Có tất cả",
            "Bàn phím này có hỗ trợ đèn LED RGB không?": "Tất cả đều có nhé!",
            "Có thể tháo keycap của bàn phím này không?": "Tháo được keycap hết",
            "Sản phẩm này có chống nước không?": "Tất cả đều chống được nước",
            "tạm biệt": "Hẹn gặp lại nhé!"
        };
        return responses[message.toLowerCase()] || "Xin lỗi, tôi chưa hiểu yêu cầu của bạn.";
    }
});
