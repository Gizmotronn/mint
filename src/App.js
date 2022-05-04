import './App.css';
import { useState, useEffect, useMemo } from 'react';
import MainMint from './components/MainMint';
import NavBar from './components/NavBar';

// Thirdweb & contract components
import { useAddress, useMetamask, useEditionDrop, useToken, useVote, useNetwork } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';
import { AddressZero } from "@ethersproject/constants";
//import editionDrop from "./editionDrop";

// NFT Display
// import CharacterGallery from ./components/CharacterGallery;

// Minigame components
import Phaser from 'phaser';
import { useMoralis, useMoralisWeb3Api, useMoralisWeb3ApiCall, useNFTbalances, } from "react-moralis";
import PhaserLoad from './components/PhaserLoad';
//import PhaserLoad from './components/PhaserLoad';

function App() {
  // Thirdweb components
  const editionDropAddress = "0xd4F18cF04B9C74d5B69775BBfFbf433Ff24D8dbC";
  //const editionDrop = useEditionDrop("0xd4F18cF04B9C74d5B69775BBfFbf433Ff24D8dbC");
  // Initialise the token contract
  const tokenAddress = "0xe850E4a40F8F1B666C3AC21e7f51e6279cA0af7E";
  //const token = useToken("0xe850E4a40F8F1B666C3AC21e7f51e6279cA0af7E");
  //const memberAddressEtherscan = "https://rinkeby.etherscan.io/address" + member.address;
  const shortenAddress = (str) => {
    return str.substring(0, 6) + "..." + str.substring(str.length - 4);
  };
  const shortenAddressMore = (str) => {
    return str.substring(0, 4) + ".." + str.substring(str.length - 2);
  }
  // Vote token contract
  const voteAddress = "0xCD2Bf092ce9E051360b649D038c9ecf5b54D203e";
  //const vote = useVote("0xCD2Bf092ce9E051360b649D038c9ecf5b54D203e");

  // Moralis Components


  // Original minting components

  const [accounts, setAccounts] = useState([]); // Any updates on the frontend (ui) -> use useState to update the value on the frontend (e.g. when the user logins/authenticates)

  const isConnected = Boolean(accounts[0]); // Address of wallet that is connected

  async function connectAccount() {
      if (window.ethereum) {
          const accounts = await window.ethereum.request({
              method: "eth_requestAccounts", // Give all the accounts that exist in the user's metamask extension
          });
          console.log(accounts);
          setAccounts(accounts);
      }
  }

  useEffect(() => {
    document.title = "Star Sailors Mint";  
  }, []);

  return (
    <div className="overlay">
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
        {/* Create a new component that only shows if the user has the NFT in their wallet */}
        { isConnected ? (
          <PhaserLoad accounts={accounts} setAccounts={setAccounts} />
        ) : (
          <div>
            
          </div>
        )}
      </div>
      <div className="moving-background"></div>
    </div>
  );
}

export default App;
