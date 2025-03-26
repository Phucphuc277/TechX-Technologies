document.addEventListener("DOMContentLoaded", function () {
    const wishlistContainer = document.querySelector(".wishlist-container");
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    function renderWishlist() {
        wishlistContainer.innerHTML = ""; // Xóa danh sách cũ trước khi render lại

        if (wishlist.length === 0) {
            wishlistContainer.innerHTML = "<p>Không có sản phẩm nào trong danh sách yêu thích.</p>";
            return;
        }

        wishlist.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("wishlist-item");
            itemElement.innerHTML = `
                <button class="delete-btn" data-index="${index}">X</button>
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <p class="item-name">${item.name}</p>
                    <p class="item-price">${item.price}</p>
                </div>
            `;
            wishlistContainer.appendChild(itemElement);
        });

        // Xử lý sự kiện xóa
        document.querySelectorAll(".delete-btn").forEach((btn) => {
            btn.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                wishlist.splice(index, 1);
                localStorage.setItem("wishlist", JSON.stringify(wishlist));
                renderWishlist();
            });
        });
    }

    renderWishlist();
});
const priceElement = document.createElement("div");
priceElement.classList.add("item-price");
priceElement.textContent = product.price + " đ"; // Thêm "đ" vào sau giá
