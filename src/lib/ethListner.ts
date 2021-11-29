import {store, Action} from "../store";
const ethereum = window.ethereum;

ethereum.on('disconnect', () => {
    localStorage.clear();
    store.dispatch(Action.emptyWallets)
});