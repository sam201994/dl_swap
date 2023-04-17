import Typography from "components/Typography";
import { formatWeiToCommified } from "utils";
import { IconWrapper, OptionRightSection, OptionWrapper } from "./styles";

const MenuOption = ({ option, selected, onClick, balance }) => {
  return (
    <OptionWrapper onClick={() => onClick(option)} style={selected ? { background: "rgb(35 45 63)" } : {}}>
      <IconWrapper>
        <img src={option.logoURI} width={30} height={32} alt="" />
      </IconWrapper>
      <OptionRightSection>
        <Typography type="p5" color="primary">
          {option.name}
        </Typography>

        <Typography type="p5" color="secondary" customStyles={{ fontSize: "12px" }}>
          {`${formatWeiToCommified(balance, option.decimal)} ${option.symbol}`}
        </Typography>
      </OptionRightSection>
    </OptionWrapper>
  );
};
export default MenuOption;
