import styled from 'styled-components';
import BackArrow from './Icons/BackArrow';

const BackButton = styled.a`
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text);
  text-decoration: none;
  font-weight: 700;
  background: var(--bg);
  border: 2px solid var(--text-secondary);
  border-radius: 50px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: var(--text-secondary);
    transform: scale(1.05);
  }

  &:after {
    content: none !important;
  }

  svg {
    flex-shrink: 0;
  }
`;

const BackArrowButton = () => {
  return (
    <BackButton href="/">
      <BackArrow />
      <span>Home</span>
    </BackButton>
  );
};

export default BackArrowButton;
