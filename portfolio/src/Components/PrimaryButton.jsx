import React from "react";
import styled from "styled-components";

const PrimaryButton = () => {
  return (
    <StyledWrapper>
      <button className="btn-donate">Contact Me</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-donate {
    --clr-font-main: hsla(0 0% 20% / 100);
    --btn-bg-1: hsla(197 100% 69% / 1);
    --btn-bg-2: hsla(189 94% 43% / 1);
    --btn-bg-color: hsla(360 100% 100% / 1);
    --radii: 2em;
    cursor: pointer;
    padding: 0.9em 1.4em;
    min-width: 120px;
    min-height: 35px;
    font-size: var(--size, 0.9rem);
    font-weight: 700;
    transition: 0.8s;
    background-size: 280% auto;
    background-image: linear-gradient(
      325deg,
      var(--btn-bg-2) 0%,
      var(--btn-bg-1) 55%,
      var(--btn-bg-2) 90%
    );
    border: none;
    border-radius: var(--radii);
    color: var(--btn-bg-color);
    box-shadow: 0px 0px 20px rgba(71, 184, 255, 0.5),
      0px 5px 5px -1px rgba(58, 125, 233, 0.25),
      inset 4px 4px 8px rgba(175, 230, 255, 0.5),
      inset -4px -4px 8px rgba(19, 95, 216, 0.35);
  }

  .btn-donate:hover {
    background-position: right top;
  }

  .btn-donate:is(:focus, :focus-visible, :active) {
    outline: none;
    box-shadow: 0 0 0 3px var(--btn-bg-color), 0 0 0 6px var(--btn-bg-2);
  }

  @media (prefers-reduced-motion: reduce) {
    .btn-donate {
      transition: linear;
    }
  }
`;

export default PrimaryButton;
