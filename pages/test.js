import styled from 'styled-components';
import { useInView, motion, useScroll } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const MainWrapper = styled.main`
  width: 100vw;
  margin: 3rem auto;
  position: relative;
  padding: 1rem;
  --darkest: #0a0a0b;
  --light: #ffffff;
  --primary: #ff9246;
  --dark: #1a191d;
  --primaryGradient90: linear-gradient(90deg, #f56600 0%, #ff9246 100%);
  --darkGradient90: linear-gradient(90deg, #000000 0%, #222124 100%);
  --primaryGlow: 4px 3px 10px #7a350e;
  --primaryGlowDark: 4px 3px 10px #5e2505;
  --darkGlow: 4px 3px 10px #000000;
  --tertiaryGlow: box-shadow: 4px 3px 10px #351C82;

  input[type=text] {
    background: var(--dark);
    border: 1px solid var(--primary);
    border-radius: 5px;
    font-size: 1.8em;
    padding: .1em .4em; 
  }

  input[type=range] {
  height: 30px;
  -webkit-appearance: none;
  margin: -.7rem 0 10px;
  width: 100%;
  background: transparent;
}
input[type=range]:focus {
  outline: none;  
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  box-shadow: 2px 2px 4px #FF9669;
  background: #FFFFFF;
  border-radius: 11px;
  border: 0px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 2px 2px 4px #FF983D;
  border: 0px solid #000000;
  height: 22px;
  width: 22px;
  border-radius: 50px;
  background: #FF6B21;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #FFFFFF;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  box-shadow: 2px 2px 4px #FF9669;
  background: #FFFFFF;
  border-radius: 11px;
  border: 0px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 2px 2px 4px #FF983D;
  border: 0px solid #000000;
  height: 22px;
  width: 22px;
  border-radius: 50px;
  background: #FF6B21;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #FFFFFF;
  border: 0px solid #000000;
  border-radius: 22px;
  box-shadow: 2px 2px 4px #FF9669;
}
input[type=range]::-ms-fill-upper {
  background: #FFFFFF;
  border: 0px solid #000000;
  border-radius: 22px;
  box-shadow: 2px 2px 4px #FF9669;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 2px 2px 4px #FF983D;
  border: 0px solid #000000;
  height: 22px;
  width: 22px;
  border-radius: 50px;
  background: #FF6B21;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #FFFFFF;
}
input[type=range]:focus::-ms-fill-upper {
  background: #FFFFFF;
}

`;

const CalcWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
`;

const CircleGraph = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 30px;

  h3 {
    grid-column: 1;
    grid-row: 1;
    font-family: 'Exo', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    position: relative;
    margin: 0.5em auto;
    width: max-content;
    z-index: 10;

    &:before {
      content: '$';
      font-family: 'Exo 2', sans-serif;
      font-weight: 400;
      display: block;
      font-size: 0.5em;
      position: absolute;
      top: 0.25em;
      left: -0.7em;
    }
    /* &:after {
      content: 'per month';
      font-size: 0.3em;
      position: absolute;
      left: 0.5em;
      bottom: -0.5em;
    } */
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

const OldSchoolCircle = styled.div`
  grid-column: 1;
  grid-row: 1;
  width: 6em;
  height: 6em;
  position: relative;
  background: pink;
  border-radius: 50%;
  overflow: hidden;
  outline: 2px solid #000;
  box-shadow: var(--primaryGlow);

  mask: radial-gradient(
    farthest-side,
    #0000 calc(99% - 0.5em),
    #000 calc(100% - 0.5em)
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
    transition: transform 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28);
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
  const [movieValue, setMovieValue] = useState(1);
  const [circleValue, setCircleValue] = useState(0);
  const [moneyValue, setMoneyValue] = useState(0);

  const handleValue = (e) => {
    setMovieValue(e.target.value);
    setCircleValue(e.target.value * 3.3339);
    setMoneyValue(e.target.value * 17);
  };

  const handleCircleValue = (percentage) => {
    setCircleValue(e.target.value * 3.3339);
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

      <CalcWrapper ref={ref}>
        <section>
          <h2>Unlimited Savings</h2>
          <InputWrapper>
            <h3>How Often Do You Go To The Movies?</h3>
            <label htmlFor="movieValueSlider">Movies per Month</label>

            <input
              type="text"
              id="movieValueText"
              name="movieValueText"
              min="1"
              max="30"
              onInput={handleValue}
              onChange={handleValue}
              value={movieValue}
            />
            <input
              type="range"
              id="movieValueSlider"
              name="movieValueSlider"
              min="1"
              max="30"
              onInput={handleValue}
              onChange={handleValue}
            />
          </InputWrapper>
        </section>
        <CircleGraph>
          <h3>{moneyValue}</h3>
          <OldSchoolCircle circleValue={circleValue}>
            <div></div>
          </OldSchoolCircle>
        </CircleGraph>
      </CalcWrapper>
    </MainWrapper>
  );
};

export default Test;
