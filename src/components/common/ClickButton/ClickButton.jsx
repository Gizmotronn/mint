import ButtonWrapper from "./ClickButton.style";
import buttonHoverShapeBlack from "../../../assets/images/icon/button-hover-shape.svg";
import buttonHoverShapeWhite from "../../../assets/images/icon/hov_shape_s.svg";

const Button = ({ children, ...props }) => {
  return (
    <ButtonWrapper type="submit" className="bithu-btn" {...props}>
      {children}

      <img
        src={buttonHoverShapeWhite}
        className="hover-shape shape-left shape-white"
        alt="bithu nft button hover shape"
      />
      <img
        src={buttonHoverShapeWhite}
        className="hover-shape shape-right shape-white"
        alt="bithu nft button hover shape"
      />
      <img
        src={buttonHoverShapeBlack}
        className="hover-shape shape-left shape-black"
        alt="bithu nft button hover shape"
      />
      <img
        src={buttonHoverShapeBlack}
        className="hover-shape shape-right shape-black"
        alt="bithu nft button hover shape"
      />
    </ButtonWrapper>
  );
};

export default Button;
