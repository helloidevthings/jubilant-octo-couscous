import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';

const Wrapper = styled.div`
  background: #000;
  margin-bottom: 20px;
  color: #fff;
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 300px;
    height: auto;
  }
`;

const FrozenOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(358deg, #1d1d1d 0%, rgb(29 29 29 / 40%) 100%);
  background: radial-gradient(#e66465, #9198e5);
  background: radial-gradient(#e6646500, #9198e5);
  backdrop-filter: blur(10px);
  z-index: 100;

  opacity: ${(props) => (props.$isFrozen === 1 ? 0 : 1)};
  transition: all 0.5s ease-in-out;

  /* ${(props) =>
    props.isFrozen === 0
      ? 'animation: freeze ease 1.3s forwards;'
      : 'animation: unFreeze ease 1.3s forwards;'}

  @keyframes freeze {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes unFreeze {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  } */
`;

const Shatter = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://res.cloudinary.com/labofthingsimages/image/upload/v1707244914/broken-glass-cracks-on-high-260nw-1066532900_u0ju7w.webp')
    no-repeat center center;
  z-index: 1000;
  opacity: ${(props) =>
    props.$isFrozen === 1 ? 1 : props.$isFrozen === 2 ? 0 : 0};
`;

const RegalFrozen = () => {
  const [frozen, unFrozen] = useState(0);
  return (
    <Wrapper
      onClick={() => {
        unFrozen(1);
      }}
    >
      <FrozenOverlay $isFrozen={frozen}></FrozenOverlay>
      <Shatter
        $isFrozen={frozen}
        onClick={() => {
          unFrozen(2);
        }}
      ></Shatter>
      <h1>Frozen</h1>
      <p>{frozen}</p>
      <p>Regal Frozen</p>
      <Image
        src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263629/Portfolio_Images/cat_udlzld.gif"
        alt="Regal Frozen"
        width={1920}
        height={1080}
        s
      />
    </Wrapper>
  );
};

export default RegalFrozen;
