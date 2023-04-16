import { useContext } from "react";

import { SwapContext } from "context/SwapContext";
import { RefreshIcon, SettingsIcon } from "components/Icons";
import { IconButton } from "components/Button";
import { TopBarWrapper } from "./styles";

const TopBar = () => {
  const { refetchQuote } = useContext(SwapContext);
  return (
    <TopBarWrapper>
      <IconButton onClick={() => refetchQuote()}>
        <RefreshIcon />
      </IconButton>
      <IconButton>
        <SettingsIcon />
      </IconButton>
    </TopBarWrapper>
  );
};

export default TopBar;
