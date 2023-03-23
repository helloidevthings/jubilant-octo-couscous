import styled from 'styled-components';
import { useState } from 'react';
import Popcorn from '../components/Popcorn';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #1a191d
    url(https://res.cloudinary.com/labofthingsimages/image/upload/v1679599870/crownimage1_ejqcoh.png)
    no-repeat center center;
  background-size: cover;
  padding: 1rem;
  overflow: hidden;

  h1,
  h2 {
    margin: 0;
    line-height: 1.2;
  }

  h1 {
    font-family: 'Exo', sans-serif;
    font-size: 10rem;
    font-weight: 400;

    span {
      /* color: #1a191d; */
    }
  }

  h2 {
    font-family: 'Exo', sans-serif;
    font-size: 3rem;
    font-style: italic;
  }
`;

const PopcornWrapper = styled.div`
  max-width: 500px;

  /* &:before,
  &:after {
    content: '4';
    position: absolute;
    top: 50%;
    font-size: 13em;
    font-family: 'Exo', sans-serif;
  } */

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }
`;

const Regal404 = () => {
  return (
    <Container>
      <PopcornWrapper>
        <Popcorn />
      </PopcornWrapper>
      <h1>
        <span>404</span>
      </h1>
      <h2>Well this is a reel problem.</h2>
    </Container>
  );
};

export default Regal404;
