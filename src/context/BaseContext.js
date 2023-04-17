import { useState, useEffect, createContext, useMemo } from "react";
import { init, useConnectWallet, useSetChain } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";

import { getWalletTokenBalances } from "utils";
import { SupportedChains, getSupportedTokens } from "utils/constants";

export const BaseContext = createContext();

const injected = injectedModule();

const appMetadata = {
  name: "DL SWap",
  // icon: '<SVG_ICON_STRING>',
  // logo: '<SVG_LOGO_STRING>',
  description: "Swap tokens",
  recommendedInjectedWallets: [{ name: "MetaMask", url: "https://metamask.io" }],
};

init({
  wallets: [injected],
  chains: SupportedChains,
  connect: {
    autoConnectLastWallet: true,
  },
  appMetadata,
});

export const BaseProvider = props => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [balances, setBalance] = useState({});

  const [
    {
      connectedChain, // the current chain the user's wallet is connected to
    },
  ] = useSetChain();

  const chainId = connectedChain ? parseInt(connectedChain.id, 16) : 137;
  const supportedTokens = useMemo(() => {
    return getSupportedTokens(chainId);
  }, [chainId]);

  // balance is stored in wei format
  const connectedWalletAddress = wallet?.accounts[0]?.address;

  const tokenList = Object.values(supportedTokens);

  const getBalance = async connectedWalletAddress => {
    const balances = await getWalletTokenBalances(connectedWalletAddress, supportedTokens);
    setBalance(balances);
  };

  useEffect(() => {
    getBalance(connectedWalletAddress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectedWalletAddress, chainId]);

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
        connectedChain: chainId,
      }}
    >
      {props.children}
    </BaseContext.Provider>
  );
};
