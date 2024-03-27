import styled from 'styled-components';
import SVGNoise from '../../components/Icons/SVGNoise';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Wrapper = styled.main`
  color: #fff;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 0;

  --color-light: ${(props) => props.$imFeeling.colorLight};
  --color-dark: ${(props) => props.$imFeeling.colorDark};
  --x: ${(props) => props.$mousePos.x}px;
  --y: ${(props) => props.$mousePos.y}px;
`;

const Gradient = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* background: radial-gradient(at var(--x) var(--y), #fff0 0%, #ffffff1a 40%),
    linear-gradient(
      to bottom right,
      ${(props) => props.$passFeeling.colorLight},
      ${(props) => props.$passFeeling.colorDark}
    ); */
  background-size: 100% 100%;
  background-position:
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px;
  background-image:
    /* radial-gradient(18% 28% at 24% 50%, #cefaffff 7%, #073aff00 100%), */
    /* radial-gradient(18% 28% at 18% 71%, #ffffff59 6%, #073aff00 100%), */
    radial-gradient(
      70% 53% at 36% 76%,
      ${(props) => props.$passFeeling.colorLight} 0%,
      #073aff00 100%
    ),
    radial-gradient(42% 53% at 15% 94%, #ffffffff 7%, #073aff00 100%),
    /* radial-gradient(42% 53% at 34% 72%, #ffffffff 7%, #073aff00 100%), */
      /* radial-gradient(18% 28% at 35% 87%, #ffffffff 7%, #073aff00 100%), */
      /* radial-gradient(31% 43% at 7% 98%, #ffffffff 24%, #073aff00 100%), */
      /* radial-gradient(21% 37% at 72% 23%, #d3ff6d9c 24%, #073aff00 100%), */
      /* radial-gradient(35% 56% at 91% 74%, #8a4ffff5 9%, #073aff00 100%), */
      radial-gradient(
        74% 86% at 67% 38%,
        ${(props) => props.$passFeeling.colorDark} 24%,
        #073aff00 100%
      ),
    linear-gradient(125deg, #8a4ffff5 1%, #4c00fcff 100%);
  z-index: -10;
  animation: gradient 5s infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: ${(props) => props.$passFeeling.colorLight};
    width: 800px;
    height: 800px;
    border-radius: 50%;
    z-index: -1;
    animation: slowMove 3s ease-in-out infinite alternate;

    @keyframes slowMove {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(-30px, 50px) scale(1.25);
      }
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: -5%;
    left: -5%;
    width: 110%;
    height: 110%;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    z-index: -1;
  }
`;

const Cursor = styled.div`
  position: absolute;
  width: 30rem;
  height: 30rem;
  background: #fff;
  border-radius: 50%;
  opacity: 0.3;
  pointer-events: none;
  mix-blend-mode: overlay;
  transform: translate(-50%, -50%);
  transition: 0.1s ease;
  transition-property: width, height, border;
  will-change: width, height, border;
  top: var(--y);
  left: var(--x);
  z-index: -1;
`;

const Circles = styled.div`
  position: absolute;
  width: 30rem;
  height: 30rem;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  z-index: -1;
  background: ${(props) => props.$passFeeling.colorLight};
  animation: slowMove 5s ease-in-out infinite alternate;

  @keyframes slowMove {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(30px, 150px) scale(1.25);
    }
  }
`;

const SVGWrap = styled.div`
  position: absolute;
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  /* max-height: 100vh; */
  left: 0;
  top: 0;
  transform: translateZ(0);
  mix-blend-mode: soft-light;
  opacity: 0;
  display: none;
`;

const NoiseImg = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  mix-blend-mode: overlay;
  z-index: -1;
  opacity: 0.5;
  /* display: none; */
`;

const PopUp = styled.div`
  margin: 45% auto;
  position: relative;
  width: 50ch;
  text-align: center;
  z-index: 40;

  & div {
    padding: 1rem 1.5rem;
    background: #0000008f;
    border-radius: 1rem;
    box-shadow: 6px 5px 17px 2px rgb(255 255 255 / 43%);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    z-index: -1;
  }
`;

const PopUpDots = styled.button`
  margin: 0.8rem 0.35rem;
  padding: 0.4rem 1rem;
  opacity: 0;
  border: none;
  border-radius: 1rem;
  color: #fff;
  box-shadow: 6px 5px 17px 2px rgb(0 0 0 / 43%);
  font-weight: 600;
  background: linear-gradient(
    to right,
    ${(props) => props.$customLight},
    ${(props) => props.$customDark}
  );
  cursor: pointer;
  animation: popUp 0.5s cubic-bezier(0.61, 0.29, 0.7, 1.2) forwards;

  @keyframes popUp {
    0% {
      transform: scale(0);
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const RegalColors = () => {
  const Feelings = [
    { name: 'Yellow', color: { light: '#e2c24e', dark: '#EFA812' } },
    { name: 'Orange', color: { light: '#F2B050', dark: '#D95F12' } },
    { name: 'Red', color: { light: '#960606', dark: '#D76337' } },
    { name: 'Green', color: { light: '#48EAD3', dark: '#098A81' } },
    { name: 'Blue', color: { light: '#6098C8', dark: '#2E49DA' } },
  ];

  const [imFeeling, setMyFeeling] = useState({
    feeling: 'everything',
    colorLight: '#6d47b4',
    colorDark: '#240067',
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleFeeling = ({ name, colorLight, colorDark }) => {
    setMyFeeling({ feeling: name, colorLight, colorDark });
    // setMousePos({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Wrapper $imFeeling={imFeeling} $mousePos={mousePos}>
      <PopUp>
        <div>
          <h2>Choose your color?</h2>
          {Feelings.map(({ name, color }, i) => (
            <PopUpDots
              key={name}
              style={{ animationDelay: `${0.2 * i}s` }}
              $customLight={color.light}
              $customDark={color.dark}
              onClick={() =>
                handleFeeling({
                  name,
                  colorLight: color.light,
                  colorDark: color.dark,
                })
              }
            >
              {name}
            </PopUpDots>
          ))}
        </div>
      </PopUp>
      <SVGWrap>
        <SVGNoise />
      </SVGWrap>
      <NoiseImg
        src="https://res.cloudinary.com/labofthingsimages/image/upload/v1711562882/noise2_nokpwr.png"
        alt="noise filter"
        width={2234}
        height={1972}
      />
      <Gradient $passFeeling={imFeeling}>
        <Cursor />
        <Circles $passFeeling={imFeeling} />
      </Gradient>
    </Wrapper>
  );
};

export default RegalColors;
