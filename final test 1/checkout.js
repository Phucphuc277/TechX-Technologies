document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orderItems = document.getElementById("order-items");
    const shippingCostElement = document.getElementById("shipping-cost");
    const totalElement = document.getElementById("total");
    const freeShippingOption = document.getElementById("freeShipping");
    const emsShippingOption = document.getElementById("emsShipping");

    // Vô hiệu hóa nút "Free Shipping" ban đầu
    freeShippingOption.disabled = true;

    function displayCart() {
        let subtotal = 0;
        orderItems.innerHTML = ""; // Xóa nội dung cũ

        if (cart.length === 0) {
            orderItems.innerHTML = `<tr><td colspan="3">No items in cart.</td></tr>`;
            shippingCostElement.textContent = "0₫";
            totalElement.textContent = "0₫";
            return;
        }

        cart.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${(item.price * item.quantity).toLocaleString()}₫</td>
            `;
            orderItems.appendChild(row);
            subtotal += item.price * item.quantity;
        });

        // Phí vận chuyển mặc định
        const shippingCost = freeShippingOption.checked ? 0 : 56000;

        shippingCostElement.textContent = `${shippingCost.toLocaleString()}₫`;
        totalElement.textContent = `${(subtotal + shippingCost).toLocaleString()}₫`;
    }

    // Cập nhật phí ship khi áp dụng mã giảm giá
    document.getElementById("applyShippingCode").addEventListener("click", function () {
        const codeInput = document.getElementById("shippingCode").value.trim();
        const errorMessage = document.getElementById("shippingError");
        const validCodes = ["FREESHIP2025", "MASTERAPPLY"];

        if (validCodes.includes(codeInput)) {
            freeShippingOption.checked = true; // Kích hoạt chế độ free ship
            freeShippingOption.disabled = false;
            emsShippingOption.checked = false;
            errorMessage.textContent = "";
            alert("Free Shipping Applied!");
        } else {
            errorMessage.textContent = "Invalid Code";
            freeShippingOption.checked = false;
            freeShippingOption.disabled = true; // Vô hiệu hóa lại nếu mã sai
            emsShippingOption.checked = true;
        }

        displayCart(); // Cập nhật lại phần hiển thị
    });

    displayCart();

    // Cập nhật phí ship khi chọn phương thức vận chuyển
    document.querySelectorAll('input[name="shipping"]').forEach(input => {
        input.addEventListener("change", displayCart);
    });

    // Xử lý đặt hàng
    document.getElementById("place-order").addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Giỏ hàng của bạn đang trống!");
        } else {
            alert("Đơn hàng của bạn đã được đặt thành công!");
            localStorage.removeItem("cart"); // Xóa giỏ hàng sau khi đặt hàng
            window.location.href = "./index.html"; // Quay về trang chính
        }
    });
});
