import styled from 'styled-components';

const Shelf = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
  /* grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); */
  align-items: center;
  gap: 0.25rem;
  transition: all 0.2s ease-in-out;
`;

const ProjectLink = styled.a`
  border: none;
  opacity: 1;
  animation: fadeIn 1s ease-in-out;

  &:hover {
    /* grid-column: span 2; */
  }

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
    border: 1px solid #fff;
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover figcaption > p {
    transform: translateY(0%) scaleY(1);
    height: max-content;
  }

  &:hover figcaption {
    transform: translateY(0);
  }

  figcaption {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(45deg, #14141c, #b8b7d259);
    font-weight: 600;
    font-size: 1.2rem;
    backdrop-filter: blur(3px);
    transform: translateY(10px);
    transform-origin: left bottom;
    transition: all 0.3s ease-in-out;

    h3 {
      font-weight: 800;
    }

    p {
      height: 0;
      transform: translateY(100%) scaleY(0);
      transition: transform 0.4s ease-in-out;
    }

    h3,
    p {
      padding: 0.2rem 0.8rem 0.5rem;
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
            <img src={src} alt={alt} />
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
