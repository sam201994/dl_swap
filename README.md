# DL SWAP [[Link]()]

## Description

This App allows exchange of two tokens, similar to [1Inch](https://app.1inch.io/#/137/simple/swap/AAVE/MATIC) and [Uniswap](https://app.uniswap.org/#/swap).

## Limitations

1. It only supports Polygon network for now
2. Add support for three tokens `AAVE`, `MATIC`, `Tether USD`
3. The max tokens which can be exchanged is `99,909,999.999999` units, due to UI contraints
4. Connects to Metamask but does not swap tokens yet

## Future Scope

1. Support more chains.
2. Support all tokens.
3. Support larger token units for transaction.
4. Add swap tokens functionality

## Setup

To run this project, install it locally using npm:

1. Get your API keys for Polygon netfork from Alchemy
2. Create a `.env` file and copy the polygon url to `REACT_APP_POLYGON_RPC_URL` key
3. run `npm install` on terminal

## Tech Stack

Main libraries and frameworks used:

- React - frontend framework
- ether.js - library which helps in querying blockchain node provider
- React Query - react query handles polling which is needed to get latest token and dollar value from external apis
- Alchemy - Blockchain node provider.
- 1Inch Apis - used to get quote between two tokens and to perform swap operation
- CoinGecko Apis - used to get latest dollar values of the tokens
