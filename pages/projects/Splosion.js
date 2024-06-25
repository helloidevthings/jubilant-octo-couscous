import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

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
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background: #0000008f;
  backdrop-filter: blur(18px);
`;

const BoxWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 705px;

  img {
    object-fit: contain;
  }
`;

const LeverImage = styled(Image)`
  position: absolute;
  max-width: 500px;
  max-height: 300px;
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
  max-width: 500px;
  max-height: 600px;
  bottom: 0;
  left: 0;
`;

const Splosion = () => {
  const [activate, setActivate] = useState(false);

  const handleSplosion = () => {
    activate ? setActivate(false) : setActivate(true);
    console.log('activate', activate);
  };

  useEffect(() => {
    setTimeout(() => {
      handleSplosion(true);
    }, 1000);
  }, []);

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

      <PopUpWrapper>
        <BoxWrapper onClick={handleSplosion}>
          <LeverImage
            $splosion={activate}
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1718825737/bom-handle_aw9j9c.png"
            alt="Seat map and selection screens"
            width={3460}
            height={1074}
          />
          <BoxImage
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1718825738/bom-base_lmllvq.png"
            alt="Seat map and selection screens"
            width={3460}
            height={2506}
          />
        </BoxWrapper>
      </PopUpWrapper>
    </Wrapper>
  );
};

export default Splosion;
