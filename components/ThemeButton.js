import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SwitchContainer = styled.div`
  display: inline-flex;
  background: var(--bgTrans);
  border-radius: 2rem;
  border: 2px solid var(--secondary);
  padding: 0.25rem;
  gap: 0.25rem;
  backdrop-filter: blur(10px);
`;

const ThemeOption = styled.button`
  background: ${(props) => (props.$isActive ? "var(--bg)" : "transparent")};
  color: ${(props) => (props.$isActive ? "var(--text)" : "var(--text)")};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: ${(props) => (props.$isActive ? "700" : "500")};
  transition: all 0.2s ease;
  opacity: ${(props) => (props.$isActive ? "1" : "0.6")};

  &:hover {
    opacity: 1;
  }
`;

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render after mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const themes = [
    { value: "dark", label: "Dark" },
    { value: "light", label: "Light" },
    { value: "pink", label: "Pink" },
  ];

  if (!mounted) {
    return (
      <SwitchContainer>
        {themes.map(({ value, label }) => (
          <ThemeOption key={value} $isActive={false}>
            {label}
          </ThemeOption>
        ))}
      </SwitchContainer>
    );
  }

  return (
    <SwitchContainer>
      {themes.map(({ value, label }) => (
        <ThemeOption
          key={value}
          $isActive={theme === value}
          onClick={() => setTheme(value)}
        >
          {label}
        </ThemeOption>
      ))}
    </SwitchContainer>
  );
};

export default ThemeButton;
