import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.svg``;

const ToggleWrap = styled.div`
  position: relative;
  margin: 3em auto 1em;
  height: 85px;
  width: 300px;
  border-radius: 50px;
  border: 4px solid #252424;
  box-shadow: 0px 8px 16px 5px #000;
  z-index: 10;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    border-radius: 50px;
    z-index: -1;
    outline: 2px solid #393939;
    box-shadow: inset 1px 4px 7px 4px #50505094;
    background: linear-gradient(to right, #0d0e0e91, #333538d1);
    background: linear-gradient(
      to right,
      #ca272db5 0%,
      #0d0e0e70 25%,
      #0d0e0e70 50%,
      #0d0e0e70 75%,
      #fdd900db 100%
    );
    background: linear-gradient(
      to right,
      #ca272d75 0%,
      #0d0e0e70 25%,
      #0d0e0e 50%,
      #0d0e0e70 74%,
      #fdd90045 100%
    );
    background: linear-gradient(
      to right,
      #ca272d -31%,
      #1c1c1c 25%,
      #0d0e0e 50%,
      #191a1a 74%,
      #fdd900 150%
    );
  }
`;
const ToggleImage = styled(Image)`
  position: absolute;
  width: 150px;
  height: 150px;
  top: -30px;
  left: ${(props) => props.$colors.left};
  transform: ${(props) => props.$colors.deg};
  z-index: 0;
  transition: all 0.4s ease-in-out;
`;

const ToggleButton = styled.button`
  position: relative;
  width: 50%;
  height: 100%;
  background: transparent;
  border: none;
  z-index: 1000;
`;

const LogoToggle = ({ color }) => {
  return (
    <Wrapper
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 190 60"
    >
      <path
        fill="{color}"
        d="M28.587 14 15.31 20.325 12 34.56 21.179 46h14.737l9.187-11.44-3.319-14.235L28.587 14Zm10.949 25.47-10.949 5.16-10.958-5.187-2.7-11.671 7.64-9.448h12.117l7.559 9.376-2.709 11.77Z"
      />
      <path
        fill={color}
        d="M21.931 26.138v9.93h2.896V32.88h3.454l3.921 3.181h4.074L32.04 32.81c1.727-.16 2.59-.53 3.139-1.06.301-.3.537-.656.692-1.048a3.01 3.01 0 0 0 .207-1.232 3.128 3.128 0 0 0-.782-2.27c-.71-.681-1.799-1.061-4.866-1.061h-8.499Zm11.206 3.49a1.13 1.13 0 0 1-.306.75c-.395.38-1.178.46-2.509.46h-5.576v-2.35h5.576c1.484 0 2.195.08 2.51.38a.972.972 0 0 1 .305.76Z"
      />
      <ToggleWrap $colors={currentColor}>
        <ToggleImage
          $colors={currentColor}
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1720037214/toggle2-locket_zkjsyg.png"
          alt="Seat map and selection screens"
          width={150}
          height={150}
        />
        {colors.map(({ name, light, dark, left, deg }, i) => (
          <ToggleButton
            key={light}
            onClick={() =>
              handleColors({
                name: name,
                light: light,
                dark: dark,
                left: left,
                deg: deg,
              })
            }
          ></ToggleButton>
        ))}
      </ToggleWrap>
    </Wrapper>
  );
};
export default LogoToggle;
