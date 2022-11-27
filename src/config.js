export const ethereum = window.ethereum;


// check if metamask extension is installed on the browser
export const isMetaMaskInstalled = () =>{
    if(ethereum){
        return true;
    }

    return false;
}


// connect to metakmask wallet
export const connectWallet = async () =>{
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    
    return accounts;
}

// connect to metakmask wallet
export const connectAccount = async () =>{
    const accounts = await ethereum.request({method: 'eth_accounts'});
    
    return accounts;
}


// disconnect metamask wallet
export const disconnectWallet = () =>{
    localStorage.removeItem('isWalletConnected');
    window.location.reload();
}

// check metamask on disconnect
export const onMetamaskDisconnect = () =>{
    ethereum.on('disconnect', () =>{
        console.log('Disconnected');
    });
}


// check metamask on connected
export const onMetamaskconnect = async () =>{
    const chainId = await getChainId();
    ethereum.on('connect', () =>{
        console.log(chainId);
    });
}

// on chain change
export const onChainChange = () =>{
    ethereum.on('chainChanged', (_chainId) =>{
        return parseInt(_chainId);
    });
}

export const getChainId = async () =>{
    const chainId = await ethereum.request({ method: 'eth_chainId' });

    return parseInt(chainId);
}


export const isWalletConnected = () => {
    if(localStorage.getItem('isWalletConnected') === 'true'){
        return true
    }

    return false;
}

export const connectWalletLocaly = () => {
    localStorage.setItem('isWalletConnected', true);
}