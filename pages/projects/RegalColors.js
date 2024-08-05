import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Wrapper = styled.main`
  color: #fff;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 0;

  --color-light: ${(props) => props.$imFeeling.colorLight};
  --color-dark: ${(props) => props.$imFeeling.colorDark};
  --x: ${(props) => props.$mousePos.x}px;
  --y: ${(props) => props.$mousePos.y}px;
`;

const Gradient = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-position:
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px;
  background-image: radial-gradient(
      70% 53% at 36% 76%,
      ${(props) => props.$passFeeling.colorLight} 0%,
      #073aff00 100%
    ),
    radial-gradient(42% 53% at 15% 94%, #ffffffff 7%, #073aff00 100%),
    radial-gradient(
      74% 86% at 67% 38%,
      ${(props) => props.$passFeeling.colorDark} 24%,
      #073aff00 100%
    ),
    linear-gradient(125deg, #8a4ffff5 1%, #4c00fcff 100%);
  z-index: -10;
  animation: gradient 5s infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: ${(props) => props.$passFeeling.colorLight};
    width: 60vh;
    height: 60vh;

    // Large Circle
    @media (min-width: 768px) {
      width: 80vh;
      height: 80vh;
    }

    border-radius: 50%;
    z-index: -1;
    animation: slowMove 3s ease-in-out infinite alternate;

    @keyframes slowMove {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(-30px, 50px) scale(1.25);
      }
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: -5%;
    left: -5%;
    width: 110%;
    height: 110%;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    z-index: -1;
  }
`;

const Cursor = styled.div`
  position: absolute;
  width: 30rem;
  height: 30rem;
  background: #fff;
  border-radius: 50%;
  opacity: 0.3;
  pointer-events: none;
  mix-blend-mode: overlay;
  transform: translate(-50%, -50%);
  transition: 0.1s ease;
  transition-property: width, height, border;
  will-change: width, height, border;
  top: var(--y);
  left: var(--x);
  z-index: -1;
`;

const Circles = styled.div`
  position: absolute;
  width: 50vh;
  height: 50vh;

  // 2nd circle
  @media (min-width: 768px) {
    width: 40vh;
    height: 40vh;
  }

  right: 0;
  bottom: 0;
  border-radius: 50%;
  z-index: -1;
  background: ${(props) => props.$passFeeling.colorLight};
  animation: slowMove 5s ease-in-out infinite alternate;

  @keyframes slowMove {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(30px, 150px) scale(1.25);
    }
  }
`;

const NoiseImg = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  mix-blend-mode: overlay;
  z-index: -1;
  opacity: 0.5;
`;

const PopUp = styled.div`
  margin: 20% auto auto auto;
  width: 70rem;
  max-width: 80vw;
  position: absolute;
  text-align: center;
  z-index: 40;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    margin: 2rem auto auto;
    top: 0;
  }

  & div {
    padding: 1.8em 0.8em 1.5em;
    background: #121212d6;
    border-radius: 1rem;
    box-shadow: 6px 5px 17px 2px rgb(255 255 255 / 43%);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    z-index: -1;
  }
`;

const PopUpDots = styled.button`
  margin: 0.8rem 0.35rem;
  padding: 0.4rem 1rem;
  opacity: 0;
  border: none;
  border-radius: 1rem;
  color: #fff;
  box-shadow: 6px 5px 17px 2px rgb(0 0 0 / 43%);
  font-weight: 600;
  background: transparent;
  box-shadow: none;
  cursor: pointer;
  z-index: 10000;
  animation: popUp 0.5s cubic-bezier(0.61, 0.29, 0.7, 1.2) forwards;

  @keyframes popUp {
    0% {
      transform: scale(0);
    }

    50% {
      opacity: 1;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  img {
    width: 8em;
    height: 8em;
    margin: auto;
    transition: transform 0.4s cubic-bezier(0.09, 0.27, 0.2, 0.99);

    @media (max-width: 768px) {
      width: 8em;
      height: 8em;
    }
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;

const RegalColors = () => {
  const Feelings = [
    {
      name: 'Joy',
      color: { light: '#ff8100', dark: '#EFA812' },
      img: {
        alt: 'joy character',
        src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1714588863/joy_fsxb1a.png',
      },
    },
    {
      name: 'Anxiety',
      color: { light: '#F2B050', dark: '#D95F12' },
      img: {
        alt: 'anxiety character',
        src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1714588863/anxiety_a14vdf.png',
      },
    },
    {
      name: 'Anger',
      color: { light: '#B63520', dark: '#960606' },
      img: {
        alt: 'anger character',
        src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1714588857/anger_zojifs.png',
      },
    },
    {
      name: 'Sadness',
      color: { light: '#6098C8', dark: '#2E49DA' },
      img: {
        alt: 'sadness character',
        src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1714588863/sadness_nmdcbh.png',
      },
    },
    {
      name: 'Embarrassment',
      color: { light: '#f25bc5', dark: '#D0308A' },
      img: {
        alt: 'embarassed character',
        src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1714588863/embarrassment_pjj2jq.png',
      },
    },
  ];

  const [imFeeling, setMyFeeling] = useState({
    feeling: 'everything',
    colorLight: '#6d47b4',
    colorDark: '#240067',
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleFeeling = ({ name, colorLight, colorDark }) => {
    setMyFeeling({ feeling: name, colorLight, colorDark });
    // setMousePos({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Wrapper $imFeeling={imFeeling} $mousePos={mousePos}>
      <PopUp>
        <div>
          <h2>How are you feeling?</h2>
          {Feelings.map(({ name, color, img }, i) => (
            <PopUpDots
              key={name}
              style={{ animationDelay: `${0.2 * i}s` }}
              $customLight={color.light}
              $customDark={color.dark}
              onMouseOver={() => {
                handleFeeling({
                  colorLight: color.light,
                  colorDark: color.dark,
                });
              }}
              onClick={() =>
                handleFeeling({
                  colorLight: color.light,
                  colorDark: color.dark,
                })
              }
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={150}
                height={150}
                priority
              />
              {name}
            </PopUpDots>
          ))}
        </div>
      </PopUp>
      {/* <SVGWrap>
        <SVGNoise />
      </SVGWrap> */}
      <NoiseImg
        src="https://res.cloudinary.com/labofthingsimages/image/upload/v1711560648/Rectangle_1_v7fwbu.png"
        alt="noise filter"
        width={2234}
        height={1972}
      />
      <Gradient $passFeeling={imFeeling}>
        <Cursor />
        <Circles $passFeeling={imFeeling} />
      </Gradient>
    </Wrapper>
  );
};

export default RegalColors;
