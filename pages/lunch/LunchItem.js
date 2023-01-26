import styled from 'styled-components';
import { useState } from 'react';

const Item = styled.button`
  background: ${(props) =>
    props.active === true ? 'var(--selectedGradient)' : 'var(--itemGradient)'};
  border: none;
  margin: 0.2rem;
  border-radius: 5px;
  padding-left: 1.3em;
  padding: 0.3em 0.8em 0.3em 2em;
  box-shadow: 2px 2px 10px 0px rgb(196 168 233 / 86%);
  position: relative;
  font-size: 1.3rem;

  &:before {
    content: '';
    position: absolute;
    left: 0.5em;
    top: 50%;
    transform: translate(0%, -50%);
    height: 1em;
    width: 1em;
    background: #fff;
    border-radius: 2px;
    box-shadow: 2px 2px 10px 0px rgb(196 168 233 / 86%);
  }

  &:after {
    content: '';
    position: absolute;
    width: 4px;
    height: 13px;
    border-bottom: 3px solid var(--pink);
    border-right: 3px solid var(--pink);
    top: 0.5em;
    left: 0.9em;
    transform: ${(props) =>
      props.active === true
        ? 'rotate(45deg) scale(1)'
        : 'rotate(30deg) scale(0)'};
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
  }
`;

const LunchItem = ({ children, selected, onClick }) => {
  const [active, setActive] = useState(false);

  const handleButtonClick = (e) => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <Item
      active={selected}
      onClick={onClick ? onClick : handleButtonClick}
      aria-selected={selected ? selected : active}
    >
      {children}
    </Item>
  );
};

export default LunchItem;
