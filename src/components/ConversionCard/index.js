import { useContext } from "react";

import { SwapContext } from "context/SwapContext";
import { WarningIcon } from "components/Icons";
import Typography from "components/Typography";
import { GasIcon, DownArrowIcon } from "components/Icons";
import { formatAmountToCommified, formatWeiToCommified } from "utils";
import { ConversionCardWrapper, GasInfoWrapper, RateCardWrapper } from "./styles";

const ConversionCard = ({ quote }) => {
  const { fromToken, toToken, fromTokenUSDValue, quoteDataLoading } = useContext(SwapContext);
  const q = formatWeiToCommified(quote?.toTokenAmount, toToken?.decimals);
  return (
    <ConversionCardWrapper>
      <RateCardWrapper>
        <WarningIcon />
        {quoteDataLoading ? (
          <Typography type="p3" color="secondary">
            Loading ...
          </Typography>
        ) : (
          <Typography type="p3">
            {`1 ${fromToken?.symbol} = ${q} ${toToken?.symbol} `}
            <Typography type="p3" color="secondary">
              {`($${formatAmountToCommified(fromTokenUSDValue)})`}
            </Typography>
          </Typography>
        )}
      </RateCardWrapper>
      <GasInfoWrapper>
        <GasIcon />
        <Typography type="p3" color="secondary">
          $0
        </Typography>
      </GasInfoWrapper>
      <DownArrowIcon color={"#7185AA"} />
    </ConversionCardWrapper>
  );
};

export default ConversionCard;
