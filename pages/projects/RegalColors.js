import styled from 'styled-components';
import SVGNoise from '/components/icons/SVGNoise';
import { useState, useEffect } from 'react';

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
  --color-light: ${(props) => props.$imFeeling.colorDark};
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
      radial-gradient(74% 86% at 67% 38%, #6dffaef5 24%, #073aff00 100%),
    linear-gradient(125deg, #4eb5ffff 1%, #4c00fcff 100%);
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

const SVGWrap = styled.div`
  filter: overlay;
`;

const Cursor = styled.div`
  position: absolute;
  width: 20rem;
  height: 20rem;
  background: #fff;
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);
  transition: 0.1s ease;
  transition-property: width, height, border;
  will-change: width, height, border;
  top: var(--y);
  left: var(--x);
  z-index: -1;
`;

const PopUp = styled.div`
  margin: 45% auto;
  position: relative;
  width: 30rem;
  text-align: center;
  z-index: 40;

  & div {
    padding: 2rem 0.5rem;
    background: #ffffff69;
    border-radius: 2rem;
    box-shadow: 6px 5px 17px 2px rgb(171 171 171 / 43%);
  }
`;

const PopUpDots = styled.button`
  margin: 0.8rem 0.35rem;
  padding: 0.4rem 1rem;
  opacity: 0;
  border: none;
  border-radius: 1rem;
  color: #fff;
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
    { name: 'Joy', color: { light: '#FADE79', dark: '#EFA812' } },
    { name: 'Anxiety', color: { light: '#F2B050', dark: '#D95F12' } },
    { name: 'Angry', color: { light: '#960606', dark: '#D76337' } },
    { name: 'Envy', color: { light: '#48EAD3', dark: '#098A81' } },
    { name: 'Sadness', color: { light: '#6098C8', dark: '#2E49DA' } },
  ];

  const [imFeeling, setMyFeeling] = useState({
    feeling: 'everything',
    colorLight: '#FFFFFF',
    colorDark: '#000000',
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleFeeling = ({ name, colorLight, colorDark }) => {
    setMyFeeling({ feeling: name, colorLight, colorDark });
    // setMousePos({ x: 0, y: 0 });
  };

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setMousePos({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  return (
    <Wrapper $imFeeling={imFeeling} $mousePos={mousePos}>
      <PopUp>
        <div>
          <h2>How are you feeling today?</h2>
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
        <SVGNoise customDark={imFeeling.colorDark} />
      </SVGWrap>
      <Gradient $passFeeling={imFeeling}>
        <Cursor />
      </Gradient>
    </Wrapper>
  );
};

export default RegalColors;
