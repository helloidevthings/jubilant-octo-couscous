import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
`;

const PortfolioPageTemplate = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PortfolioPageTemplate;
