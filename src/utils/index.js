import { ethers, BigNumber, utils } from "ethers";

import ERC20ABI from "./ERC20ABI";
import { nativeTokenAddress } from "./constants";

// parseUnits -> (normalNumber, Decimal ) => returns BigNumber => weiNumberFormat
// (string | number, number) => string
export const formatAmountToWei = (normalNumber, decimal) => {
  const n = normalNumber || "0";
  return utils.parseUnits(n.toString(), decimal).toString();
};

// formatUnits -> (BigNumber, Decimal) => returns normalNumber
// (string | number, number) => string
export const formatWeiToAmount = (weiNumberFormat, decimal) => {
  if (!weiNumberFormat) return 0;
  return utils.formatUnits(BigNumber.from(weiNumberFormat), decimal);
};

// (string | number, number) => string
export const formatAmountToCommified = (value, maxDecimals = 6) => {
  if (!value) return "0";
  const numArr = String(value)
    .replace(/[^0-9.]/g, "")
    .split(".");
  const wholePart = numArr[0] || "";
  const commifiedWholePart = wholePart.length > 0 ? utils.commify(wholePart) : "";
  const decimalPart = numArr[1] || "";
  const dot = String(value).includes(".") ? "." : "";
  return commifiedWholePart + dot + decimalPart.slice(0, maxDecimals);
};

// (string | number, number) => string
export const formatWeiToCommified = (weiNumberFormat, decimal) => {
  if (!weiNumberFormat) return "0";
  const normalNumber = Number(formatWeiToAmount(weiNumberFormat, decimal));
  return formatAmountToCommified(normalNumber);
};

export const getWalletTokenBalances = async (connectedWalletAddress, supportedTokens) => {
  const tokenList = Object.keys(supportedTokens);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const result = {};

  const promiseResult = tokenList.map(async tokenAddress => {
    if (!connectedWalletAddress) {
      result[tokenAddress] = "0";
    } else if (tokenAddress !== nativeTokenAddress) {
      const tokenContract = new ethers.Contract(utils.getAddress(tokenAddress), ERC20ABI, signer);
      const balance = await tokenContract.balanceOf(utils.getAddress(connectedWalletAddress));
      result[tokenAddress] = balance.toString();
    } else {
      const balance = await provider.getBalance(connectedWalletAddress);
      result[tokenAddress] = balance.toString();
    }
  });

  await Promise.all(promiseResult);
  return result;
};

export const parseTokenInputValue = value => {
  const rectifiedValue = value.replace(/[^0-9.]/g, "");
  const wholePart = rectifiedValue.split(".")[0].slice(0, 8) || "";
  const decimalPart = rectifiedValue.split(".")[1]?.slice(0, 6) || "";
  const dot = rectifiedValue.includes(".") ? "." : "";
  return `${wholePart}${dot}${decimalPart}`;
};

// sellValue:normal number, balance:wei format => boolean
export const calIsSufficientBalance = (sellValue, balance) => {
  return true;
};

// balance:wei format, percentage: number => normal number
export const calBalanceOfTokenWithPercentage = (balance, percentage) => {
  return "1232";
};
