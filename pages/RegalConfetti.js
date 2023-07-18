import styled from 'styled-components';
import { useState } from 'react';
import Confetti from '../components/Icons/Confetti';

const MainWrap = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const IconWrap = styled.figure`
  width: 80px;
  height: 80px;
  padding: 2rem;
  border-radius: 100%;
  border: 3px solid #7332d3;
  background: var(
    --tertiary-gradient-90,
    linear-gradient(90deg, #7332d3 0%, #4829a6 100%)
  );
`;

const Icon = styled.svg`
  width: 100%;
  height: 100%;
  max-height: 80px;
`;

const RegalConfetti = () => {
  const [count, setCount] = useState(0);

  return (
    <MainWrap>
      <Confetti />
      <IconWrap>
        <Icon
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
        </Icon>
      </IconWrap>
      <h1>Regal Confetti</h1>
    </MainWrap>
  );
};

export default RegalConfetti;
