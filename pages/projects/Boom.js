import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Paint from '../../components/Icons/Paint';
import PaintDrip from '../../components/Icons/PaintDrip';
import Explosion from '../../components/Icons/Explosion';
import Paint1 from '../../components/Icons/Paint1';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  margin: auto;
  display: grid;
  place-items: center;
  background: #000;
  z-index: 0;
`;

const PopUpWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  max-width: 100vw;
  max-height: 100%;
  display: grid;
  place-items: center;
  background: #0000008f;
  backdrop-filter: blur(18px);
  overflow: hidden;
  animation: opacity 0.5s ease-in-out forwards;

  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const BoxWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 660px;
  z-index: ${(props) => (props.$splosion === true ? '-1' : '1000')};
  transform: translate(0, -150%) rotate(3deg);

  animation: bounce-top 1s ease-in-out 0.5s forwards;

  @keyframes bounce-top {
    0% {
      animation-timing-function: ease-in;
      opacity: 0;
      transform: translateY(-250px);
    }

    38% {
      animation-timing-function: ease-out;
      opacity: 1;
      transform: translateY(0) rotate(-10deg);
    }

    55% {
      animation-timing-function: ease-in;
      transform: translateY(-65px) rotate(2deg);
    }

    72% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }

    81% {
      animation-timing-function: ease-in;
      transform: translateY(-28px);
    }

    90% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }

    95% {
      animation-timing-function: ease-in;
      transform: translateY(-8px);
    }

    100% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }
  }

  @keyframes drop {
    0% {
      transform: translate(0, -100%) rotate(-35deg);
    }
    20% {
      transform: translate(0, -100%) rotate(-35deg);
    }
    30% {
      transform: translate(0, -100%) rotate(20deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  img {
    object-fit: contain;
  }
`;

const LeverImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 232px;
  top: 0;
  left: 0;
  transform: translateY(0px);

  animation: ${(props) =>
    props.$splosion === true
      ? 'start ease-in-out 0.3s alternate forwards'
      : 'none'};

  @keyframes start {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(70px);
    }
  }
`;

const BoxImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 542px;
  bottom: 0;
  left: 0;
`;

const PaintWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const PaintImage = styled(Image)`
  opacity: 0;
  transform: scale(0) translate(-50%, -50%);
  position: absolute;
  top: 0;
  left: 0;

  ${(props) =>
    props.$splosion === true &&
    'animation: 1s paintImg 0.1s ease-in-out forwards;'}

  @keyframes paintImg {
    0% {
      opacity: 1;
      transform: scale(0);
      z-index: 1000;
    }
    75% {
      transform: scale(5);
    }
    99% {
      opacity: 0;
    }
    100% {
      transform: scale(0);
      z-index: -1000;
    }
  }
`;

const Boom = () => {
  const [activate, setActivate] = useState(false);

  const handleSplosion = () => {
    activate ? setActivate(false) : setActivate(true);
    console.log('activate', activate);
  };

  const splats = [
    { alt: '1' },
    { alt: '2' },
    { alt: '3' },
    { alt: '4' },
    // { alt: '5' },
    // { alt: '6' },
  ];
  // const [positions, updatePos] = useState([]);

  // useEffect(() => {
  //   updatePos(
  //     splats.map(() => ({
  //       Y: `${Math.random() * 30}%`,
  //       X: `${Math.random() * 50}%`,
  //       delay: `${Math.random() * 0.1}s`,
  //       duration: `${Math.floor(Math.random() * 5) * 1}s`,
  //     }))
  //   );
  // }, []);

  return (
    <Wrapper>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1719330260/Screenshot_2024-06-25_at_11.41.24_AM_essuba.png"
          alt="Seat map and selection screens"
          width={921}
          height={594}
          // 921 × 594
        />
      </figure>
      <h1>Borderlands</h1>
      <PopUpWrapper $splosion={activate}>
        <BoxWrapper onClick={handleSplosion} $splosion={activate}>
          <LeverImage
            $splosion={activate}
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1720035568/bom-handle_fvs6gc.png"
            alt="Seat map and selection screens"
            width={500}
            height={232}
          />
          <BoxImage
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1720035567/bom-base_fn8ijd.png"
            alt="Seat map and selection screens"
            width={500}
            height={542}
          />
          <Explosion
            splosion={activate}
            style={{
              top: '5%',
              left: '5%',
            }}
          />
          <Explosion
            splosion={activate}
            style={{
              top: '25%',
              left: '25%',
              animationDelay: '0.5s',
            }}
          />
        </BoxWrapper>
        <PaintWrapper>
          <Paint
            fill="pink"
            splosion={activate}
            style={{
              top: '5%',
              left: '10%',
            }}
          />
          <Paint1
            fill="pink"
            splosion={activate}
            style={{
              top: '30%',
              left: '50%',
            }}
          />
          {/* <PaintDrip splosion={activate} style={{ animationDelay: '2s' }} /> */}
          <PaintImage
            $splosion={activate}
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1720644399/border-img-small_gzsndr.png"
            alt="Seat map and selection screens"
            width={900}
            height={900}
          />
        </PaintWrapper>
      </PopUpWrapper>
    </Wrapper>
  );
};

export default Boom;
