import styled from 'styled-components';
import { useState, useEffect } from 'react';

const ScrollButton = styled.button`
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text);
  text-decoration: none;
  font-weight: 700;
  background: var(--bg);
  border: 2px solid var(--secondary);
  border-radius: 50px;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: ${(props) => (props.$visible ? '1' : '0')};
  pointer-events: ${(props) => (props.$visible ? 'auto' : 'none')};

  &:hover {
    background: var(--secondary);
    transform: scale(1.05);
  }

  svg {
    flex-shrink: 0;
  }
`;

const UpArrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 12V4M8 4L4 8M8 4L12 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 100px
      setVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollButton onClick={scrollToTop} $visible={visible}>
      <UpArrow />
      <span>Top</span>
    </ScrollButton>
  );
};

export default ScrollToTopButton;
