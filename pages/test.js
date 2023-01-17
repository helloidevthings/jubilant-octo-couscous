import styled from 'styled-components';
import { useInView, motion, useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Circle from '/components/Circle';

const MainWrapper = styled.main`
  width: 100vw;
  margin: 3rem auto;
  position: relative;

  .bg {
    stroke: pink;
    opacity: 0.5;
  }

  .indicator {
    stroke: pink;
  }
`;

const SvgCircle = styled(Circle)`
  circle {
    stroke: blue;
  }
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
  const isInView = useInView(ref);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  return (
    <MainWrapper>
      <header>
        <h1>Test Page</h1>
      </header>
      <FirstSection>
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
      <SvgCircle stroke="pink" />
      <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <FirstSection>
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
