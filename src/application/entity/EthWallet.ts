import * as Web3 from 'web3';

// @ts-ignore
const web3 = new Web3(Web3.givenProvider);

import {NetworkEnum} from "./enum/network.enum";

export default class EthWallet {
    constructor(public address: string, public network: NetworkEnum) {
    }

    public balance() {
        return web3.eth.getBalance(this.address)
    }
}
