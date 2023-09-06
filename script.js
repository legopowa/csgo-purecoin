function loginWithSteam() {
    // Construct the URL for Steam's OpenID endpoint
    const steamOpenIDURL = "https://steamcommunity.com/openid/login?" + 
        "openid.ns=http://specs.openid.net/auth/2.0&" +
        "openid.mode=checkid_setup&" +
        "openid.return_to=http://localhost:5000/GotSteamID.html&" +  // Redirect to localhost:5000 after authentication
        "openid.realm=http://localhost:5000/&" +  // Base URL of your local site
        "openid.identity=http://specs.openid.net/auth/2.0/identifier_select&" +
        "openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select";

    // Redirect the user to Steam for authentication
    window.location.href = steamOpenIDURL;
}
