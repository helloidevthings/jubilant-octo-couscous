import styled from 'styled-components';
import { useInView, useScroll } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import MoviePoster from '../components/MoviePoster';
import FoodButton from '../components/FoodButton';

const MainWrapper = styled.main`
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  position: relative;
  padding: 3rem 1rem;
  background: url('https://res.cloudinary.com/labofthingsimages/image/upload/v1678216022/bg_l2vncq.jpg') no-repeat fixed;
  object-fit: cover;
  min-height: 100vh;
  display: grid;
  align-items: start;
  justify-items: center;
  gap: 1.5rem; 

  --darkest: #0a0a0b;
  --light: #ffffff;
  --primary: #ff9246;
  --dark: #1a191d;
  --grayDark: #4C4B53;
  --primaryGradient90: linear-gradient(90deg, #f56600 0%, #ff9246 100%);
  --darkGradient90: linear-gradient(90deg, #000000 0%, #222124 100%);
  --primaryGlow: 4px 3px 10px #7a350e;
  --primaryGlowDark: 4px 3px 10px #5e2505;
  --darkGlow: 4px 3px 10px #000000;
  --tertiaryGlow: box-shadow: 4px 3px 10px #351C82;
  --tertiaryGradient90: linear-gradient(90deg, #7332D3 0%, #4829A6 100%);

  h1 {
    font-family: 'Exo';
    font-weight: 800;
    font-style: italic;
    font-size: 2.5rem;
    margin: 0; 
    grid-row: 1;
    grid-column: 1;
  }

  input[type=text] {
    background: var(--darkGradient90);
    border: 3px solid var(--dark);
    border-radius: 10px;
    font-size: 1.8em;
    padding: .3em .5em; 

  }
  input[type=range] {
  height: 30px;
  -webkit-appearance: none;
  margin: -15px 0 10px;
  width: 100%;
  background: transparent;
}
input[type=range]:focus {
  outline: none;  
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  box-shadow: 2px 2px 7px #ab471c;
  background: var(--primaryGradient90);
  border-radius: 11px;
  border: 0px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 2px 2px 4px #000;
  height: 22px;
  width: 22px;
  border: 8px solid #fff;
  border-radius: 50px;
  background: #ff9246;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -8px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: var(--primaryGradient90);
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  box-shadow: 2px 2px 4px #FF9669;
  background: var(--primaryGradient90);
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
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: var(--primaryGradient90);
  border: 0px solid #000000;
  border-radius: 22px;
  box-shadow: 2px 2px 4px #FF9669;
}
input[type=range]::-ms-fill-upper {
  background: var(--primaryGradient90);
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
  background: var(--primaryGradient90);
}
input[type=range]:focus::-ms-fill-upper {
  background: var(--primaryGradient90);
}

`;

const MovieGrid = styled.section`
  grid-column: 1;
  grid-row: 2;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  overflow: scroll;
  width: 100%;

  @media (min-width: 1250px) {
    max-width: 60vw;
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  }

  img {
    border-radius: 6px;
    box-shadow: var(--darkGlow);
  }
`;

const CalcWrapper = styled.div`
  grid-column: 2;
  grid-row: 2;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background: linear-gradient(182deg, #29292c 0%, #141414 100%);
  border-radius: 30px;
  box-shadow: var(--darkGlow);

  @media (min-width: 1250px) {
    position: sticky;
    top: 2rem;
    right: 1rem;
    max-width: 600px;
  }
`;

const CircleGraph = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 0.5em auto;
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
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;

  label {
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 0.1em;
    margin-bottom: 0.5em;
  }

  h2 {
    font-family: 'Exo', sans-serif;
    margin: 0;
    font-weight: 800;
    font-size: 1.5em;
    text-align: center;
  }
`;

const OldSchoolCircle = styled.div`
  grid-column: 1;
  grid-row: 1;
  width: 6em;
  height: 6em;
  position: relative;
  background: #000;
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
      var(--primary) calc(${(props) => props.circleValue} * 1%),
      #0000 0
    );
    transform-origin: center center;
    transform: rotate(${(props) => props.circleValue - 100}deg);
    transition: transform 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    z-index: -1;
  }
`;

const Concessions = styled.section`
  display: flex;
  justify-content: space-around;
`;

const FirstSection = styled.section`
  display: grid;
  background: #111;
  padding: 2rem 1rem;
  margin: 1rem 0;
