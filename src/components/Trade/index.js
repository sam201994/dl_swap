import { useContext } from "react";

import { BaseContext } from "context/BaseContext";
import { SwapContext } from "context/SwapContext";
import PercentageCard from "components/PercentageCard";
import InputCard from "components/InputCard";
import ConversionCard from "components/ConversionCard";
import { Button } from "components/Button";
import TopBar from "components/TopBar";
import Divider from "components/Divider";
import { formatWeiToAmount, parseTokenInputValue, calIsSufficientBalance, calBalanceOfTokenWithPercentage } from "utils";
import { TradeWrapper, VectorWrapper, PercentageSection, Wrapper } from "./styles";

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
    if (wallet) {
      const balanceOfFromToken = balances[fromToken.address];
      const sValue = calBalanceOfTokenWithPercentage(balanceOfFromToken, fromToken.decimals, percentage);
      setSellValue(sValue);
    }
  };

  const isSufficient = wallet ? calIsSufficientBalance(sellValue, fromToken.decimals, balances[fromToken.address]) : true;

  const buttonText = () => {
    if (connecting) return "connecting";
    if (wallet) {
      if (isSufficient) return "Swap";
      return `Insufficient ${fromToken.symbol} balance`;
    }
    return "Connect Wallet";
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Wrapper>
        <TradeWrapper>
          <TopBar />
          <InputCard tokenValue={buyValue} type="buy" usdValue={toTokenUSDValue} />

          <Divider onClick={handleInterChange} />
          <InputCard onChangeSellValue={onChangeSellValue} tokenValue={sellValue} type="sell" usdValue={fromTokenUSDValue} />

          <PercentageSection>
            {[25, 50, 75, 100].map(p => {
              return <PercentageCard percentage={p} key={`${p}`} onClick={handlePercentageClick} />;
            })}
          </PercentageSection>

          <ConversionCard quote={quoteData} />

          <Button disabled={!isSufficient} loader={connecting} onClick={handleConnectWallet} text={buttonText()} />
          <VectorWrapper />
        </TradeWrapper>
      </Wrapper>
    </div>
  );
};

export default Trade;
