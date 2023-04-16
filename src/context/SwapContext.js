import { useState, createContext, useContext } from "react";

import { BaseContext } from "context/BaseContext";
import { useGetTokenUSDPrices, useGetQuote } from "queries";
import { formatAmountToWei } from "utils";

export const SwapContext = createContext();

export const SwapProvider = props => {
  const { tokenList, supportedTokens } = useContext(BaseContext);
  const [fromToken, setFromToken] = useState(() => tokenList[0]);
  const [toToken, setToToken] = useState(() => tokenList[2]);
  const [sellValue, setSellValue] = useState("0"); // human readaable format

  const {
    data: quoteData,
    refetch,
    isLoading,
    isFetching,
  } = useGetQuote(fromToken.address, toToken.address, formatAmountToWei(1, fromToken.decimals));

  const { data } = useGetTokenUSDPrices([fromToken.address, toToken.address], supportedTokens);
  const usdValues = data?.data;

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
        refetchQuote: refetch,
        quoteDataLoading: isLoading || isFetching,
      }}
    >
      {props.children}
    </SwapContext.Provider>
  );
};
