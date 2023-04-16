import { calculateFontColor, calculateFontSize, calculateFontWeight, calculateLineHeight } from "./utils";
import TypographyWrapper from "./styles";

export default function Typography({ children, type = "p1", color = "primary", customStyles = {} }) {
  return (
    <TypographyWrapper
      fontSize={calculateFontSize(type)}
      lineHeight={calculateLineHeight(type)}
      fontWeight={calculateFontWeight(type)}
      color={calculateFontColor(color)}
      style={customStyles}
    >
      {children}
    </TypographyWrapper>
  );
}
