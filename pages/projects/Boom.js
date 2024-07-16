import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Paint3 from '../../components/Icons/Paint3';

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

  // put this in the middle of the screen...
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background: #0000008f;
  backdrop-filter: blur(18px);
  overflow: hidden;
  animation: opacity 0.5s ease-in-out forwards;

  ${(props) =>
    props.$fadeOut === false
      ? 'animation: fadeIn 0.5s ease-in-out forwards;'
      : 'animation: fadeOut 0.5s ease-in-out forwards;'}

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const BoxFade = styled.div`
  grid-column: 1;
  grid-row: 1;

  ${(props) =>
    props.$splosion === true &&
    'animation: 0.4s fadeBox 0.2s ease-in-out forwards;'}

  @keyframes fadeBox {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;

const BoxWrapper = styled.div`
  position: relative;
  overflow: hidden;
  grid-column: 1;
  grid-row: 1;
  width: 400px;
  height: 660px;
  transform: translate(0, -150%) rotate(3deg);
  z-index: ${(props) => (props.$splosion === true ? '-1' : '1000')};
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

const BoomImage1 = styled(Image)`
  grid-column: 1;
  grid-row: 1;
  transform: scale(0);
  transform-origin: center center;

  ${(props) =>
    props.$splosion === true && 'animation: bigBoom 0.7s ease-in-out forwards;'}
  animation-delay: 0.15s;

  @keyframes bigBoom {
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
  const [fadeOut, setFadeOut] = useState(false);

  const handleSplosion = () => {
    activate ? setActivate(false) : setActivate(true);
    setTimeout(() => {
      setFadeOut(true);
    }, 1000);
  };

  return (
    <Wrapper>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1719330260/Screenshot_2024-06-25_at_11.41.24_AM_essuba.png"
          alt="Seat map and selection screens"
          width={921}
          height={594}
        />
      </figure>
      <PopUpWrapper $splosion={activate} $fadeOut={fadeOut}>
        <BoxFade $splosion={activate}>
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
          </BoxWrapper>
        </BoxFade>
        {/* <SplodeWrap> */}
        <BoomImage1
          $splosion={activate}
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1720727535/fire-flames-explosion-png_pypff6.webp"
          alt="Seat map and selection screens"
          width={900}
          height={900}
        />
        {/* </SplodeWrap> */}
      </PopUpWrapper>
      <Paint3 activate={activate} fill="green" />
    </Wrapper>
  );
};

export default Boom;
