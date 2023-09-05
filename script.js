// script.js

function loginWithSteam() {
    // Construct the URL for Steam's OpenID endpoint
    // You'll need to replace 'YOUR_RETURN_URL' with the URL where Steam should redirect the user after authentication
    const steamOpenIDURL = "https://steamcommunity.com/openid/login?" + 
        "openid.ns=http://specs.openid.net/auth/2.0&" +
        "openid.mode=checkid_setup&" +
        "openid.return_to=https://legopowa.github.io/csgo-purecoin/GotSteamID.html&" +
        "openid.realm=https://legopowa.github.io/csgo-purecoin/&" +  // Typically the base URL of your site
        "openid.identity=http://specs.openid.net/auth/2.0/identifier_select&" +
        "openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select";

    // Redirect the user to Steam for authentication
    window.location.href = steamOpenIDURL;
}
