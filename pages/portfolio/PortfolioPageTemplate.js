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
    padding: 0.5rem 0.5rem 1rem;
    max-width: 60ch;
  }

  hr {
    margin: 1rem 0 1.5rem;
    border: 2px solid #f5f5f5;
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
    width: 98vw;
    margin-bottom: 2rem;
    max-width: 1600px;

    img {
      width: auto;
      height: auto;
      margin: auto;
      box-shadow: 1px 1px 13px 3px rgb(0 0 0 / 9%);
      border-radius: 20px;
    }

    figcaption {
      max-width: 70ch;
      font-size: 1rem;
      margin: 0.5rem auto 0.5rem;
      background: #f5f5f5;
      padding: 1rem 1.5rem;
      border-radius: 10px;
      font-weight: 700;
    }
  }
`;

const PortfolioPageTemplate = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PortfolioPageTemplate;
