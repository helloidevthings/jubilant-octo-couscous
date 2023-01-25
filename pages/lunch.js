import { useState } from 'react';
import styled from 'styled-components';

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
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

const LunchButton = styled.button`
  background: blue;

  [aria-selected='true'] {
    background: orange;
  }
`;

const Lunch = () => {
  const [option, setLunch] = useState(null);
  const [selected, setSelected] = useState([]);
  const [active, setActive] = useState(false);

  const handleLunch = () => {
    const random = Math.floor(Math.random() * selected.length);
    setLunch(selected[random]);
  };

  // const handleSelect = () => {
  //   setSelected([...selected, option]);
  //   console.log(selected);
  //   handleLunch;
  // };

  const toggleSelected = (e) => {
    const option = e.target.innerText;
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
      setActive(true);
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
      <button onClick={clearSelect}>Clear Select</button>
      <ul>
        {LunchOptions.map((option, i) => {
          return (
            <li key={i}>
              <LunchButton
                aria-selected={active === true ? true : false}
                onClick={toggleSelected}
              >
                {option}
              </LunchButton>
            </li>
          );
        })}
      </ul>
      <h4>New List</h4>
      <p>
        {selected.map((option, i) => {
          return <span key={i}>{option === null ? null : option} • </span>;
        })}
      </p>
      <button onClick={handleLunch}>Select Option</button>
      <h2>{option === null ? 'Select an option' : option}</h2>
    </MainWrapper>
  );
};

export default Lunch;
