import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
// import DeadWolfIcon from '../../components/Icons/DeadWolfIcon';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  margin: auto;
  color: #fff;
  font-family: 'Azo Sans', Helvetica, sans-serif;
  text-align: center;
  display: grid;
  place-items: center;
  background: linear-gradient(
    to right bottom,
    ${(props) => props.$colors.light},
    ${(props) => props.$colors.dark},
    #000
  );
  z-index: 0;
  align-items: center;
  justify-content: center;
  align-content: center;
  justify-items: center;

  h1,
  h2,
  h3 {
    margin: 1.25em auto 0.25em;
  }
`;
const TextureImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  mix-blend-mode: multiply;
  z-index: -1;
`;

const PopUpWrapper = styled.div`
  max-width: 44ch;
  display: grid;
  place-items: center;
  padding: 1em 3em;
  text-align: center;
  background: #0000008f;
  border-radius: 1rem;
  box-shadow: 6px 5px 17px 2px #0000006e;
  backdrop-filter: blur(7px);
`;

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

const DeadWolf = () => {
  const colors = [
    {
      name: 'Wade to go, peanut!',
      light: '#ca272d',
      dark: '#c02227',
      left: '-20px',
      deg: 'rotate(-1deg)',
    },
    {
      name: 'Good choice, bub!',
      light: '#fdd900',
      dark: '#e2a400',
      left: '58%',
      deg: 'rotate(359deg)',
    },
  ];

  const [currentColor, setMyColor] = useState({
    name: 'Hugh will you choose?',
    light: '#203A43',
    dark: '#1a333d',
    left: '25%',
    top: '-25px',
    deg: 'rotate(0deg)',
  });

  const handleColors = ({ name, light, dark, left, deg }) => {
    setMyColor({ name, light, dark, left, deg });
  };

  return (
    <Wrapper $colors={currentColor}>
      <TextureImage
        src="https://res.cloudinary.com/labofthingsimages/image/upload/v1720032456/DP-Texture_mqyrig.jpg"
        alt="texture image"
        width={500}
        height={500}
      />
      <PopUpWrapper>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1720719713/deadwolf-logo-300_krvxbw.png"
          alt="dead and wp;f logo"
          width={300}
          height={122}
        />
        <ToggleWrap $colors={currentColor}>
          <ToggleImage
            $colors={currentColor}
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1720037214/toggle2-locket_zkjsyg.png"
            alt="dead wp;f locket"
            width={150}
            height={150}
          />
          {colors.map(({ name, light, dark, left, deg }, i) => (
            <ToggleButton
              key={light}
              id={name}
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
        <h3>{currentColor.name}</h3>
        <p>
          <small>
            <strong>
              Choose between Deadpool and Wolverine by tapping the left or right
              side of the bar.{' '}
            </strong>
          </small>
        </p>
      </PopUpWrapper>
    </Wrapper>
  );
};

export default DeadWolf;
