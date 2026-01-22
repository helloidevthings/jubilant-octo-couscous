import styled from 'styled-components';
import { useState } from 'react';

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 2rem 1rem;
  justify-content: center;
  align-items: center;
`;

const FilterButton = styled.button`
  background: ${(props) => (props.$isActive ? 'var(--accentText)' : 'var(--secondary)')};
  color: ${(props) => (props.$isActive ? 'var(--bg)' : 'var(--text)')};
  border: 2px solid ${(props) => (props.$isActive ? 'var(--accentText)' : 'var(--secondary)')};
  padding: 0.5rem 1.25rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: ${(props) => (props.$isActive ? '700' : '500')};
  transition: all 0.2s ease;
  text-transform: capitalize;

  &:hover {
    background: ${(props) => (props.$isActive ? 'var(--accentText)' : 'var(--text)')};
    color: var(--bg);
    border-color: var(--text);
  }
`;

const ClearButton = styled(FilterButton)`
  background: var(--bg);
  border-color: var(--text);

  &:hover {
    background: var(--text);
    color: var(--bg);
  }
`;

const PortfolioFilter = ({ tags, selectedTags, onTagToggle, onClearFilters }) => {
  return (
    <FilterContainer>
      {selectedTags.length > 0 && (
        <ClearButton onClick={onClearFilters}>
          Clear All
        </ClearButton>
      )}
      {tags.map((tag) => (
        <FilterButton
          key={tag}
          $isActive={selectedTags.includes(tag)}
          onClick={() => onTagToggle(tag)}
        >
          {tag}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default PortfolioFilter;
