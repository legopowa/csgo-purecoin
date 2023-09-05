window.onload = function() {
    const url = new URL(window.location.href);
    const openidIdentity = url.searchParams.get("openid.identity");
    const openidSigned = url.searchParams.get("openid.signed");
    const openidSig = url.searchParams.get("openid.sig") + "a";

    if (openidIdentity) {
        document.getElementById("steamIDDisplay").innerText = openidIdentity;
    } else {
        document.getElementById("steamIDDisplay").innerText = "Failed to retrieve Steam ID.";
    }

    if (openidSigned) {
        document.getElementById("signedFields").innerText = openidSigned;
    } else {
        document.getElementById("signedFields").innerText = "Failed to retrieve signed fields.";
    }

    if (openidSig) {
        document.getElementById("signature").innerText = openidSig;
    } else {
        document.getElementById("signature").innerText = "Failed to retrieve signature.";
    }
}

function verifyWithSteam() {
    alert("Verify with Steam button clicked. test 1");
    const url = new URL(window.location.href);
    
    //alert("Sending verification request to Flask server...");
    fetch('http://localhost:5000/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            ...Array.from(url.searchParams.entries()).reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {}),
        })
    })
    .then(response => {
        alert("Received response from Flask server.");
        return response.text();
    })
    .then(data => {
        alert(data);
        document.getElementById('verificationResult').innerText = data;
    })
    .catch(error => {
        alert("Error during verification: " + error);
        document.getElementById('verificationResult').innerText = 'Error occurred during verification.';
    });
}
