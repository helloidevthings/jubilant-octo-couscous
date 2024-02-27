import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useState, useEffect } from 'react';
// import ShatterStrokes4 from '../../components/Icons/ShatterStrokes4';
import ShatterPiece from '../../components/Icons/ShatterPiece';
// import ShatterPieces3 from '../../components/Icons/ShatterPieces3';
import ShatterBoth from '../../components/Icons/ShatterBoth';
// import LogoSVG from '../../components/Icons/LogoSVG';

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
  z-index: 90;
  overflow: hidden;
  overflow-y: hidden;
`;

const ShatterMe = styled(ShatterBoth)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: ${(props) => props.$y}px;
  left: ${(props) => props.$x}px;
  z-index: 90;

  .slowFade {
    opacity: 0;
    animation: ${(props) =>
      props.$isFrozen === 1
        ? 'opacity 1.1s cubic-bezier(0, 0.8, 0.58, 0.95)'
        : 'none'};

    @keyframes opacity {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }

  .cracks {
    stroke-width: 2px;

    @media (min-width: 768px) {
      stroke-width: 1px;
    }

    stroke-dasharray: 1000;
    stroke-dashoffset: 10;
    opacity: 1;
    animation: ${(props) =>
      props.$isFrozen === 1 ? 'draw 0.8s forwards' : 'none'};

    @keyframes draw {
      from {
        /* opacity: 1; */
        stroke-dashoffset: 1000;
      }

      to {
        stroke-dashoffset: 0;
        /* opacity: 0; */
      }
    }
  }

  .bigFade {
    opacity: 0;
    animation: ${(props) =>
      props.$isFrozen === 1 ? 'opacity 2s ease-in 0.3s' : 'none'};

    @keyframes opacity {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.4;
      }
    }
  }

  .pieces {
    animation: ${(props) =>
      props.$isFrozen === 1
        ? 'drop 1s cubic-bezier(0, 0, 0, 1.23) forwards'
        : 'none'};
  }

  @keyframes drop {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(100%);
    }
  }
`;

// const ShatterDrop = styled(ShatterPieces3)`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 1000;

//   .piece {
//     opacity: 0;
//     animation: ${(props) =>
//       props.$isFrozen === 1 ? 'drop 1s cubic-bezier(0, 0, 0, 1.23)' : 'none'};
//   }

//   @keyframes drop {
//     from {
//       opacity: 0.8;
//       transform: translateY(0px);
//     }
//     to {
//       opacity: 0;
//       transform: translateY(100px);
//     }
//   }
// `;

const ShatterScatter = styled(ShatterPiece)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform-origin: center center;
  animation: ${(props) =>
    props.$isFrozen === 1 ? 'scatter1 0.5s ease-out 0.8s forwards' : 'none'};

  @keyframes scatter1 {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 0.4;
    }
    20% {
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(0, 0, 0);
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
  backdrop-filter: blur(2px);
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

const shatterPieces = Array.from({ length: 0 });

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
        {/* <ShatterDrop $isFrozen={frozen} $x={mousePos.x} $y={mousePos.y} /> */}
      </ShatterWrap>
      {/* <Shatter /> */}
      <Image
        src="https://res.cloudinary.com/labofthingsimages/image/upload/v1708019832/ghostbustersapppage_1_k9jkjo.png"
        alt="regal website mobile"
        width={390}
        height={844}
      />
      {/* <LogoSVG /> */}
    </Wrapper>
  );
};

export default RegalFrozen;
