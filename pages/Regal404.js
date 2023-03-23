import styled from 'styled-components';
import { useState } from 'react';
import Popcorn from '../components/Popcorn';
import Four from '../components/Four';

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
    font-family: 'Exo', sans-serif;
    margin: 0;
    line-height: 1.2;
    font-size: 3rem;
    font-style: italic;
  }

  h3 {
    padding: 1rem 0 2rem;
    font-size: 2rem;
    text-align: center;
  }
`;

const PopcornWrapper = styled.div`
  width: 100%;
  max-width: 750px;
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: center;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-template-columns: 1fr 1fr 1fr;

  figure {
    width: 100%;
    max-width: 250px;
  }

  svg {
    width: 100%;
    max-width: 160px;
  }
`;

const Regal404 = () => {
  return (
    <Container>
      <PopcornWrapper>
        <Four />
        <Popcorn />
        <Four />
      </PopcornWrapper>
      {/* <h1>
        <span>404</span>
      </h1> */}
      <h1>Well this is a reel problem.</h1>
      <h3>
        It looks like this page has popped out for a bit, but we can usher you
        to a new seat.
      </h3>
      <img
        src="https://res.cloudinary.com/labofthingsimages/image/upload/v1679603199/Group_1114_mwvyye.png"
        alt="thing"
      />
      <p>
        {' '}
        <small>
          (Seriously, though, thanks for giving us concessions on those puns.)
        </small>
      </p>
    </Container>
  );
};

export default Regal404;
