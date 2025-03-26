document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    const form = document.getElementById("reservation-form");
    const modal = document.getElementById("confirmationModal");
    const modalText = document.getElementById("modalText");
    const closeModal = document.querySelector(".close");
    const confirmBtn = document.getElementById("confirmReservation");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const datetime = document.getElementById("datetime").value;
        modalText.innerHTML = `Tên: ${name}<br>Email: ${email}<br>Điện thoại: ${phone}<br>Thời gian: ${datetime}`;
        modal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    confirmBtn.addEventListener("click", () => {
        alert("Đặt bàn thành công!");
        modal.style.display = "none";
        form.reset();
    });
});
