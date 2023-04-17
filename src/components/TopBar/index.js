import { useContext } from "react";

import { SwapContext } from "context/SwapContext";
import { RefreshIcon, SettingsIcon } from "components/Icons";
import { IconButton } from "components/Button";
import { TopBarWrapper } from "./styles";

const TopBar = () => {
  const { handleRefresh } = useContext(SwapContext);
  return (
    <TopBarWrapper>
      <IconButton onClick={handleRefresh}>
        <RefreshIcon />
      </IconButton>
      <IconButton>
        <SettingsIcon />
      </IconButton>
    </TopBarWrapper>
  );
};

export default TopBar;
