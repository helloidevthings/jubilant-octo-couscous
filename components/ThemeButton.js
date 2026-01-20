import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Moon from './Icons/Moon';
// import Sun from './Icons/Sun';

const ColorToggle = styled.button`
  background: var(--bg);
  color: var(--text);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1em;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  transition: background 0.3s ease;
`;

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render after mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <ColorToggle>Theme</ColorToggle>;
  }

  return (
    <ColorToggle onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {/* <Moon /> */}
      {/* <Sun /> */}
      {theme === 'light' ? 'Dark' : 'Light'}
    </ColorToggle>
  );
};

export default ThemeButton;
