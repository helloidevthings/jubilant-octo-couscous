import styled from 'styled-components';
import { useInView, useScroll, motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const MainWrapper = styled.main`
  width: 100vw;
  margin: 3rem auto;
  height: 5000px;
  position: relative;
`;

const FirstSection = styled.section`
  display: grid;
  background: #111;
  padding: 2rem 1rem;
  margin: 1rem 0;
`;

const Test = () => {
  // Framer Use In View Stuff
  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    root: container,
    margin: '0px 100px -50px 0px',
  });

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  return (
    <MainWrapper>
      <header>
        <h1>Test Page</h1>
      </header>
      <FirstSection ref={container}>
        <h2
          ref={ref}
          style={{
            transform: isInView ? 'translateX(0)' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          First Section
        </h2>
        <p
          ref={ref}
          style={{
            transform: isInView ? 'translateX(0)' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </FirstSection>
    </MainWrapper>
  );
};

export default Test;
