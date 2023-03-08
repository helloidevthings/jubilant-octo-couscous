import styled from 'styled-components';
import { useState } from 'react';

const ButtonStyle = styled.button`
  background: ${(props) => (props.selected === false ? '#4C4B53' : '#7332D3')};
  border: none;
  border-radius: 8px;
  padding: 0.2em 0.5em;
  font-size: 1.1em;
`;

const FoodButton = ({ price, isSelected }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = (e) => {
    isSelected(!selected);
    setSelected(!selected);
  };

  return (
    <ButtonStyle selected={selected} onClick={toggleSelected}>
      ${price}
    </ButtonStyle>
  );
};

export default FoodButton;
