import styled from 'styled-components';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const PopcornWrapper = styled.figure`
  position: relative;
  z-index: 1;
  border: 0.5rem solid #f56600;

  @media (min-width: 600px) {
    border: 1rem solid #f56600;
  }

  border-radius: 50%;
  box-shadow: 0px 9px 9px #f5660061;
  max-width: 500px;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    margin-bottom: 4rem;
  }

  &:after {
    content: '';
    position: absolute;
    left: 40%;
    bottom: -20%;
    width: 60%;
    height: 20%;
    border-radius: 50%;
    background: linear-gradient(90deg, #00000080 0%, #22212421 100%);
    filter: blur(4px);
    z-index: -1;
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

const PopcornContainer = styled.img`
  width: 100%;
  max-width: 500px;
  object-fit: cover;
  position: relative;
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

const Kernal = styled(Image)`
  max-width: 30px;
  max-height: 30px;

  @media (max-width: 600px) {
    max-width: 20px;
    max-height: 20px;
  }

  object-fit: contain;
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

const PopcornPieces = [
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1679429866/popcorn10_qphugl.png',
    alt: 'popcorn',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1679426183/popcorn1_lji8xd.png',
    alt: 'popcorn',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1679428953/popcorn6_ejzpqz.png',
    alt: 'popcorn',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1679428953/popcorn7_qpvja0.png',
    alt: 'popcorn',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1679428952/popcorn5_p6wesk.png',
    alt: 'popcorn',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1679429839/popcorn9_jcolzn.png',
    alt: 'popcorn',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1679429866/popcorn10_qphugl.png',
    alt: 'popcorn',
  },
];

const Popcorn = () => {
  const [positions, updatePos] = useState([]);

  useEffect(() => {
    updatePos(
      PopcornPieces.map(() => ({
        Y: `-${Math.random() * 30}%`,
        X: `${Math.random() * 100}%`,
        delay: `${Math.random() * 1}s`,
        duration: `${Math.floor(Math.random() * 5) * 3}s`,
      }))
    );
  }, []);

  return (
    <PopcornWrapper>
      <PopcornContainer
        fill="true"
        sizes="(max-width: 600px) 500px,
                  200px"
        src="https://res.cloudinary.com/labofthingsimages/image/upload/v1679426184/popcornfull_rfousl.png"
        alt="popcorn"
      />
      {PopcornPieces.map(({ src, alt }, i) => (
        <Kernal
          src={src}
          alt={alt}
          fill="true"
          sizes="(max-width: 600px) 10px,
          30px"
          key={alt + i}
          style={{
            top: positions[i]?.Y,
            left: positions[i]?.X,
            animationDelay: positions[i]?.delay,
            animationDuration: positions[i]?.duration,
          }}
        />
      ))}
    </PopcornWrapper>
  );
};

export default Popcorn;
