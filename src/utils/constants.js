export const sampleTokens = {
  "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
    symbol: "MATIC",
    name: "MATIC",
    coinGeckoId: "matic-network",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    logoURI: "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
    tags: ["native"],
  },
  "0xd6df932a45c0f255f85145f286ea0b292b21c90b": {
    symbol: "AAVE",
    name: "Aave",
    coinGeckoId: "aave",
    decimals: 18,
    address: "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
    logoURI: "https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png",
    tags: ["tokens"],
  },
  "0xc2132d05d31c914a87c6611c10748aeb04b58e8f": {
    symbol: "USDT",
    name: "Tether USD",
    coinGeckoId: "tether",
    decimals: 6,
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    logoURI: "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
    tags: ["tokens", "PEG:USD"],
  },
};

export const SupportedChains = [
  {
    id: "0x1",
    token: "ETH",
    label: "Ethereum",
    rpcUrl: process.env.REACT_APP_MAINET_RPC_URL,
  },
  {
    id: "0x89",
    token: "MATIC",
    label: "Polygon",
    rpcUrl: process.env.REACT_APP_POLYGON_RPC_URL,
  },
];

export const nativeTokenAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
