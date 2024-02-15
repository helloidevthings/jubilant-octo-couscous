import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
import ShatterStrokes from '../../components/Icons/ShatterStrokes';
import ShatterPieces from '../../components/Icons/ShatterPieces';

const Wrapper = styled.div`
  background: #000;
  color: #fff;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ShatterWrap = styled.div`
  position: fixed;
  width: 200%;
  height: 200%;
  top: 100%;
  left: 100%;
  transform: translate(-100%, -100%);
  z-index: 1000;
  overflow: hidden;
`;

const ShatterMe = styled(ShatterStrokes)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: ${(props) => props.$y}px;
  left: ${(props) => props.$x}px;
  transform-origin: center center;
  z-index: 1000;
  mix-blend-mode: overlay;

  path {
    stroke-width: 0.5px;

    @media (min-width: 768px) {
      stroke-width: 0.3px;
    }

    stroke-dasharray: 1000;
    stroke-dashoffset: 10;
    opacity: 0;
    /* animation-play-state: ${(props) =>
      props.$isFrozen === 1 ? 'paused' : 'running'}; */
    animation: ${(props) =>
      props.$isFrozen === 1 ? 'draw 3s linear' : 'none'};

    @keyframes draw {
      from {
        opacity: 0.5;
        stroke-dashoffset: 1000;
      }

      to {
        stroke-dashoffset: 0;
        opacity: 0;
      }
    }
  }
`;

const ShatterScatter = styled(ShatterPieces)`
  position: absolute;
  opacity: 0.5;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;

  .piece1 {
    opacity: 0;
    transform-origin: top left;
    transform: translate(0, 0);
    animation: ${(props) =>
      props.$isFrozen === 1 ? 'scatter1 3s linear 1s forwards' : 'none'};

    @keyframes scatter1 {
      from {
        transform: translate(0, 0);
        opacity: 0.5;
      }
      to {
        transform: translate(100%, 100%);
        opacity: 0;
      }
    }
  }
`;

const FrozenWrap = styled.div`
  /* opacity: ${(props) => (props.$isFrozen === 1 ? 0 : 1)}; */
  /* animation: fadeIn 1.9s ease-in-out;
  @keyframes fadeIn {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  } */
  /*
  opacity: ${(props) => (props.$isFrozen === 1 ? 0 : 1)};
  transition: all 2s ease-in-out; */
`;

const FrozenOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(#e6646500, #b2b3c3);
  backdrop-filter: blur(3px);
  z-index: 100;
  opacity: ${(props) => (props.$isFrozen === 2 ? 0 : 0.9)};
  transition: all 0.5s ease-in-out;
  transition: ${(props) =>
    props.$isFrozen === 1 ? 'all 1s ease-in-out' : 'all 0.5s ease-in-out'};
`;

const FrozenImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  z-index: 100;
  object-fit: cover;
  mix-blend-mode: overlay;
  opacity: ${(props) => (props.$isFrozen === 2 ? 0 : 0.5)};
  /* opacity: 0; */
  /* transition: ${(props) =>
    props.$isFrozen === 2
      ? 'opacity 0.2s ease-in-out'
      : 'opacity 1s ease-in-out'}; */

  animation: fadeIn 1.9s ease-in-out;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

const RegalFrozen = () => {
  const [frozen, unFrozen] = useState(0);
  const [shatter, setShatter] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // toggle state based on how many clicks
  const handleClick = () => {
    if (frozen === 0) {
      unFrozen(1);
    } else if (frozen === 1) {
      unFrozen(2);
    } else {
      unFrozen(0);
    }
  };

  const handleMouseMove = (e) => {
    frozen === 1 && setMousePos({ x: e.clientX, y: e.clientY });
    console.log(mousePos);
  };

  // display shatter based on where your cursor is
  const handleShatter = () => {
    if (shatter === 0) {
      setShatter(1);
    } else {
      setShatter(0);
    }
  };

  return (
    <Wrapper
      onClick={() => {
        handleClick();
        console.log(frozen);
      }}
      onMouseDown={(e) => handleMouseMove(e)}
    >
      <ShatterWrap>
        <ShatterMe $isFrozen={frozen} $x={mousePos.x} $y={mousePos.y} />
      </ShatterWrap>
      <FrozenWrap>
        <FrozenOverlay $isFrozen={frozen}></FrozenOverlay>
        <FrozenImage
          $isFrozen={frozen}
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1708017066/winter-temp_hqkbgy.jpg"
          alt="Frozen Ice"
          width={1920}
          height={1080}
        />
        <ShatterScatter $isFrozen={frozen} />
      </FrozenWrap>
      {/* <Shatter /> */}
      <Image
        src="https://res.cloudinary.com/labofthingsimages/image/upload/v1708019832/ghostbustersapppage_1_k9jkjo.png"
        alt="regal website mobile"
        width={390}
        height={844}
        s
      />
      {/* <h1>Frozen</h1>
      <p>Regal Frozen</p>
      <Image
        src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263629/Portfolio_Images/cat_udlzld.gif"
        alt="sleeping kitten"
        width={640}
        height={480}
        s
      /> */}
    </Wrapper>
  );
};

export default RegalFrozen;
