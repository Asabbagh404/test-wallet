const axios = require('axios');
const express = require('express');
const cors = require('cors')

require('dotenv').config()

const SYMBOL = 'ETH';
const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

const coinMarketCapAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
    },
});

(function appStart() {
    const app = express()
    app.use(cors())
    app.get('/getCrypto', async function (req, res) {
        const symbol = req.query.symbol || SYMBOL;
        try {
            const {data: {data}} = await coinMarketCapAxios.get(
                '/v1/cryptocurrency/quotes/latest',
                {params: {symbol: symbol}},
            );
            res.json(
                {
                    price: data[symbol].quote.USD.price
                });
        } catch (e) {
            res.send('Failure: ' + e)
        }
    })

    app.listen(3000);
})()
