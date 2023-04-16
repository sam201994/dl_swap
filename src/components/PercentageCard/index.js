import Typography from "components/Typography";
import { PercentageWrapper } from "./styles";

const PercentageCard = ({ percentage, onClick }) => {
  return (
    <PercentageWrapper>
      <Typography type="p4" color="secondary">
        {`${percentage}%`}
      </Typography>
    </PercentageWrapper>
  );
};

export default PercentageCard;
