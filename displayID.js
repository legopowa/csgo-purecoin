window.onload = function() {
    const url = new URL(window.location.href);
    const openidIdentity = url.searchParams.get("openid.identity");
    const openidSigned = url.searchParams.get("openid.signed");
    const openidSig = url.searchParams.get("openid.sig");

    if (openidIdentity && openidSigned && openidSig) {
        document.getElementById("steamIDDisplay").innerText = "Your Steam ID: " + openidIdentity;

        // Store or display the signature and signed fields as needed
        // For example, you could send these to your DApp validators for verification
        console.log("Signed fields:", openidSigned);
        console.log("Signature:", openidSig);
    } else {
        document.getElementById("steamIDDisplay").innerText = "Failed to retrieve Steam ID.";
    }
}
