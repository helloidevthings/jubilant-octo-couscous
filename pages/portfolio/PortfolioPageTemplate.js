import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;

  section {
    padding: 0.5rem 0.5rem 2rem;
    max-width: 60ch;
  }

  .twoCol {
    background: #f5f5f5;
    padding: 1rem 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  figure {
    flex: 1 0 100%;

    img {
      object-fit: cover;
    }
  }
`;

const PortfolioPageTemplate = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PortfolioPageTemplate;
