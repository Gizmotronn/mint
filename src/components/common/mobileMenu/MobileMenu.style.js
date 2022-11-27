import styled, { keyframes } from "styled-components";
import { slideInRight } from "react-animations";

const menuAnimation = keyframes`${slideInRight}`;

const MobileMenuStyleWrapper = styled.div`
  &.riph_mobile_menu {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    transition: 0.4s;
    opacity: 1;
    display: block;

    &::before {
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      background: rgba(4, 12, 18, 0.9);
      content: "";
      z-index: -1;
    }
  }

  .riph_mobile_menu_content {
    background: #000000;
    height: 100vh;
    width: 400px;
    padding: 50px;
    margin-left: auto;
    animation: 1s ${menuAnimation};
  }

  .mobile_menu_logo {
    width: 100%;
    position: relative;
  }

  .mobile_menu_close_btn {
    position: absolute;
    right: 0px;
    top: 50%;
    background: none;
    border: none;
    outline: none;
    transform: translateY(-50%);

    svg {
      color: #ffffff;
      font-size: 24px;
    }
  }

  .riph_mobile_menu_list {
    margin-top: 50px;
    ul {
      margin: 0;
      padding: 0;

      li {
        height: 40px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;

        a {
          font-family: "PT Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          text-align: left;
          text-transform: uppercase;
          color: #ffffff;
          width: 100%;
          transition: all 0.4s;

          &:hover {
            color: #cc1010;
          }
        }

        .mobile_sub_menu_list {
          position: absolute;
          left: 0px;
          top: 40px;
          width: 100%;
          background: #000000;
          z-index: 2;
          visibility: hidden;
          opacity: 0;
          transition: all 0.3s;
          &.submenu_hovered {
            visibility: visible;
            opacity: 1;
          }
          li {
            padding: 0px 25px;
            a {
              &:hover {
                color: #cc1010;
              }
            }
          }
        }
      }
    }
  }

  .mobile_menu_social_links {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    margin-top: 30px;
    svg {
      font-size: 20px;
      color: #fff;
    }
  }

  .connect_btn {
    width: 100%;
    margin-top: 30px;
    border: none;
    svg {
      margin-right: 20px;
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    .riph_mobile_menu_content {
      width: 100%;
    }
  }
`;

export default MobileMenuStyleWrapper;
