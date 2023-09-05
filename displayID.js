// displayID.js

window.onload = function() {
    const url = new URL(window.location.href);
    const openidIdentity = url.searchParams.get("openid.identity");
    const openidSigned = url.searchParams.get("openid.signed");
    const openidSig = url.searchParams.get("openid.sig");

    if (openidIdentity) {
        document.getElementById("steamIDDisplay").innerText = "Your Steam ID: " + openidIdentity;
    } else {
        document.getElementById("steamIDDisplay").innerText = "Failed to retrieve Steam ID.";
    }

    if (openidSigned) {
        document.getElementById("signedFields").innerText = "Signed fields: " + openidSigned;
    } else {
        document.getElementById("signedFields").innerText = "Failed to retrieve signed fields.";
    }

    if (openidSig) {
        document.getElementById("signature").innerText = "Signature: " + openidSig;
    } else {
        document.getElementById("signature").innerText = "Failed to retrieve signature.";
    }
}
