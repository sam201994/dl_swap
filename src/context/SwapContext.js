import { useState, createContext, useContext, useEffect } from "react";

import { BaseContext } from "context/BaseContext";
import { useGetTokenUSDPrices, useGetQuote } from "queries";
import { formatAmountToWei } from "utils";

export const SwapContext = createContext();

export const SwapProvider = props => {
  const { tokenList, supportedTokens, connectedChain } = useContext(BaseContext);
  const [fromToken, setFromToken] = useState(() => tokenList[0]);
  const [toToken, setToToken] = useState(() => tokenList[2]);

  // human readaable format
  const [sellValue, setSellValue] = useState("0");

  useEffect(() => {
    setFromToken(tokenList[0]);
    setToToken(tokenList[2]);
  }, [connectedChain, tokenList]);

  const {
    data: quoteData,
    refetch: refetchQuote,
    isLoading,
    isFetching,
  } = useGetQuote(fromToken.address, toToken.address, formatAmountToWei(1, fromToken.decimals), connectedChain);

  const { data, refetch: refetchPrice } = useGetTokenUSDPrices([fromToken.address, toToken.address], supportedTokens);
  const usdValues = data?.data;

  const handleRefresh = () => {
    refetchQuote();
    refetchPrice();
  };

  const handleInterChange = () => {
    const temp = { ...fromToken };
    setFromToken({ ...toToken });
    setToToken(temp);
    setSellValue("0");
  };

  return (
    <SwapContext.Provider
      value={{
        toToken,
        fromToken,
        setFromToken,
        setToToken,
        fromTokenUSDValue: usdValues?.[fromToken?.coinGeckoId]?.usd,
        toTokenUSDValue: usdValues?.[toToken?.coinGeckoId]?.usd,
        quoteData: quoteData?.data || {},
        sellValue,
        setSellValue,
        handleInterChange,
        quoteDataLoading: isLoading || isFetching,
        handleRefresh,
      }}
    >
      {props.children}
    </SwapContext.Provider>
  );
};
