import {Wallets} from "../store/state";


export function getLocaleStorageWallet() : Wallets {
    if(!localStorage.wallets) return []
    return localStorage.wallets.split('@')
}

export function setLocaleStorageWallet(wallets: Wallets): void {
    // Behaviour could be different like empty localStorage and add new wallet
    let localStorageWalletList = getLocaleStorageWallet();
    for(let wallet of wallets) {
        if(!localStorageWalletList.includes(wallet)) {
            localStorageWalletList.push(wallet);
        }
    }
   localStorage.wallets = localStorageWalletList.join('@')
}
