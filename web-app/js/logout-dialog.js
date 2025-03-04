function openLogoutDialog() {
    const logoutDialogHTML = `
        <div id="logoutDialog" class="dialog">
            <div class="dialog-content">
                <h3>Are you sure you want to logout?</h3>
                <p>You will be signed out of your account and redirected to the login page.</p>
                <div class="dialog-buttons">
                    <button class="logout-btn" onclick="confirmLogout()">Logout</button>
                    <button class="cancel-btn" onclick="closeLogoutDialog()">Cancel</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", logoutDialogHTML);
}

function closeLogoutDialog() {
    const logoutDialog = document.querySelector("#logoutDialog");
    if (logoutDialog) {
        logoutDialog.remove();
    }
}

function confirmLogout() {
    closeLogoutDialog();
    window.location.href = "index.html";
}

