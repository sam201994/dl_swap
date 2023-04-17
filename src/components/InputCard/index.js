import Typography from "components/Typography";
import TokenSelect from "components/TokenSelect";
import { formatAmountToCommified } from "utils";
import { InputWrapper, InputSectionBox, TextInput, TagWrapper } from "./styles";

const InputCard = ({ tokenValue = 0, type, onChangeSellValue, usdValue }) => {
  const renderTokenSection = () => {
    return (
      <InputSectionBox style={{ alignItems: "flex-end" }}>
        <Typography type="p4" color="secondary">
          {`You ${type}`}
        </Typography>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {type === "buy" && (
            <TagWrapper>
              <Typography type="p6" color="offwhite">
                MIN
              </Typography>
            </TagWrapper>
          )}
          <TokenSelect type={type} />
        </div>
      </InputSectionBox>
    );
  };

  const renderTokenInput = () => {
    const v = formatAmountToCommified(tokenValue);
    let fontSize = v.length > 12 ? "18px" : "24px";
    if (type === "sell") {
      return <TextInput onChange={onChangeSellValue} value={v} />;
    }
    return (
      <Typography type={"p1"} color="primary" customStyles={{ fontSize }}>
        {`${v}`}
      </Typography>
    );
  };

  const totalUSDValue = Number(usdValue) * Number(tokenValue);
  return (
    <InputWrapper>
      <InputSectionBox>
        <Typography type="p4" color="secondary">
          {`~$${formatAmountToCommified(totalUSDValue, 2)}`}
        </Typography>
        {renderTokenInput()}
      </InputSectionBox>
      {renderTokenSection()}
    </InputWrapper>
  );
};

export default InputCard;
