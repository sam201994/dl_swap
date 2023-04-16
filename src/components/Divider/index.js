import { DoubleOppositeArrowIcon } from "components/Icons";
import { IconButton } from "components/Button";
import { DividerIconWrapper, DividerWrapper } from "./styles";

const Divider = ({ onClick }) => {
  return (
    <DividerWrapper>
      <DividerIconWrapper>
        <IconButton onClick={onClick}>
          <DoubleOppositeArrowIcon />
        </IconButton>
      </DividerIconWrapper>
    </DividerWrapper>
  );
};

export default Divider;
