import * as Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);

import {NetworkEnum} from "./enum/network.enum";

export default class EthWallet {

    // eslint-disable-next-line no-useless-constructor
    constructor(public address: string, public network: NetworkEnum) {
    }

    public balance() {
        return web3.eth.getBalance(this.address)
    }
}
