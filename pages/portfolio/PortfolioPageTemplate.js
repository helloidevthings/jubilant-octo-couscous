import styled from 'styled-components';
import BackArrowButton from '../../components/BackArrowButton';
// import Providers from '../../public/Providers';

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  position: relative;
  display: grid;
  place-items: center;

  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  min-height: 100vh;

  background: var(--bg);
  color: var(--text);
  transition: background 0.3s ease, color 0.3s ease;

  section {
    padding: 0.5rem 0.5rem 1rem;
    max-width: 60ch;
  }

  hr {
    margin: 1rem 0 1.5rem;
    border: 2px solid var(--secondary);
  }

  .twoCol {
    background: var(--bg);
    padding: 1rem 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    padding: 0 0.1em;
    position: relative;
    font-family: 'loos-normal', sans-serif;
    font-weight: 700;
    font-size: 1.3em;
    letter-spacing: 0.03em;
    z-index: 0;
    transition: color 0.6s ease-in-out;

    &:after {
      content: '';
      background: var(--accentText);
      height: 3px;
      width: 100%;
      height: 100%;
      transform: scaleY(0.1);
      transform-origin: bottom;
      left: 0;
      position: absolute;
      bottom: 0;
      z-index: -1;
      transition: transform 0.5s cubic-bezier(0.62, 0.01, 0.64, 1.32);
    }

    &:hover {
      color: var(--text);
      &:after {
        transform: scaleY(1);
      }
    }
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
      background: var(--bg);
      padding: 1rem 1.5rem;
      border-radius: 10px;
      font-weight: 700;
    }
  }

  video {
    width: 100%;
    max-width: 80vw;

    @media (max-width: 768px) {
      max-width: 100vw;
    }
  }
`;

const PortfolioPageTemplate = ({ children }) => {
  return (
    // <Providers>
    <Wrapper>
      <BackArrowButton />
      {children}
    </Wrapper>
    // </Providers>
  );
};

export default PortfolioPageTemplate;
