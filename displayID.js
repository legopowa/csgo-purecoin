window.onload = function() {
    const url = new URL(window.location.href);
    const openidIdentity = url.searchParams.get("openid.identity");
    const openidSigned = url.searchParams.get("openid.signed");
    const openidSig = url.searchParams.get("openid.sig");

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
    alert("Verify with Steam button clicked.");
    const url = new URL(window.location.href);
    
    alert("Sending verification request to Steam...");
    fetch('https://steamcommunity.com/openid/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            ...Array.from(url.searchParams.entries()).reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {}),
            'openid.ns': 'http://specs.openid.net/auth/2.0',
            'openid.mode': 'check_authentication'
        })
    })
    .then(response => {
        alert("Received response from Steam.");
        return response.text();
    })
    .then(data => {
        if (data.includes('is_valid:true')) {
            alert("OpenID response is valid!");
            document.getElementById('verificationResult').innerText = 'OpenID response is valid!';
        } else {
            alert("OpenID response is NOT valid!");
            document.getElementById('verificationResult').innerText = 'OpenID response is NOT valid!';
        }
    })
    .catch(error => {
        alert("Error during verification: " + error);
        document.getElementById('verificationResult').innerText = 'Error occurred during verification.';
    });
}

