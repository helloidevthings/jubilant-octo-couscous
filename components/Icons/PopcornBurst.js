import styled from 'styled-components';
import { useState } from 'react';

const PopcornWrapper = styled.figure``;

const Kernal = styled.img`
  max-width: 10px;

  @media (min-width: 600px) {
    max-width: 30px;
  }

  position: absolute;
  top: 0;
  left: 0;
  transform-origin: center bottom;
  animation: popcorn 4s infinite alternate ease-in-out;

  @keyframes popcorn {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      /* transform: translate(0, 10px); */
      /* transform: perspective(200px) translate3d(-30px, 15px, 40px); */
      /* transform: translate3d(-10px, 15px, 0); */
      transform: perspective(300px) translate3d(-10px, 15px, 40px);
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

const PopcornBurst = () => {
  return (
    <PopcornWrapper>
      {PopcornPieces.map(({ src, alt }, i) => (
        <Kernal
          src={src}
          alt={alt}
          key={alt + i}
          style={{
            top: `-${Math.random() * 10}%`,
            left: `${Math.random() * 100}%`,
            // transform: `translate3D(0, 0, ${Math.random() * 100})`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 2 + 2}s`,
          }}
        />
      ))}
    </PopcornWrapper>
  );
};

export default PopcornBurst;
