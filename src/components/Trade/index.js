import { useContext, useMemo } from "react";

import { BaseContext } from "context/BaseContext";
import { SwapContext } from "context/SwapContext";
import PercentageCard from "components/PercentageCard";
import InputCard from "components/InputCard";
import ConversionCard from "components/ConversionCard";
import { Button } from "components/Button";
import TopBar from "components/TopBar";
import Divider from "components/Divider";
import { formatWeiToAmount, parseTokenInputValue, calIsSufficientBalance, calBalanceOfTokenWithPercentage } from "utils";
import { TradeWrapper, VectorWrapper, PercentageSection } from "./styles";

const Trade = () => {
  const { balances, connect, connecting, wallet } = useContext(BaseContext);
  const { handleInterChange, quoteData, sellValue, setSellValue, fromToken, toToken, toTokenUSDValue, fromTokenUSDValue } =
    useContext(SwapContext);

  const buyValue = sellValue * formatWeiToAmount(quoteData?.toTokenAmount, toToken?.decimals);

  const onChangeSellValue = e => {
    const valueInNormalForm = parseTokenInputValue(e.target.value);
    setSellValue(valueInNormalForm);
  };

  const handleConnectWallet = () => {
    if (wallet) {
      // TODO Swap
      // 1. check if token is allowed
      // 2.a if yes, then we call swap api
      // 2.b if no, then we call transaction and then swap api
    } else {
      connect();
    }
  };

  const handlePercentageClick = percentage => {
    const balanceOfFromToken = balances[fromToken.address];
    const sValue = calBalanceOfTokenWithPercentage(balanceOfFromToken, percentage);
    setSellValue(sValue);
  };

  const isSufficient = calIsSufficientBalance(sellValue, balances[fromToken.address]);

  const buttonText = useMemo(() => {
    if (connecting) return "connecting";
    if (wallet) {
      if (isSufficient) return "Swap";
      return `Insufficient ${fromToken.symbol} balance`;
    }
    return "Connect Wallet";
  }, [connecting, wallet, fromToken.symbol, isSufficient]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TradeWrapper>
        <TopBar />
        <InputCard onChangeSellValue={onChangeSellValue} tokenValue={sellValue} type="sell" usdValue={fromTokenUSDValue} />
        <Divider onClick={handleInterChange} />

        <InputCard tokenValue={buyValue} type="buy" usdValue={toTokenUSDValue} />

        <PercentageSection>
          {[25, 50, 75, 100].map(p => {
            return <PercentageCard percentage={p} key={`${p}`} onClick={handlePercentageClick} />;
          })}
        </PercentageSection>

        <ConversionCard quote={quoteData} />

        <Button loader={connecting} onClick={handleConnectWallet} text={buttonText} />
      </TradeWrapper>
      <VectorWrapper />
    </div>
  );
};

export default Trade;
