import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import AnimationOnScroll from '../../components/AnimationOnScroll';
import Image from 'next/image';
import { getProjectById } from '../../data/portfolioData';

const Wrapper = styled(PortfolioPageTemplate)``;

const Ghostbusters = () => {
  const project = getProjectById('ghostbusters');

  return (
    <Wrapper
      projectBrief={{
        title: project.title,
        description: project.description,
        date: project.date,
        tags: project.tag,
        color: project.color,
      }}
    >
      <AnimationOnScroll>
        <h2>Ghostbusters Take Over</h2>
        <hr />
        <a href="/projects/RegalFrozen" target="_blank">
          Try It Yourself
        </a>
        <video controls>
          <source src="https://res.cloudinary.com/labofthingsimages/video/upload/v1721843892/Screen_Recording_2024-07-24_at_1.57.07_PM_sac88w.mov" />
          Your browser does not support the video tag.
        </video>
      </AnimationOnScroll>
    </Wrapper>
  );
};

export default Ghostbusters;
