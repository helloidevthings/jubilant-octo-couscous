import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';

const Tabs = styled.nav`
  position: relative;
  z-index: 1;
  margin: 1rem 0;
  background: var(--dark);
  width: max-content;
  border-radius: 4rem;
  padding: 0.3rem;

  &:after {
    content: '';
    position: absolute;
    width: ${(props) => props.width + 4}px;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 4rem;
    transform: translateX(${(props) => props.positionX - 2}px);
    background: var(--tertiaryGradient90);
    /* box-shadow: 0 0 7px 2px #4b4b4b; */
    transition: transform 0.4s cubic-bezier(1, -0.35, 0.4, 1.19);
    z-index: -1;
  }
`;

const TabButton = styled.button`
  background: none;
  border: none;
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
`;

const ButtonSlider = ({ tabs = [] }) => {
  const [active, setActive] = useState(0);
  const [positions, setPosition] = useState({
    width: 116,
    X: 0,
    Y: 0,
  });

  // this ref would be to size the width of the first el, w/o doing it manually
  const buttonRef = useRef();

  return (
    <Tabs
      active={active}
      positionX={positions.X}
      Y={positions.Y}
      width={positions.width}
    >
      {tabs.map(({ name }, i) => {
        const handleClick = (e) => {
          setActive(i);
          const { clientWidth, offsetLeft } = e.currentTarget;
          setPosition({ ...positions, X: offsetLeft, width: clientWidth });
        };
        return (
          <TabButton
            key={i}
            onClick={handleClick}
            ref={i === 0 ? buttonRef : null}
          >
            {name}
          </TabButton>
        );
      })}
    </Tabs>
  );
};

export default ButtonSlider;
