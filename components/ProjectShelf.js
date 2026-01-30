import styled from "styled-components";
// import { CldImage } from 'next-cloudinary';
import Image from "next/image";
const Shelf = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-auto-flow: dense;
  align-content: stretch;
  align-items: start;
  gap: 0.75em;
  transition: all 0.2s ease-in-out;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  }
`;

const ProjectLink = styled.a`
  border: none;
  opacity: 1;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const TagWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-inline-start: 0;
  padding-inline-start: 0.5rem;
  margin: 0 0 0.4em 0;

  li {
    list-style: none;
    margin: 0 0.2em;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 3px 10px;
    background: var(--secondary);
    /* border: 2px solid var(--secondary); */
    border-radius: 15px;
  }

  small {
    margin-left: 0.5rem;
    font-size: 0.9rem;
    font-weight: 700;
    justify-self: flex-end;
  }
`;

const ProjectFig = styled.figure`
  position: relative;
  overflow: hidden;
  height: 25rem;
  /* box-shadow: var(--boxShadow); */

  @media (min-width: 768px) {
    height: 25rem;
  }

  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
    filter: saturate(0);
    mix-blend-mode: luminosity;
  }

  &:hover img,
  &:focus-visible img {
    transform: scale(1.1);
    filter: none;
    mix-blend-mode: normal;
  }

  @media (min-width: 768px) {
    &:hover figcaption,
    &:focus-visible figcaption {
      /* transform: translateY(0); */

      /* for showinging a paragraph on hover */
      & > p {
        transform: translateY(0%) scaleY(1);
        opacity: 1;
        height: max-content;
      }
    }
  }

  figcaption {
    position: absolute;
    padding: 0.5em 0 1em 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: var(--bgTrans);
    color: var(--text);
    font-weight: 600;
    font-size: 1.2rem;
    backdrop-filter: blur(13px);
    transform: translateY(0);
    transform-origin: left bottom;
    transition: all 0.3s ease-in-out;

    h3 {
      font-family: "loos-800", sans-serif;
      font-weight: 800;
      font-size: 1.1rem;
      padding: 0.2rem 0.8rem 0.5rem;
    }

    p {
      padding: 0 0.8rem 1rem;

      @media (min-width: 768px) {
        opacity: 0;
        height: 0;
        transform: scaleY(0) translateY(10px);
        transition:
          transform 0.4s ease-in-out,
          opacity 0.8s ease-in-out;
      }
    }
  }
`;

const ProjectShelf = ({ imgs }) => {
  return (
    <Shelf>
      {imgs.map(({ title, description, date, alt, src, path, tag }, i) => (
        <ProjectLink
          href={path}
          key={title + i}
          style={{ animationDelay: `.${i * 1}s` }}
        >
          <ProjectFig>
            <Image
              // cloudName="labofthingsimages"
              src={src}
              alt={alt}
              width={500}
              height={500}
            />
            <figcaption>
              <h3>{title}</h3>
              <TagWrapper>
                {tag.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
                <small>{date}</small>
              </TagWrapper>
              {/* <p>{description}</p> */}
            </figcaption>
          </ProjectFig>
        </ProjectLink>
      ))}
    </Shelf>
  );
};

export default ProjectShelf;
