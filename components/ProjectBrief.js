import styled from "styled-components";

const BriefContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${(props) => props.$accentColor || "var(--accent)"};
    border-radius: 2px;
  }
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background: ${(props) => props.$accentColor || "var(--text-secondary)"};
  color: var(--text);
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: capitalize;
  box-shadow: 0 2px 8px ${(props) => props.$accentColor}33;
`;

const Year = styled.span`
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  background: var(--accent-secondary);
  border-radius: 2rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text);
  max-width: 60ch;
  margin: 0 auto;
`;

const ProjectBrief = ({ title, description, date, tags, color }) => {
  return (
    <BriefContainer $accentColor={color}>
      <Title>{title}</Title>
      <MetaInfo>
        {date && <Year>{date}</Year>}
        {tags &&
          tags.map((tag, index) => (
            <Tag key={index} $accentColor={color}>
              {tag}
            </Tag>
          ))}
      </MetaInfo>
      {description && <Description>{description}</Description>}
    </BriefContainer>
  );
};

export default ProjectBrief;
