import Typography from "components/Typography";
import TokenSelect from "components/TokenSelect";
import { formatAmountToCommified } from "utils";
import { InputWrapper, InputSectionBox, TextInput } from "./styles";

const InputCard = ({ tokenValue = 0, type, onChangeSellValue, usdValue }) => {
  const renderTokenInput = () => {
    const v = formatAmountToCommified(tokenValue);
    if (type === "sell") {
      return <TextInput onChange={onChangeSellValue} value={v} />;
    }
    return (
      <Typography type="p1" color="primary">
        {`${v}`}
      </Typography>
    );
  };

  const totalUSDValue = Number(usdValue) * Number(tokenValue);
  return (
    <InputWrapper>
      <InputSectionBox>
        <Typography type="p4" color="secondary">
          {`$${formatAmountToCommified(totalUSDValue, 2)}`}
        </Typography>
        {renderTokenInput()}
      </InputSectionBox>
      <InputSectionBox style={{ alignItems: "flex-end" }}>
        <Typography type="p4" color="secondary">
          {`You ${type}`}
        </Typography>
        <TokenSelect type={type} />
      </InputSectionBox>
    </InputWrapper>
  );
};

export default InputCard;
