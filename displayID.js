window.onload = function() {
    const url = new URL(window.location.href);
    const openidIdentity = url.searchParams.get("openid.identity");

    if (openidIdentity) {
        document.getElementById("steamIDDisplay").innerText = "Your Steam ID: " + openidIdentity;
    } else {
        document.getElementById("steamIDDisplay").innerText = "Failed to retrieve Steam ID.";
    }
}
