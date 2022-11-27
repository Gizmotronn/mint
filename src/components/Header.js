import { useModal } from '../utils/ModalContext'
import { useEffect, useState } from "react";
import { FaDiscord, FaPallet, FaWallet, Pallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from './common/Button';
import NavWrapper from './HeaderStyled'; 
import MobileMenu from "./common/mobileMenu/MobileMenu";
import logo from '../assets/rm1.png'
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  const substr = (str, n) =>{
    return str.length > n ? str.substr(0, n -1) : str;
  }

  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    return () => {
      window.removeEventListener("sticky", handleScroll);
    };
  }, []);

  return (
    <NavWrapper className="riph_header" id="navbar">
      <div className="container">
        {/* Main Menu Start */}
        <div className="riph_menu_sect">
          <div className="riph_menu_left_sect">
            <div className="logo">
              <a href="/">
                {/*<img src={logo} alt="riph nft logo" /> {/* Increase logo size (not header/nav menu) */}
              </a>
            </div>
          </div>
          <div className="riph_menu_right_sect riph_v1_menu_right_sect">
            <div className="riph_menu_btns">
              <button className="menu_btn" onClick={() => handleMobileMenu()}>
                <MdNotes />
              </button>
              <Button sm variant="outline" className="join_btn">
                <FaPallet /> Stake
              </Button>
            </div>
          </div>
        </div>
        {/* <!-- Main Menu END --> */}
        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  );
};

export default Header;
