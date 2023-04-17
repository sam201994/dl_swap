import Typography from "components/Typography";
import { ButtonWrapper, IconButtonWrapper } from "./styles";

const Button = ({ disabled, loader = false, text, onClick }) => {
  if (loader) {
    return (
      <ButtonWrapper disabled={disabled} loader={loader}>
        <Typography type="p2" color="primary">
          {text}
        </Typography>
      </ButtonWrapper>
    );
  }
  return (
    <ButtonWrapper disabled={disabled} loader={loader} onClick={onClick}>
      <Typography type="p2" color="primary">
        {text}
      </Typography>
    </ButtonWrapper>
  );
};

const IconButton = ({ children, onClick, loader = false }) => {
  if (loader) {
    return <IconButtonWrapper loader={loader}>{children}</IconButtonWrapper>;
  }
  return (
    <IconButtonWrapper loader={loader} onClick={onClick}>
      {children}
    </IconButtonWrapper>
  );
};

export { Button, IconButton };
