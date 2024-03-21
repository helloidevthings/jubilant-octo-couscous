import styled from 'styled-components';
import SVGNoise from '/components/icons/SVGNoise';
import { useState, useEffect } from 'react';

const Gradient = styled.div`
  content: '${(props) => props.$passFeeling.colorLight}';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* background: ${(props) =>
    props.passFeeling
      ? `linear-gradient(to right, ${$colorLight}, ${$colorDark})`
      : `linear-gradient(to right, #f6d365, #fda085)`}; */

  background: linear-gradient(
    to right,
    ${(props) => props.$passFeeling.colorLight},
    ${(props) => props.$passFeeling.colorDark}
  );
  z-index: -1;
`;

const SVGWrap = styled(SVGNoise)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
`;

const PopUp = styled.div`
  margin: 45% auto;
  padding: 2rem 0.5rem;
  width: 30rem;
  background: #ffffff69;
  border-radius: 2rem;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
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
  animation: popUp 0.5s ease-in forwards;

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

  const handleFeeling = ({ name, colorLight, colorDark }) => {
    setMyFeeling({ feeling: name, colorLight, colorDark });
  };

  useEffect(() => {
    console.log(imFeeling);
  }, [imFeeling]);

  return (
    <main>
      <PopUp>
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
        <h3>Don't Be {`${imFeeling.feeling}`}! There's popcorn</h3>
      </PopUp>
      <SVGWrap />
      <Gradient $passFeeling={imFeeling} />
    </main>
  );
};

export default RegalColors;
