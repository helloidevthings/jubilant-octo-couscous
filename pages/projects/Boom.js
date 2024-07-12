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
  display: grid;
  place-items: center;
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

const SplodeWrap = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
`;

const BoomImage1 = styled(Image)`
  transform: scale(0);

  ${(props) =>
    props.$splosion === true &&
    'animation: paintImg 0.7s ease-in-out forwards;'}
  animation-delay: 0.15s;

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
      <h1>Borderlands</h1>
      <PopUpWrapper $splosion={activate} $fadeOut={fadeOut}>
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
        <SplodeWrap>
          <BoomImage1
            $splosion={activate}
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1720727535/fire-flames-explosion-png_pypff6.webp"
            alt="Seat map and selection screens"
            width={900}
            height={900}
          />
        </SplodeWrap>
      </PopUpWrapper>
      <Paint3 activate={fadeOut} fill="green" />
    </Wrapper>
  );
};

export default Boom;
