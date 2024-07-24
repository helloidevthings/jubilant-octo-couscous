import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import AnimationOnScroll from '../../components/AnimationOnScroll';
const Wrapper = styled(PortfolioPageTemplate)``;

const Borderlands = () => {
  return (
    <Wrapper>
      <h1>Borderlands</h1>{' '}
      <section>
        <AnimationOnScroll>
          <hr />
          <h2>Borderlands Site Take Over</h2>
          <video controls>
            <source
              src="https://res.cloudinary.com/labofthingsimages/video/upload/v1721840750/Screen_Recording_2024-07-24_at_1.04.51_PM_ro7sdk.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <a href="/projects/Boom" target="_blank">
            Try It Yourself
          </a>
        </AnimationOnScroll>
      </section>
    </Wrapper>
  );
};
export default Borderlands;
