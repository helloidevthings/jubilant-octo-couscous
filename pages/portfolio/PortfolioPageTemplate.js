import styled from "styled-components";
import { useEffect } from "react";
import ProjectBrief from "../../components/ProjectBrief";
import Navigation from "../../components/Navigation";
// import Providers from '../../public/Providers';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  min-height: 100vh;
  padding: 6rem 1rem 2rem;

  background: var(--bg);
  color: var(--text);
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    padding: 6rem 3rem 3rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-family: loos-extrawide, sans-serif;
    text-align: center;
  }

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
    font-family: "loos-normal", sans-serif;
    font-weight: 700;
    font-size: 1.3em;
    letter-spacing: 0.03em;
    z-index: 0;
    transition: color 0.6s ease-in-out;

    &:after {
      content: "";
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
    width: 100%;
    margin-bottom: 2rem;
    max-width: 1200px;

    img {
      width: 100%;
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
    max-width: 1200px;
    border-radius: 10px;
    box-shadow: 1px 1px 13px 3px rgb(0 0 0 / 9%);
    margin-bottom: 1rem;
  }

  > * {
    max-width: 1200px;
    width: 100%;
  }
`;

const PortfolioPageTemplate = ({ children, projectBrief }) => {
  // Dynamically set accent color based on project color
  useEffect(() => {
    if (projectBrief?.color) {
      const root = document.documentElement;

      // Store original colors
      const originalAccentText = getComputedStyle(root)
        .getPropertyValue("--accentText")
        .trim();
      const originalSecondary = getComputedStyle(root)
        .getPropertyValue("--secondary")
        .trim();

      // Set project color as accent
      root.style.setProperty("--accentText", projectBrief.color);
      root.style.setProperty("--secondary", projectBrief.color);

      // Cleanup: restore original colors when leaving page
      return () => {
        root.style.setProperty("--accentText", originalAccentText);
        root.style.setProperty("--secondary", originalSecondary);
      };
    }
  }, [projectBrief?.color]);

  return (
    // <Providers>
    <>
      <Navigation showBackButton={true} />
      <Wrapper>
        {projectBrief && (
          <ProjectBrief
            title={projectBrief.title}
            description={projectBrief.description}
            date={projectBrief.date}
            tags={projectBrief.tags}
            color={projectBrief.color}
          />
        )}
        {children}
      </Wrapper>
    </>
    // </Providers>
  );
};

export default PortfolioPageTemplate;
