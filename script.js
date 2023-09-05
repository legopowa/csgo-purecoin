function startOpenIDAuthentication() {
    // Redirect user to Steam OpenID URL
    // This URL will be something provided by Steam's OpenID implementation
    // After authentication, Steam should redirect back to this page with the token in the URL
    window.location.href = "STEAM_OPENID_URL";
}

// Capture the OpenID token from the URL (if it exists) and display it
function displayToken() {
    const url = new URL(window.location.href);
    const openidToken = url.searchParams.get("openid_token"); // replace "openid_token" with the correct parameter name from Steam's redirect URL

    if (openidToken) {
        document.getElementById("tokenDisplay").innerText = "OpenID Token: " + openidToken;
    }
}

// Call the displayToken function when the page loads
window.onload = displayToken;
