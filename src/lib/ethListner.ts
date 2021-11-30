import {store, Action} from "../store";
const ethereum = window.ethereum;

ethereum.on('disconnect', emptyWallets);
ethereum.on('accountsChanged', emptyWallets);

function emptyWallets() {
    store.dispatch(Action.emptyWallets)
}
