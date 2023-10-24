import styled from 'styled-components';
import Image from 'next/image';

const Shelf = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
  grid-auto-flow: dense;
  align-items: center;
  gap: 0.5em;
  transition: all 0.2s ease-in-out;
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
  margin: 1rem 0 0.2rem 0;

  li {
    list-style: none;
    margin: 0 0.2em;
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 3px 10px;
    border: 2px solid var(--secondary);
    /* background: var(--primaryBG); */
    /* opacity: 0.8; */
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
  padding: 0.5rem 0.6rem;
  height: 25rem;

  img {
    width: 100%;
    height: 330px;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: var(--primaryBoxShadow);
  }

  &:hover figcaption,
  &:focus-visible figcaption {
    transform: translateY(0);

    & > p {
      transform: translateY(0%) scaleY(1);
      height: max-content;
    }
  }

  figcaption {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--primaryGradient90);
    color: var(--primaryText);
    font-weight: 600;
    font-size: 1.2rem;
    backdrop-filter: blur(3px);
    transform: translateY(10px);
    transform-origin: left bottom;
    transition: all 0.3s ease-in-out;
    border-radius: 15px;

    h3 {
      font-weight: 800;
      padding: 0.2rem 0.8rem 0.5rem;
    }

    p {
      height: 0;
      padding: 0.2rem 0.8rem 1rem;
      transform: translateY(100%) scaleY(0);
      transition: transform 0.4s ease-in-out;
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
            <Image src={src} alt={alt} width={500} height={500} />
            <figcaption>
              <TagWrapper>
                {tag.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
                <small>{date}</small>
              </TagWrapper>
              <h3>{title}</h3>
              <p>{description}</p>
            </figcaption>
          </ProjectFig>
        </ProjectLink>
      ))}
    </Shelf>
  );
};

export default ProjectShelf;
