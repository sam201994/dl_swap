# DL SWAP [[Link](https://dl-swap.netlify.app/)]

## Description

This App allows exchange of two tokens, similar to [1Inch](https://app.1inch.io/#/137/simple/swap/AAVE/MATIC) and [Uniswap](https://app.uniswap.org/#/swap).

## Limitations

1. Wallets supported - **Metamask**
2. Networks supported - **Polygon**
3. Tokens supported - **AAVE**, **MATIC**, **Tether USD**
4. The maximum token which can be exchanged is **99,909,999.999999** units, due to UI constraints
5. Connects to Metamask but does not swap tokens yet
6. quote-api refetches data every **10** seconds
7. Due to rate limitation on coin-gecko public api, polling has been disabled so to fetch the latest USD value, we need to click on the refech button

## Future Scope

1. Add more wallets
2. Support more chains.
3. Support all tokens.
4. Support larger token units for swapping.
5. Add swap tokens functionality

## Setup

To run this project, install it locally using npm:

1. Get your API keys for Polygon network from **Alchemy**
2. Create a `.env` file and copy the polygon url to `REACT_APP_POLYGON_RPC_URL` key
3. run `npm install` on terminal

## Tech Stack

Main libraries and frameworks used:

- React - Frontend framework
- ether.js - Library which helps in querying blockchain node provider
- React Query - React query handles polling which is needed to get latest token and dollar value from external apis.
- Alchemy - Blockchain node provider.
- 1Inch APIs - Used to get quote between two tokens and to perform swap operation.
- CoinGecko APIs - Used to get latest dollar values of the tokens.
- Web3-Onboard - library used to implement wallet connection.
