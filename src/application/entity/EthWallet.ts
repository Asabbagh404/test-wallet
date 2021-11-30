import * as Web3 from 'web3';
import axios from 'axios';
import {NetworkEnum} from "./enum/network.enum";

// @ts-ignore
const web3 = new Web3(Web3.givenProvider); // TODO: PASS TO TS

const CRYPTO_DIVIDER = 10e17;
const API_URL = import.meta.env.VITE_API_URL;
const GET_CRYPTO_URI = 'getCrypto';

export default class EthWallet {
    constructor(public address: string, public network: NetworkEnum) {
    }
    public async balance(): Promise<number> {
        return (await web3.eth.getBalance(this.address)) / CRYPTO_DIVIDER
    }
    public async balanceInUsd(): Promise<number> {
        return Math.round(+(await this.balance()) * await getEthPrice());
    }
}

async function getEthPrice() {
    const {data: {price}} = await axios.get<ServerData>(API_URL + GET_CRYPTO_URI);
    return price;
}

interface ServerData {
    price: number;
}
