import styled from "styled-components";

// position: absolute; -> underneath `&.riph_header` -> removes the scroll lock for the header bg shade/gradient
const NavWrapper = styled.nav`
  z-index: 999;
  &.riph_header {
    margin-left: -58px;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 1px;
    height: 90px;
    transition: all 0.3s;

    &.sticky {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(33, 33, 33, 0);
      backdrop-filter: blur(15px);
      z-index: 1000;
      transition: all 0.2s;
    }
  }

  .riph_menu_sect {
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .riph_menu_left_sect {
    width: 40%;

    .logo {
      a {
        display: inline-block;
        width: 75%;
      }
    }
  }

  .riph_menu_right_sect {
    width: 100%;
    display: flex;
    margin-right: -44px;
    align-items: center;
    justify-content: right;
  }

  .riph_menu_list {
    margin-right: 190px;
    max-width: 514px;
    min-width: 409px;
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin: 0;
      padding: 0;

      li {
        position: relative;
        cursor: pointer;

        a {
          font-family: "PT Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 25px;
          text-align: center;
          text-transform: uppercase;
          color: #ffffff;
        }

        &:hover {
          a {
            color: #cc1010;
          }
        }

        /* submenu */
        &.submenu {
          .sub_menu_sect {
            background: transparent;
            border-top: 50px solid transparent;
            position: absolute;
            top: -50px;
            left: -20px;
            width: 190px;
            visibility: hidden;
            opacity: 0;
            z-index: -100;
            transition: all 0.5s;

            .sub_menu_list {
              padding: 15px 20px;
              background: #171f25;
              flex-wrap: wrap;
              li {
                a {
                  font-family: "PT Sans", sans-serif;
                  font-style: normal;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 40px;
                  color: rgba(255, 255, 255, 0.8);
                  text-transform: capitalize;
                }

                &:hover {
                  a {
                    color: #cc1010;
                  }
                }
              }
            }
          }

          &:hover {
            .sub_menu_sect {
              top: 7px;
              visibility: visible;
              opacity: 1;
              z-index: 99;
            }
          }
        }
      }
    }
  }

  .riph_menu_btns {
    display: flex;
    min-width: 284px;
    button {
      color: #FFFFFF;
      text-transform: uppercase;
      font-family: "PT Sans", sans-serif;
      font-weight: 400;
      font-size: 16px;
    }

    .menu_btn {
      display: none;
      border: none;
      background: transparent;
      cursor: pointer;
      svg {
        font-size: 40px;
      }
    }

    .join_btn {
      height: 50px;
      width: 114px;
      background-color: transparent;
      border-radius: 10px;
    }

    .connect_btn {
      height: 50px;
      min-width: 150px;
      border: none;
      margin-left: 20px;
      background: rgba(150, 35, 35, 0.8);
      border-radius: 10px;

      svg {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 1024px) {
    .riph_menu_list {
      margin-right: 20px;
    }
  }
  @media (max-width: 991px) {
    .riph_menu_right_sect {
      justify-content: end;
    }
    .riph_menu_btns {
      justify-content: end;
      .menu_btn {
        display: block;
      }
    }

    .riph_menu_btns {
      .join_btn {
        display: none;
      }
    }
    .riph_menu_list {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }

  @media (max-width: 667px) {
    .riph_menu_btns {
      .connect_btn {
        display: none;
      }

      .menu_btn {
        svg {
          font-size: 30px;
        }
      }
    }
  }

  @media (max-width: 540px) {
    .riph_menu_left_sect {
      width: 180px;
      .logo {
        img {
          width: 100px;
        }
      }
    }

    .riph_menu_right_sect {
      width: 50%;
      .riph_menu_right_sect {
        width: 50%;
      }
    }
  }
`;

export default NavWrapper;
