import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import AnimationOnScroll from '../../components/AnimationOnScroll';
import Image from 'next/image';

const Wrapper = styled(PortfolioPageTemplate)``;

const Ghostbusters = () => {
  return (
    <Wrapper>
      <h1>Ghostbusters</h1>
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
