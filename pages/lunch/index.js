import { useState } from 'react';
import styled from 'styled-components';
import LunchItem from './LunchItem';

// const LunchOptions = [
//   { name: 'Potschkee', id: 1 },
//   { name: "Clancy's", id: 2 },
//   { name: 'Marble City Market', id: 3 },
//   { name: 'Kefi', id: 4 },
//   { name: 'FinTwo', id: 5 },
//   { name: "Sweet P's", id: 6 },
//   { name: 'Kaizen', id: 7 },
//   { name: 'Jig & Reel', id: 8 },
//   { name: "Yassin's", id: 9 },
//   { name: 'Soccer Taco', id: 10 },
//   { name: 'Tomatohead', id: 11 },
//   { name: 'Babalu', id: 12 },
// ];

const LunchOptions = [
  'Potschkee',
  "Clancy's",
  'Marble City Market',
  'Kefi',
  'FinTwo',
  "Sweet P's",
  'Kaizen',
  'Jig & Reel',
  "Yassin's",
  'Soccer Taco',
  'Tomatohead',
  'Babalu',
];

const MainWrapper = styled.main`
  --pink: #ec6ead;
  --blue: #3494e6;
  --gradient: linear-gradient(45deg, var(--blue), var(--pink));
  --itemGradient: linear-gradient(45deg, var(--blue), #6c80e2);
  --selectedGradient: linear-gradient(45deg, #e634b0, var(--pink));

  width: 100%;
  height: 100vh;
  padding: 1rem;
  background: var(--gradient);
  background-size: cover;
  background-repeat: no-repeat;
  font-family: 'Fira Sans', sans-serif;
`;

const LunchWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 10rem));
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 0px rgb(196 168 233 / 86%);
`;

const LunchList = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  align-content: space-around;
  grid-gap: 0.4rem; */
  min-height: 500px;
  padding-inline-start: 0;
  padding: 0.4em;
  margin: 0;
  justify-items: start;
  font-weight: bold;
  font-size: 1.3rem;
  overflow: scroll;
  box-shadow: inset 2px 2px 10px 0px rgb(196 168 233 / 86%);
`;

const LunchResults = styled.div`
  padding: 1rem;
  color: var(--pink);

  ol {
    padding-inline-start: 1rem;

    li {
      margin: 0;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }

  hr {
    margin: 1rem 0;
    border: 2px solid var(--pink);
  }
`;

const LunchListItem = styled.li`
  list-style: none;
  position: relative;
`;

const ClearButton = styled.button`
  display: inline-block;
  background: #fff;
  border: none;
  box-shadow: 2px 2px 10px 0px rgb(196 168 233 / 86%);
  border-radius: 5px;
  color: var(--pink);
  font-size: 1.5em;
  letter-spacing: 0.012em;
  font-weight: bold;
  padding: 0.4rem 0.8rem;
`;

const ChooseButton = styled.button`
  display: inline-block;
  margin-left: 0.4rem;
  padding: 0.4rem 0.8rem;
  background: var(--pink);
  border: none;
  box-shadow: 2px 2px 10px 0px rgb(196 168 233 / 86%);
  border-radius: 5px;
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
`;

const Lunch = () => {
  const [option, setLunch] = useState(null);
  const [selected, setSelected] = useState([]);

  const handleLunch = () => {
    const random = Math.floor(Math.random() * selected.length);
    setLunch(selected[random]);
  };

  const toggleSelected = (e) => {
    const option = e.target.innerText;
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  const clearSelect = () => {
    setLunch(null);
    setSelected([]);
    console.log(selected);
  };

  return (
    <MainWrapper>
      <h1>Lunch</h1>
      <LunchWrapper>
        <LunchList>
          {LunchOptions.map((option, i) => {
            return (
              <LunchListItem key={i}>
                <LunchItem
                  selected={selected.includes(option) ? true : false}
                  onClick={toggleSelected}
                >
                  {option}
                </LunchItem>
              </LunchListItem>
            );
          })}
        </LunchList>
        <LunchResults>
          <h2>You've Selected</h2>

          <ol>
            {selected.map((option, i) => {
              return <li key={i}>{option === null ? null : option}</li>;
            })}
          </ol>
          <hr />
          <ClearButton onClick={clearSelect}>Clear List</ClearButton>
          <ChooseButton onClick={handleLunch}>Choose!</ChooseButton>
          <h2>{option === null ? 'Lunch!' : option}</h2>
        </LunchResults>
      </LunchWrapper>
    </MainWrapper>
  );
};

export default Lunch;
