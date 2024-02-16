import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ShatterStrokes from '../../components/Icons/ShatterStrokes';
import ShatterPiece from '../../components/Icons/ShatterPiece';

const Wrapper = styled.div`
  background: #000;
  color: #fff;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
  overflow-y: hidden;
`;

const ShatterMe = styled(ShatterStrokes)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: ${(props) => props.$y}px;
  left: ${(props) => props.$x}px;
  transform-origin: center center;
  z-index: 1000;

  path {
    stroke-width: 0.5px;

    @media (min-width: 768px) {
      stroke-width: 0.4px;
    }

    stroke-dasharray: 1000;
    stroke-dashoffset: 10;
    opacity: 0;
    animation: ${(props) =>
      props.$isFrozen === 1 ? 'draw 1.25s ease-in-out' : 'none'};

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

const ShatterScatter = styled(ShatterPiece)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform-origin: center center;
  /* animation: ${(props) =>
    props.$isFrozen === 1 ? 'scatter1 0.5s ease-out 0.8s forwards' : 'none'}; */

  @keyframes scatter1 {
    0% {
      transform: translate3d(-10%, 0, 0);
      opacity: 0.4;
    }
    20% {
      transform: translate3d(0, -100px, 0) scale(2);
    }
    100% {
      opacity: 0;
      transform: translate3d(0, 0, 0) scale(0);
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
  opacity: ${(props) => props.$isFrozen === 1 && 0};
  transition: ${(props) =>
    props.$isFrozen === 1 ? 'all 3s ease-in-out' : 'all 0.5s ease-in-out'};
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
  opacity: ${(props) => (props.$isFrozen === 1 ? 0 : 0.5)};
  /* opacity: 0; */
  /* transition: ${(props) =>
    props.$isFrozen === 1
      ? 'opacity 3s ease-in-out'
      : 'opacity .5s ease-in-out'}; */

  animation: ${(props) =>
    props.$isFrozen === 1
      ? 'fadeOut 2.5s ease-in-out forwards'
      : 'fadeIn 1.9s ease-in-out forwards'};

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
`;

const shatterPieces = Array.from({ length: 10 });

const RegalFrozen = () => {
  const [frozen, unFrozen] = useState(0);
  const [shatter, setShatter] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, z: 0 });
  const [randomPos, updatePos] = useState([]);

  useEffect(() => {
    updatePos(
      shatterPieces.map(() => ({
        X: `${Math.random() * 100}%`,
        Y: `${Math.random() * 100}%`,
        // Z: `${Math.random() * 10}px`,
        rotate: `${Math.random() * 110}deg`,
        // delay: `${Math.random() * 1}s`,
        duration: `${Math.floor(Math.random() * 3) * 1}s`,
      }))
    );
  }, []);

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

  // get mouse position only once when clicked
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
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
      <FrozenOverlay $isFrozen={frozen}></FrozenOverlay>
      <FrozenImage
        $isFrozen={frozen}
        src="https://res.cloudinary.com/labofthingsimages/image/upload/v1708017066/winter-temp_hqkbgy.jpg"
        alt="Frozen Ice"
        width={1920}
        height={1080}
      />
      <ShatterWrap>
        {shatterPieces.map((_, i) => (
          <ShatterScatter
            key={i}
            $isFrozen={frozen}
            $x={mousePos[i]?.X}
            $y={mousePos[i]?.Y}
            // $rotate={randomPos[i]?.rotate}
            style={{
              top: randomPos[i]?.Y,
              left: randomPos[i]?.X,
              // transform: `rotate(${randomPos[i]?.rotate}) perspective(500px) translate3d(0, 0, ${randomPos[i]?.Z})`,
              rotate: randomPos[i]?.rotate,
              // animationDelay: randomPos[i]?.delay,
              animationDuration: randomPos[i]?.duration,
            }}
          />
        ))}
        <ShatterMe $isFrozen={frozen} $x={mousePos.x} $y={mousePos.y} />
      </ShatterWrap>
      {/* <Shatter /> */}
      <Image
        src="https://res.cloudinary.com/labofthingsimages/image/upload/v1708019832/ghostbustersapppage_1_k9jkjo.png"
        alt="regal website mobile"
        width={390}
        height={844}
        s
      />
    </Wrapper>
  );
};

export default RegalFrozen;
