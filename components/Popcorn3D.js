import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const PopcornWrapper = styled.figure`
  position: relative;
  width: 200px;
  height: 280px;

  &:after {
    content: '';
    position: absolute;
    left: 40%;
    bottom: 0;
    width: 61%;
    height: 10%;
    border-radius: 40%;
    background: linear-gradient(90deg, #00000080 0%, #22212421 100%);
    background: #00000080;
    filter: blur(4px);
    animation: popcorn-box-shadow 2s infinite alternate;

    @keyframes popcorn-box-shadow {
      0% {
        transform: scale(0.9);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

const PopcornBucket = styled(Image)`
  position: absolute;
  animation: popcorn-box 2s infinite alternate;

  @keyframes popcorn-box {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 10px);
    }
  }
`;

const KernalPiece = styled(Image)`
  position: absolute;

  transform-origin: center top;
  animation: popcorn 4s infinite alternate ease-in-out;

  @keyframes popcorn {
    0% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(-5px, 10px, 20px) scale(1.1);
    }
    0% {
      transform: translate3d(0, 0, 10px);
    }
  }
`;

const kernals = [
  {
    alt: 'popcorn kernal',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1714142187/popcorn7_bozbfo.png',
  },
  {
    alt: 'popcorn kernal',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1714142186/popcorn6_x5v86t.png',
  },
  {
    alt: 'popcorn kernal',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1714142186/popcorn5_rdfl3s.png',
  },
  {
    alt: 'popcorn kernal',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1714142184/popcorn4_f0iduy.png',
  },
  {
    alt: 'popcorn kernal',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1714142183/popcorn3_r3ssge.png',
  },
  {
    alt: 'popcorn kernal',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1714142183/popcorn1_huwj9h.png',
  },
  {
    alt: 'popcorn kernal',
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1714142183/popcorn2_oeyzol.png',
  },
];

const Popcorn3D = () => {
  const [positions, updatePos] = useState([]);

  useEffect(() => {
    updatePos(
      kernals.map(() => ({
        Y: `-${Math.random() * 30}%`,
        X: `${Math.random() * 100}%`,
        delay: `${Math.random() * 1}s`,
        duration: `${Math.floor(Math.random() * 5) * 3}s`,
      }))
    );
  }, []);

  return (
    <PopcornWrapper>
      {kernals.map(({ alt, src }, i) => {
        return (
          <KernalPiece
            src={src}
            alt={alt}
            width={30}
            height={30}
            key={i * alt}
            style={{
              top: positions[i]?.Y,
              left: positions[i]?.X,
              animationDelay: positions[i]?.delay,
              animationDuration: positions[i]?.duration,
            }}
          />
        );
      })}
      <PopcornBucket
        src="https://res.cloudinary.com/labofthingsimages/image/upload/v1714142189/popcornbucket_zgdzi9.png"
        alt="Popcorn3D"
        width={200}
        height={235}
      />
    </PopcornWrapper>
  );
};

export default Popcorn3D;
