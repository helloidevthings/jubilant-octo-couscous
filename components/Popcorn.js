import styled from 'styled-components';
import { useState } from 'react';

const PopcornWrapper = styled.figure`
  position: relative;
  z-index: 1;
  /* border: 10px solid #f56600;
  border-radius: 50%; */

  &:after {
    content: '';
    position: absolute;
    left: 40%;
    bottom: -20%;
    width: 60%;
    height: 20%;
    border-radius: 50%;
    background: linear-gradient(90deg, #00000080 0%, #22212421 100%);
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
  max-width: 300px;
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

const Kernal = styled.img`
  max-width: 40px;
  position: absolute;
  top: 0;
  left: 0;
  animation: popcorn 1s infinite alternate ease-in-out;

  @keyframes popcorn {
    0% {
      /* transform: translate3d(0, 0, 0); */
    }
    100% {
      /* transform: perspective(100px) translate3d(30px, 10px, 10px); */
      transform: translate(0, 10px);
    }
  }
`;

const PopcornPieces = [
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
  const [topKern, leftKern] = useState(false);

  return (
    <PopcornWrapper>
      <PopcornContainer
        src="https://res.cloudinary.com/labofthingsimages/image/upload/v1679426184/popcornfull_rfousl.png"
        alt="popcorn"
      />
      {PopcornPieces.map(({ src, alt }, i) => (
        <Kernal
          src={src}
          alt={alt}
          key={alt + i}
          style={{
            top: `${Math.random() * 30}%`,
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

export default Popcorn;
