import styled from "styled-components";
import { useMemo } from "react";

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
  justify-content: center;
  align-items: center;
  background: var(--bg);
`;

const TimelineHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text);
  margin: 0;
`;

const TimelineScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: visible;
  padding-bottom: 3rem;

  @media (max-width: 768px) {
    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--text-secondary);
      border-radius: 2px;
    }
  }
`;

const TimelineLine = styled.div`
  position: relative;
  width: 100%;
  max-width: 60rem;
  min-width: 400px;
  height: 4px;
  background: var(--text-secondary);
  border-radius: 2px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const YearNodesWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
`;

const YearNodeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const YearNode = styled.button`
  position: relative;
  background: ${(props) => (props.$isActive ? "var(--accent-bg)" : "var(--bg)")};
  border: 3px solid
    ${(props) => (props.$isActive ? "var(--accent-bg)" : "var(--text-secondary)")};
  width: ${(props) => (props.$isActive ? "20px" : "16px")};
  height: ${(props) => (props.$isActive ? "20px" : "16px")};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: var(--accent);
    border-color: var(--accent);
    width: 20px;
    height: 20px;

    & + span {
      opacity: 1;
      color: var(--text);
      font-weight: 700;
    }
  }

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
  }
`;

const YearLabel = styled.span`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.85rem;
  font-weight: ${(props) => (props.$isActive ? "700" : "500")};
  color: ${(props) => (props.$isActive ? "var(--text)" : "var(--text)")};
  opacity: ${(props) => (props.$isActive ? "1" : "0.7")};
  white-space: nowrap;
  transition: all 0.2s ease;
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    top: 25px;
  }
`;

const ClearButton = styled.button`
  background: var(--bg);
  color: var(--text);
  border: 2px solid var(--text);
  padding: 0.5rem 1.25rem;
  border-radius: 2rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};

  &:hover {
    background: ${(props) => (props.disabled ? "var(--bg)" : "var(--text)")};
    color: ${(props) => (props.disabled ? "var(--text)" : "var(--bg)")};
  }
`;

const YearTimeline = ({
  years,
  selectedYears,
  onYearToggle,
  onClearFilters,
}) => {
  // Sort years chronologically for display
  const sortedYears = useMemo(() => {
    return [...years].sort((a, b) => parseInt(a) - parseInt(b));
  }, [years]);

  // Don't render if no years available
  if (years.length === 0) {
    return null;
  }

  return (
    <TimelineContainer>
      <TimelineHeader>
        <TimelineTitle>Filter by Year</TimelineTitle>
        <ClearButton
          onClick={onClearFilters}
          disabled={selectedYears.length === 0}
        >
          All Time
        </ClearButton>
      </TimelineHeader>

      <TimelineScrollContainer>
        <TimelineLine>
          <YearNodesWrapper>
            {sortedYears.map((year) => (
              <YearNodeContainer key={year}>
                <YearNode
                  $isActive={selectedYears.includes(year)}
                  onClick={() => onYearToggle(year)}
                  aria-label={`Filter by year ${year}`}
                  aria-pressed={selectedYears.includes(year)}
                />
                <YearLabel $isActive={selectedYears.includes(year)}>
                  {year}
                </YearLabel>
              </YearNodeContainer>
            ))}
          </YearNodesWrapper>
        </TimelineLine>
      </TimelineScrollContainer>
    </TimelineContainer>
  );
};

export default YearTimeline;
