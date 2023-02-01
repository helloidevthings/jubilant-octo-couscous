import styled from 'styled-components';
import { useInView, motion, useScroll } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const MainWrapper = styled.main`
  width: 100vw;
  margin: 3rem auto;
  position: relative;
`;

const OldSchoolCircle = styled.div`
  display: grid;
  place-content: center;
  width: 300px;
  height: 300px;
  justify-items: center;
  align-items: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: conic-gradient(
      purple calc(${(props) => props.value} * 1%),
      #0000 0
    );
    mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - 2em),
      #000 calc(100% - 2em)
    );

    border-radius: 50%;
    transition: all 2s ease-in-out;
  }
`;

const CircleGraph = styled.div`
  grid-column: 1;
  grid-row: 1;
  width: 150px;
  height: 150px;
  /* background: radial-gradient(
    50px circle at 50% 50%,
    #fff 0%,
    #fff 50%,
    transparent 50%
  ); */
  /* background: conic-gradient(purple calc(50 * 1%), #0000 0); */
`;

const SvgCircle2 = styled.svg`
  stroke: pink;
  stroke-width: 5px;

  circle {
    stroke: pink;
  }
  /* circle {
    stroke-dashoffset: 10;
    stroke-dasharray: 1000;
    animation: draw 3s ease-in-out infinite alternate;
    stroke: pink;
  }

  @keyframes draw {
    from {
      stroke-dashoffset: 1000;
    }

    to {
      stroke-dashoffset: 0;
    }
  } */
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

  // Calculator Stuff
  const [value, setValue] = useState(2);
  const [circleValue, setCircleValue] = useState(0);
  const [moneyValue, setMoneyValue] = useState(0);

  const handleValue = (e) => {
    setValue(e.target.value);
    setCircleValue(e.target.value * 100);
    setMoneyValue(e.target.value * 17);
  };

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

      <div ref={ref}>
        <OldSchoolCircle value={value}>
          ${moneyValue}
          <CircleGraph></CircleGraph>
          <CircleGraph></CircleGraph>
          <CircleGraph></CircleGraph>
        </OldSchoolCircle>
        <input
          type="range"
          id="volume"
          name="volume"
          min="2"
          max="30"
          initialValue="2"
          onInput={handleValue}
          onChange={handleValue}
        />
        <label htmlFor="volume">Thing: {value} per mo</label>
      </div>

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
