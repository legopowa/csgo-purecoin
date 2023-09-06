// Listening to any unhandled error events on the window.
window.addEventListener('error', function (event) {
    console.error(`Error detected: ${event.error.message} at ${event.filename}:${event.lineno}:${event.colno}`);
});

// Ensure the DOM is fully loaded before attaching event listeners.
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('addBriseNetwork').addEventListener('click', async function() {
        if (typeof window.ethereum !== 'undefined') {
            try {
                // Add BriseChain Network
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: '0x7f08',
                        chainName: 'BriseChain',
                        nativeCurrency: {
                            name: 'Brise',
                            symbol: 'Brise',
                            decimals: 18
                        },
                        rpcUrls: ['https://chainrpc.com'],
                        blockExplorerUrls: ['https://brisescan.com']
                    }]
                });
                alert('Brise Network added to MetaMask successfully!');

                // Add Contract Token to BriseChain Network
                try {
                    await window.ethereum.request({
                        method: 'wallet_watchAsset',
                        params: {
                            type: 'ERC20',
                            options: {
                                address: '0x11203a00a9134Db8586381C4B2fca0816476b3FD',
                                symbol: 'YPC', // Replace with your token symbol
                                decimals: 18,  // Assume 18 decimals, but adjust if different
                                image: 'https://url.to/token/image.png', // Replace with your token's logo URL
                            },
                        },
                    });
                    alert('Token added to MetaMask successfully!');
                } catch (tokenError) {
                    console.error('Error adding the token:', tokenError.message);
                    alert('Failed to add the token: ' + tokenError.message);
                }
                
            } catch (networkError) {
                console.error('An error occurred:', networkError.message);
                alert('Failed to add Brise Network: ' + networkError.message);
            }
        } else {
            alert('MetaMask is not installed!');
        }
    });
});


