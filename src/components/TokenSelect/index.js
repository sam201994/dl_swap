import { useState, useEffect, useContext, useRef } from "react";
import { DownArrowIcon } from "components/Icons";

import { BaseContext } from "context/BaseContext";
import { SwapContext } from "context/SwapContext";
import Typography from "components/Typography";
import { SelectWrapper, IconWrapper, DowpDownWrapper } from "./styles";
import MenuOption from "./MenuOption";

const TokenSelect = ({ token, type }) => {
  const { tokenList, balances } = useContext(BaseContext);
  const { handleInterChange, setFromToken, setToToken, fromToken, toToken } = useContext(SwapContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);
  const wrapperRef = useRef(null);

  const selectedToken = type === "buy" ? toToken : fromToken;

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = event => {
    if (wrapperRef.current && wrapperRef.current.contains(event.target)) {
      setShowDropdown(p => !p);
    } else if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const handleChangeToken = data => {
    if (type === "buy") {
      if (data.address === fromToken.address) {
        handleInterChange();
      } else {
        setToToken(data);
      }
    }
    if (type === "sell") {
      if (data.address === toToken.address) {
        handleInterChange();
      } else {
        setFromToken(data);
      }
    }
    setShowDropdown(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <SelectWrapper ref={wrapperRef}>
        <IconWrapper>
          <img src={selectedToken.logoURI} width={32} height={32} alt="" />
        </IconWrapper>

        <Typography type="p4" color="offwhite">
          {selectedToken.symbol}
        </Typography>

        <IconWrapper>
          <DownArrowIcon />
        </IconWrapper>
      </SelectWrapper>
      <div ref={dropdownRef}>
        {showDropdown && (
          <DowpDownWrapper>
            {tokenList.map(option => {
              return (
                <MenuOption
                  balance={balances[option.address]}
                  onClick={handleChangeToken}
                  option={option}
                  selected={option.address === selectedToken.address}
                  key={option.address}
                />
              );
            })}
          </DowpDownWrapper>
        )}
      </div>
    </div>
  );
};

export default TokenSelect;
