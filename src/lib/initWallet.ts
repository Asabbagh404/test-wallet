import {store} from "../store";

export default function () {
    store.dispatch('syncWallets');
}
