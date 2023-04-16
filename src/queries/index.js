import axios from "axios";
import { useQuery } from "react-query";

export const useGetQuote = (fromTokenAddress, toTokenAddress, amount) => {
  return useQuery(
    [fromTokenAddress, toTokenAddress, amount],
    async () => {
      const config = {
        headers: {
          accept: "application/json",
        },
        params: { fromTokenAddress, toTokenAddress, amount: amount },
      };
      return await axios.get("https://api.1inch.io/v5.0/137/quote", config);
    },
    {
      enabled: fromTokenAddress.length && toTokenAddress.length && amount !== "" && amount !== "0" && amount > 0,
      refetchInterval: 10000,
    },
  );
};

export const useGetTokenUSDPrices = (tokenAddresses, supportedTokens) => {
  const coinGeckoIds = tokenAddresses.map(tokenAddress => supportedTokens[tokenAddress].coinGeckoId);
  return useQuery(
    coinGeckoIds,
    async () => {
      const config = {
        headers: {
          accept: "application/json",
        },
        params: { ids: coinGeckoIds.join(","), vs_currencies: "usd" },
      };
      return await axios.get("https://api.coingecko.com/api/v3/simple/price", config);
    },
    {
      refetchOnWindowFocus: true,
      refetchInterval: 10000,
    },
  );
};

// Not used yet. Future scope
export const useSwapTokens = (fromTokenAddress, toTokenAddress, amount, fromAddress) => {
  return useQuery(
    [fromTokenAddress, toTokenAddress, amount, fromAddress],
    async () => {
      const config = {
        headers: {
          accept: "application/json",
        },
        params: {
          fromTokenAddress,
          toTokenAddress,
          amount,
          fromAddress,
          slippage: 1,
        },
      };
      return await axios.get("https://api.1inch.io/v5.0/137/swap", config);
    },
    {
      refetchOnWindowFocus: false,
    },
  );
};
