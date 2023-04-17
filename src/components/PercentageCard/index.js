import Typography from "components/Typography";
import { PercentageWrapper } from "./styles";

const PercentageCard = ({ percentage, onClick }) => {
  return (
    <PercentageWrapper onClick={() => onClick(percentage)}>
      <Typography type="p5" color="secondary">
        {`${percentage}%`}
      </Typography>
    </PercentageWrapper>
  );
};

export default PercentageCard;
