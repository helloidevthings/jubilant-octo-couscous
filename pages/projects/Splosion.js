import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Paint from '../../components/Icons/Paint';
import PaintDrip from '../../components/Icons/PaintDrip';

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
  /* z-index: 1000; */
  z-index: ${(props) => (props.$splosion === true ? '-1' : '1000')};
  /* transform: ${(props) =>
    props.$splosion === true ? 'translateZ(-1px)' : 'translateZ(1000px)'}; */

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

const PaintWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

// const PaintSvg = styled(Paint)`
//   opacity: 0;
//   transform: scale(0);

//   ${(props) =>
//     props.$splosion === true && 'animation: 1s splat 1s ease-in-out forwards;'}

//   @keyframes splat {
//     0% {
//       opacity: 1;
//       transform: scale(0);
//       z-index: 1000;
//     }
//     75% {
//       transform: scale(10);
//     }
//     99% {
//       opacity: 0;
//     }
//     100% {
//       transform: scale(0);
//       z-index: -1000;
//     }
//   }
// `;

const PaintImage = styled(Image)`
  perspective: 400px;
  opacity: 0;
  transform: scale(0);

  ${(props) =>
    props.$splosion === true && 'animation: 1s splat 1s ease-in-out forwards;'}

  @keyframes splat {
    0% {
      opacity: 1;
      transform: scale(0);
      z-index: 1000;
    }
    75% {
      transform: scale(10);
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

const Splosion = () => {
  const [activate, setActivate] = useState(false);

  const handleSplosion = () => {
    activate ? setActivate(false) : setActivate(true);
    console.log('activate', activate);
  };

  const splats = [{ alt: '1' }, { alt: '2' }, { alt: '3' }];

  const [positions, updatePos] = useState([]);

  useEffect(() => {
    updatePos(
      splats.map(() => ({
        Y: `-${Math.random() * 30}%`,
        X: `${Math.random() * 100}%`,
        delay: `${Math.random() * 1}s`,
        duration: `${Math.floor(Math.random() * 5) * 3}s`,
      }))
    );
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

      <PopUpWrapper $splosion={activate}>
        <BoxWrapper onClick={handleSplosion} $splosion={activate}>
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
        <PaintWrapper>
          {splats.map(({ alt }, i) => (
            <Paint
              $splosion={activate}
              key={alt + i}
              style={{
                top: positions[i]?.Y,
                left: positions[i]?.X,
                animationDelay: positions[i]?.delay,
                animationDuration: positions[i]?.duration,
              }}
            />
          ))}
          {/* <PaintImage
            $splosion={activate}
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1719334739/paint_avubsu.png"
            alt="Seat map and selection screens"
            width={800}
            height={608}
          /> */}
          <PaintDrip $activate={activate} />
        </PaintWrapper>
      </PopUpWrapper>
    </Wrapper>
  );
};

export default Splosion;
