import { useState, useEffect, createContext } from "react";
import { init, useConnectWallet } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";

import { getWalletTokenBalances } from "utils";
import { sampleTokens, SupportedChains } from "utils/constants";

export const BaseContext = createContext();

const injected = injectedModule();

init({
  wallets: [injected],
  chains: SupportedChains,
});

export const BaseProvider = props => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  const supportedTokens = sampleTokens;

  // balance is stored in wei format
  const [balances, setBalance] = useState({});

  const connectedWalletAddress = wallet?.accounts[0]?.address;

  const tokenList = Object.values(supportedTokens);

  const getBalance = async connectedWalletAddress => {
    const balances = await getWalletTokenBalances(connectedWalletAddress, supportedTokens);
    setBalance(balances);
  };

  useEffect(() => {
    getBalance(connectedWalletAddress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectedWalletAddress]);

  return (
    <BaseContext.Provider
      value={{
        tokenList,
        supportedTokens,
        account: wallet?.accounts[0]?.address,
        wallet,
        connect,
        disconnect,
        connecting,
        balances,
      }}
    >
      {props.children}
    </BaseContext.Provider>
  );
};
