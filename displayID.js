// displayID.js

window.onload = function() {
    const url = new URL(window.location.href);
    const openidIdentity = url.searchParams.get("openid.identity");
    const openidSigned = url.searchParams.get("openid.signed");
    const openidSig = url.searchParams.get("openid.sig");

    let displayText = "Failed to retrieve Steam ID.";

    if (openidIdentity && openidSigned && openidSig) {
        displayText = "Your Steam ID: " + openidIdentity + "\n";
        displayText += "Signed fields: " + openidSigned + "\n";
        displayText += "Signature: " + openidSig;
    }

    document.getElementById("steamIDDisplay").innerText = displayText;
}
