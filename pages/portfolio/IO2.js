import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import AnimationOnScroll from '../../components/AnimationOnScroll';
import { getProjectById } from '../../data/portfolioData';

const Wrapper = styled(PortfolioPageTemplate)``;

const IO2 = () => {
  const project = getProjectById('io2');

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
        <video controls>
          <source
            src="https://res.cloudinary.com/labofthingsimages/video/upload/v1721842866/Screen_Recording_2024-07-24_at_1.40.04_PM_tpanvd.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <a href="/projects/RegalColors" target="_blank">
          Try It Yourself
        </a>
      </AnimationOnScroll>
      {/* <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1721744252/2024-05-14_12.15.21_m63g67.gif"
          alt="inside out 2 mobile"
          width={994}
          height={1478}
        />
      </figure> */}
    </Wrapper>
  );
};

export default IO2;
