import styled from 'styled-components';
import { useInView, motion, useScroll } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const MainWrapper = styled.main`
  width: 100vw;
  margin: 3rem auto;
  position: relative;
`;

const CircleGraph = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 30px;

  h3 {
    font-size: 1em;
    grid-column: 1;
    grid-row: 1;
    text-align: center;
    position: relative;
    margin: 0.8em auto;
    width: max-content;
    z-index: 10;

    &:before {
      content: '$';
      display: block;
      font-size: 0.5em;
      position: absolute;
      top: 0.25em;
      left: -0.7em;
    }
  }
`;

const OldSchoolCircle = styled.div`
  grid-column: 1;
  grid-row: 1;
  width: 7em;
  height: 7em;
  position: relative;
  background: pink;
  border-radius: 50%;
  overflow: hidden;

  mask: radial-gradient(
    farthest-side,
    #0000 calc(99% - 1em),
    #000 calc(100% - 1em)
  );

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: conic-gradient(
      purple calc(${(props) => props.circleValue} * 1%),
      #0000 0
    );
    transform-origin: center center;
    transform: rotate(${(props) => props.circleValue - 100}deg);
    transition: transform 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    z-index: -1;
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

  // Calculator Stuff
  const [value, setValue] = useState(2);
  const [circleValue, setCircleValue] = useState(0);
  const [moneyValue, setMoneyValue] = useState(0);

  const handleValue = (e) => {
    setValue(e.target.value);
    setCircleValue(e.target.value * 3.3339);
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
        <CircleGraph>
          <h3>{moneyValue}</h3>
          <OldSchoolCircle circleValue={circleValue}>
            <div></div>
          </OldSchoolCircle>
        </CircleGraph>
        <input
          type="range"
          id="volume"
          name="volume"
          min="2"
          max="30"
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
