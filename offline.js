document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.createElement("div");
    overlay.id = "offlineOverlay";
    overlay.innerHTML = `
        <div class="offline-content">
            <img src="gtaversion.png" class="offline-img" alt="Offline">
            <h2>You’re Offline</h2>
            <p>Check your internet connection</p>
        </div>
    `;
    document.body.appendChild(overlay);

    function updateStatus() {
        overlay.classList.toggle("active", !navigator.onLine);
    }

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    updateStatus();
});
