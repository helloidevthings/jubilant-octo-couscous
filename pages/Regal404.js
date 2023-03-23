import styled from 'styled-components';
import { useState } from 'react';
import Popcorn from '../components/Popcorn';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #1a191d;
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
  }

  h2 {
    font-family: 'Exo', sans-serif;
    font-size: 3rem;
    font-style: italic;
  }
`;

const Regal404 = () => {
  return (
    <Container>
      <h1>
        4<span>0</span>4
      </h1>
      <h2>Page not found</h2>
      <Popcorn />
    </Container>
  );
};

export default Regal404;
