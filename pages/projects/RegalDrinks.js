import styled from 'styled-components';
import Image from 'next/image';
import Gem from '../../components/Icons/Gem';
import AnimationOnScroll from '../../components/AnimationOnScroll';

const Wrapper = styled.div`
  background: linear-gradient(180deg, #1d1d1d 0%, rgba(29, 29, 29, 0) 100%);
  padding: 20px;
  margin-bottom: 20px;

  img {
    max-width: 300px;
    height: auto;
  }
`;

const Slide = styled.section`
  min-height: 500px;
`;

const SpecialImage = styled(Image)``;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  opacity: ${(props) => (props.isInView ? '1' : '0')};
`;

const RegalDrinks = () => {
  return (
    <Wrapper>
      <PageTitle>Regal Drinks</PageTitle>
      <AnimationOnScroll>
        <Slide>
          <div className="fadeMe">
            <Gem />
          </div>
        </Slide>
      </AnimationOnScroll>
      <AnimationOnScroll>
        <Slide>
          <div className="fadeMe">
            <Gem />
          </div>
        </Slide>
      </AnimationOnScroll>
      <AnimationOnScroll>
        <Slide>
          <div className="fadeMe">
            <Gem />
          </div>
        </Slide>
      </AnimationOnScroll>
      <AnimationOnScroll>
        <Slide>
          <div className="fadeMe">
            <Gem />
          </div>
        </Slide>
      </AnimationOnScroll>
      <AnimationOnScroll>
        <Slide>
          <div className="fadeMe">
            <Gem />
          </div>
        </Slide>
      </AnimationOnScroll>
    </Wrapper>
  );
};

export default RegalDrinks;
