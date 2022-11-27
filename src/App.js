import './App.css';
import { useState, useEffect, useMemo } from 'react';
import MainMint from './components/MainMint';
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
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

  return (
    <div className="overlay">
      <div className="App">
        <Header />
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
        {/* Create a new component that only shows if the user has the NFT in their wallet */}
        { isConnected ? (
          <div>

          </div>
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