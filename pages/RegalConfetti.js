import styled from 'styled-components';
import { useState } from 'react';
import Confetti from '../components/Icons/Confetti';
import Gem from '../components/Icons/Gem';
import Sparkles from '../components/Icons/Sparkles';
import Crown from '../components/Icons/Crown';

const MainWrap = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 5rem 0.25rem;

  button {
    padding: 1rem 1.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background: #373635;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      scale: 0.9;
    }
  }
`;

const IconWrap = styled.div`
  width: 80px;
  height: 80px;
  padding: 1.5rem;
  position: relative;
  border-radius: 100%;
  border: 3px solid #7332d3;
  background: var(
    --tertiary-gradient-90,
    linear-gradient(90deg, #7332d3 0%, #4829a6 100%)
  );

  svg {
    width: 100%;
    height: 100%;
    max-height: 120px;
  }
`;

const IconWrapGem = styled(IconWrap)`
  border: 3px solid #5b9340;
  background: var(--emerald, linear-gradient(90deg, #669f4a 0%, #2a5e10 100%));
`;

const IconWrapCrown = styled(IconWrap)`
  border: 1px solid var(--primary-lightest, #ff9246);
  background: var(
    --primary-light-90,
    linear-gradient(90deg, #f56600 0%, #ff9246 100%)
  );
`;

const RegalConfetti = () => {
  const [playConfetti, setPlayConfetti] = useState(false);
  const [playSparkle, setPlaySparkle] = useState(false);
  const [playCrown, setPlayCrown] = useState(false);

  const handleConfetti = () => {
    setPlayConfetti(true);
    setTimeout(() => {
      setPlayConfetti(false);
    }, 1500);
  };

  const handleSparkle = () => {
    setPlaySparkle(true);
    setTimeout(() => {
      setPlaySparkle(false);
    }, 1500);
  };

  const handleCrown = () => {
    setPlayCrown(true);
    setTimeout(() => {
      setPlayCrown(false);
    }, 1500);
  };

  return (
    <MainWrap>
      <IconWrap>
        <Confetti startAnimation={playConfetti} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 27 21"
          width="50px"
          height="50px"
        >
          <path
            d="M23.82 10.5c0-1.33 1.161-2.419 2.58-2.419V3.244c0-1.33-1.161-2.419-2.58-2.419H3.18C1.761.825.613 1.913.613 3.244V8.08c1.419 0 2.567 1.089 2.567 2.419S2.032 12.919.6 12.919v4.837c0 1.33 1.161 2.419 2.58 2.419h20.64c1.419 0 2.58-1.088 2.58-2.419V12.92c-1.419 0-2.58-1.089-2.58-2.419Zm-5.702 5.805L13.5 13.523l-4.618 2.782 1.393-4.983L6.031 8.07l5.47-.302L13.5 3.002l1.987 4.777 5.47.302-4.245 3.254 1.406 4.97Z"
            fill="#fff"
          />
        </svg>
      </IconWrap>
      <br />
      <h1>Regal Confetti</h1>
      <br />
      <button onClick={() => handleConfetti(true)}>Test Animation</button>
      <br />
      <br />
      <IconWrapGem>
        <Sparkles startAnimation={playSparkle} />
        <Gem />
      </IconWrapGem>
      <br />
      <h1>Regal Sparkle</h1>
      <br />
      <button onClick={() => handleSparkle(true)}>Test Animation</button>
      <br />
      <br />
      <IconWrapCrown>
        <Crown startAnimation={playCrown} />
      </IconWrapCrown>
      <br />
      <h1>Regal Crown</h1>
      <br />
      <button onClick={() => handleCrown(true)}>Test Animation</button>
    </MainWrap>
  );
};

export default RegalConfetti;
