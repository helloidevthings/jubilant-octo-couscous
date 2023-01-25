import { useState } from 'react';
import styled from 'styled-components';

const LunchOptions = [
  // 'Potschkee',
  // "Clancy's",
  // 'Tomatohead',
  // 'Marble City Market',
  'Kefi',
  "Clancy's",
  'FinTwoo',
  "Sweet P's",
  'Kaizen',
  'Jig & Reel',
  "Yassin's",
  'Soccer Taco',
  'Tomatohead',
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

const Lunch = () => {
  const [option, setLunch] = useState(null);

  const handleLunch = () => {
    const random = Math.floor(Math.random() * LunchOptions.length);
    setLunch(LunchOptions[random]);
  };

  return (
    <MainWrapper>
      <h1>Lunch</h1>
      <ul>
        {LunchOptions.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
      <button onClick={handleLunch}>Select Option</button>
      <h3>{option === null ? null : option}</h3>
    </MainWrapper>
  );
};

export default Lunch;
