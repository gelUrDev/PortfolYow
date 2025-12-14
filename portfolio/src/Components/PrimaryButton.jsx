import React from "react";
import styled from "styled-components";

const PrimaryButton = ({BtnTxt}) => {
  return (
    <StyledWrapper>
      <button className="boton-elegante">{BtnTxt}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .boton-elegante {
    padding: 14px 28px;
    border: 2px solid #2c2c2c;
    background-color: #07b6d5;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 30px;
    transition: all 0.4s ease;
    outline: none;
    position: relative;
    overflow: hidden;
    font-weight: bold;
  }

  .boton-elegante::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    transform: scale(0);
    transition: transform 0.5s ease;
  }

  .boton-elegante:hover::after {
    transform: scale(4);
  }

  .boton-elegante:hover {
    border-color: #07b6d5;
    background: #0a101e;
  }
`;

export default PrimaryButton;
