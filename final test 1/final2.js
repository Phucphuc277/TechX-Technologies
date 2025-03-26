const products = [
    { name: "POP Icon Keys", id: "pop-icon-keys" },
    { name: "MX Keys Mini", id: "mx-keys-mini" },
    { name: "K380 Pink Bluetooth Keyboard", id: "k380-pink" },
    { name: "Signature Slim Keyboard K950", id: "signature-k950" },
    { name: "MX Mechanical", id: "mx-mechanical" },
    { name: "Pebble Keys 2 K380s", id: "pebble-keys-k380s" }
];

function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let suggestions = document.getElementById("suggestions");

    // Xóa danh sách cũ
    suggestions.innerHTML = "";

    if (input.length === 0) return;

    // Lọc sản phẩm theo từ khóa nhập vào
    let filteredProducts = products.filter(product => product.name.toLowerCase().includes(input));

    // Hiển thị danh sách gợi ý
    filteredProducts.forEach(product => {
        let li = document.createElement("li");
        li.textContent = product.name;
        li.onclick = () => {
            let targetElement = document.getElementById(product.id);

            if (targetElement) {
                // Cuộn tới sản phẩm
                targetElement.scrollIntoView({ behavior: "smooth", block: "center" });

                // Đổi màu chữ thành đỏ trong 3 giây
                let productNameElement = targetElement.querySelector(".product-name");
                if (productNameElement) {
                    productNameElement.style.color = "red";
                    setTimeout(() => {
                        productNameElement.style.color = "black"; // Đổi lại màu mặc định
                    }, 3000);
                }
            }
        };
        suggestions.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", function () {
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
            
            let itemImage = item.image && item.image.trim() !== "" && item.image !== "undefined"
                ? item.image
                : "./image/default.jpg";

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
                image = imgElement ? imgElement.src : "/final%20test%201/image/default.jpg";
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
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".checkout").addEventListener("click", function () {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
            alert("Giỏ hàng của bạn đang trống!");
        } else {
            window.location.href = "./checkout.html";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    function updateWishlistIcons() {
        document.querySelectorAll(".wishlist-icon").forEach(icon => {
            let productName = icon.getAttribute("data-product");
            let inWishlist = wishlist.some(item => item.name === productName);
            icon.textContent = inWishlist ? "❤️" : "🤍";
            icon.classList.toggle("red", inWishlist);
            icon.style.fontSize = "20px"; // Giảm kích thước trái tim
        });
    }

    function toggleWishlist(productName, productImage, productPrice, iconElement) {
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        let existingIndex = wishlist.findIndex(item => item.name === productName);

        if (existingIndex === -1) {
            wishlist.push({ name: productName, image: productImage, price: productPrice });
            iconElement.textContent = "❤️";
            iconElement.classList.add("red");
        } else {
            wishlist.splice(existingIndex, 1);
            iconElement.textContent = "🤍";
            iconElement.classList.remove("red");
        }

        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

    document.querySelectorAll(".wishlist-icon").forEach(icon => {
        icon.addEventListener("click", function () {
            let productName = this.getAttribute("data-product");
            let productContainer = this.closest(".img1-items-content");
            let productImage = productContainer.previousElementSibling.querySelector("img").src;
            let productPriceText = productContainer.querySelector("p:last-of-type").textContent;
            let productPrice = parseInt(productPriceText.replace(/\D/g, "")) || 0;
            
            toggleWishlist(productName, productImage, productPrice, this);
        });
    });

    updateWishlistIcons();
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