import styled from 'styled-components';
import { useState } from 'react';
import Popcorn from '../../components/Popcorn';
import Four from '../../components/Four';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #1a191d;
  background-size: cover;
  padding: 1rem;
  overflow: hidden;
`;

const TextWrap = styled.section`
  margin: 0 auto;
  text-align: center;
  max-width: 800px;

  img {
    width: 100%;
    max-width: 530px;
    margin: 0 auto;
  }

  h1,
  h2 {
    font-family: 'Exo', sans-serif;
    margin: 0;
    line-height: 1.2;
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0;
    font-size: 2rem;
    color: #fff;
    text-wrap: balance;

    @media (min-width: 600px) {
      font-size: 3rem;
    }
  }

  h3 {
    font-family: 'Exo', sans-serif;
    padding: 1rem 0 2rem;
    font-weight: 500;
    font-size: 1rem;
    color: #fff;

    @media (min-width: 600px) {
      font-size: 1.8rem;
    }
  }

  p {
    margin-top: 0.5rem;
    font-weight: 700;
    color: #999;

    em {
      font-size: 0.8rem;

      @media (min-width: 600px) {
        font-size: 1.2rem;
      }
    }
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
    max-width: 100px;

    @media (min-width: 600px) {
      max-width: 250px;
    }
  }

  svg {
    width: 100%;
    max-width: 80px;

    @media (min-width: 600px) {
      max-width: 160px;
    }
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
      <TextWrap>
        <h1>Well this is a reel problem.</h1>
        <h3>
          It looks like this page has popped out for a bit, but we can usher you
          to a new seat.
        </h3>
        <p>
          <em>
            (Seriously, though, thanks for giving us concessions on those puns.)
          </em>
        </p>
      </TextWrap>
    </Container>
  );
};

export default Regal404;
