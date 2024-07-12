import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
// import LogoToggle from '../../components/Icons/LogoToggle';

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

const DeadWolfLogo = () => {
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
        alt="Seat map and selection screens"
        width={500}
        height={500}
      />{' '}
      {/* <LogoToggle color={currentColor} /> */}
    </Wrapper>
  );
};

export default DeadWolfLogo;
