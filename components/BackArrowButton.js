import styled from 'styled-components';
import BackArrow from './Icons/BackArrow';

const BackButton = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.5rem;
  margin: 1em;
  width: 2em;
  height: 2em;
  text-align: left;
  color: var(--text);
  text-decoration: none;
  font-weight: 700;
  background: var(--bg);
  border-radius: 50px;
  display: grid;
  place-items: center;

  &:after {
    content: none !important;
  }
`;

const BackArrowButton = () => {
  return (
    <BackButton href="/">
      <BackArrow />
    </BackButton>
  );
};

export default BackArrowButton;