`;

const MoviePosters = [
  {
    src: 'https://regalcdn.azureedge.net/REG/65/HO00012906/TV_SmallPosterImage/20221214-092300385.jpg',
    alt: '66',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/ShazamFuryoftheGods/HO00012281/TV_SmallPosterImage/20230126-111214537.jpg',
    alt: 'Shazam',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/MovingOn/HO00014063/TV_SmallPosterImage/20230302-083820759.jpg',
    alt: 'Moving On',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/Inside/HO00013961/TV_SmallPosterImage/20230215-095518664.jpg',
    alt: 'Inside',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/JohnWickChapter4/HO00010988/TV_SmallPosterImage/20230220-085547043.jpg',
    alt: 'John Wick 4',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/SuperMarioBrosTheMovie/HO00011659/TV_SmallPosterImage/20230206-074403697.jpg',
    alt: 'Mario',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/Paint/HO00013991/TV_SmallPosterImage/20230306-131036467.jpg',
    alt: 'Paint',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/Renfield/HO00013741/TV_SmallPosterImage/20230105-115131662.jpg',
    alt: 'Renfield',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/DungeonsDragonsHonorAmongThieves/HO00010993/TV_SmallPosterImage/20221205-093235598.jpg',
    alt: 'Dungeons',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/GuardiansoftheGalaxyVol3/HO00011165/TV_SmallPosterImage/20230213-083137574.jpg',
    alt: 'Guardians',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/LittleMermaidThe/HO00011716/TV_SmallPosterImage/20221013-133650238.jpg',
    alt: 'Ariel',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/SpiderManAcrosstheSpiderVerse/HO00011006/TV_SmallPosterImage/20221220-090820714.jpg',
    alt: 'Spiderman',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/BigGeorgeForemanTheMiraculousStory/HO00013907/TV_SmallPosterImage/20230201-110438340.jpg',
    alt: 'Big George',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/AIR/HO00013998/TV_SmallPosterImage/20230217-135523452.jpg',
    alt: 'Air',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/SuperMarioBrosTheMovie/HO00011659/TV_SmallPosterImage/20230206-074403697.jpg',
    alt: 'Mario',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/Paint/HO00013991/TV_SmallPosterImage/20230306-131036467.jpg',
    alt: 'Paint',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/Renfield/HO00013741/TV_SmallPosterImage/20230105-115131662.jpg',
    alt: 'Renfield',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/DungeonsDragonsHonorAmongThieves/HO00010993/TV_SmallPosterImage/20221205-093235598.jpg',
    alt: 'Dungeons',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/GuardiansoftheGalaxyVol3/HO00011165/TV_SmallPosterImage/20230213-083137574.jpg',
    alt: 'Guardians',
  },
  {
    src: 'https://regalcdn.azureedge.net/REG/LittleMermaidThe/HO00011716/TV_SmallPosterImage/20221013-133650238.jpg',
    alt: 'Ariel',
  },
];

const ConsessionsValue = [10, 20, 30, 40, 50];

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
  const [movieValue, setMovieValue] = useState(0);
  const [circleValue, setCircleValue] = useState(0);
  const [moneyValue, setMoneyValue] = useState(0);

  const handleValue = (e) => {
    setMovieValue(e.target.value);
    setCircleValue(movieValue * 3.3339);
    setMoneyValue(movieValue * 17);
  };

  const movieOptions = [{ name: 'Month' }, { name: 'Year' }];

  return (
    <MainWrapper>
      <h1>What Movies Do You Want To See?</h1>
      <MovieGrid>
        {MoviePosters.map(({ src, alt }, i) => {
          return (
            <MoviePoster
              poster={src}
              title={alt}
              key={`${alt + i}`}
              isSelected={(selected) =>
                setMovieValue(movieValue + (selected ? 1 : -1))
              }
            />
          );
        })}
      </MovieGrid>
      <CalcWrapper ref={ref}>
        <section>
          <InputWrapper>
            <h2>How Often Do You Go To The Movies?</h2>
            <CircleGraph>
              <h3>{moneyValue}</h3>
              <OldSchoolCircle circleValue={circleValue}>
                <div></div>
              </OldSchoolCircle>
            </CircleGraph>
            <label for="movieValueText">Movies</label>
            <input
              type="text"
              id="movieValueText"
              name="movieValueText"
              min="0"
              max="60"
              onInput={handleValue}
              onChange={handleValue}
              value={movieValue}
            />
            <input
              type="range"
              id="movieValueSlider"
              name="movieValueSlider"
              min="0"
              max="60"
              onInput={handleValue}
              onChange={handleValue}
            />
          </InputWrapper>
          <h2>Do you buy Concessions?</h2>
          <Concessions>
            {ConsessionsValue.map((price) => {
              return (
                <FoodButton
                  price={price}
                  isSelected={(selected) =>
                    setMoneyValue(moneyValue + (selected ? price : -price))
                  }
                />
              );
            })}
          </Concessions>
        </section>
      </CalcWrapper>
    </MainWrapper>
  );
};

export default Test;
