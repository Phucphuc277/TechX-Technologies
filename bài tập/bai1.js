function saveProfile() {
    const profile = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        avatar: document.getElementById("avatar").value
    };
    localStorage.setItem("userProfile", JSON.stringify(profile));
    loadProfile();
}

function loadProfile() {
    const profile = JSON.parse(localStorage.getItem("userProfile"));
    if (profile) {
        document.getElementById("profileName").textContent = profile.name;
        document.getElementById("profileEmail").textContent = profile.email;
        document.getElementById("profilePhone").textContent = profile.phone;
        document.getElementById("profileAddress").textContent = profile.address;
        document.getElementById("profileAvatar").src = profile.avatar;
    }
}

function editProfile() {
    const profile = JSON.parse(localStorage.getItem("userProfile"));
    if (profile) {
        document.getElementById("name").value = profile.name;
        document.getElementById("email").value = profile.email;
        document.getElementById("phone").value = profile.phone;
        document.getElementById("address").value = profile.address;
        document.getElementById("avatar").value = profile.avatar;
    }
}

window.onload = loadProfile;
