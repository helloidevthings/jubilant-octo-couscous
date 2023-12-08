import styled from 'styled-components';
import Image from 'next/image';
import Curve from '../../components/Icons/Curve';
import AnimateOnScroll from '../../components/AnimationOnScroll';

const Wrapper = styled.div`
  background: linear-gradient(180deg, #1d1d1d 0%, rgba(29, 29, 29, 0) 100%);
  margin-bottom: 20px;

  img {
    max-width: 300px;
    height: auto;
  }
`;

const Slide = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-template-rows: 1fr;
  min-height: 500px;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-align: center;
  font-weight: 500;
  padding: 2rem;

  p {
    max-width: 56ch;
  }

  em {
    font-size: 14px;
    font-weight: 400;
  }
`;

const TitleImage = styled(Image)`
  /* animation: fadeUp ease 1.3s;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  } */
`;

const DrinkImage = styled(Image)``;

const AnimateCurve = styled(Curve)`
  transform: translateX(-100%);
  animation: curve ease 1.3s;
  width: 300px;

  @keyframes curve {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const RegalDrinks = () => {
  return (
    <Wrapper>
      {/* <PageTitle>Regal Drinks</PageTitle> */}
      <AnimateOnScroll>
        <Slide>
          <Content>
            <TitleImage
              className="fadeUp"
              src="https://res.cloudinary.com/labofthingsimages/image/upload/v1701358840/Margaritas_ibk5rl.png"
              alt="Regal Drinks"
              width={500}
              height={500}
            />
            <p className="fadeUp">
              Camarena Silver Tequila, DeKuyper Triple Sec, lime juice and agave
              nectar.
              <br />
              <em>(280 - 460 Cal) 12.5</em>
            </p>
          </Content>
          <DrinkImage
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1701359221/margarita_rutjfs.png"
            alt="Regal Drinks"
            width={500}
            height={500}
            className="zoomUp"
          />
        </Slide>
      </AnimateOnScroll>
      <AnimateCurve />
      <AnimateOnScroll>
        <Slide>
          <Content>
            <TitleImage
              src="https://res.cloudinary.com/labofthingsimages/image/upload/v1701358840/Margaritas_ibk5rl.png"
              alt="Regal Drinks"
              width={500}
              height={500}
            />
            <p className="fadeUp">
              Camarena Silver Tequila, DeKuyper Triple Sec, lime juice and agave
              nectar.
              <br />
              <em>(280 - 460 Cal) 12.5</em>
            </p>
          </Content>
          <div className="zoomUp">
            <DrinkImage
              src="https://res.cloudinary.com/labofthingsimages/image/upload/v1701359221/margarita_rutjfs.png"
              alt="Regal Drinks"
              width={500}
              height={500}
              className="bounce3"
            />
          </div>
          <div className="zoomUp" style={{ transitionDelay: '.25s' }}>
            <DrinkImage
              src="https://res.cloudinary.com/labofthingsimages/image/upload/v1701359221/margarita_rutjfs.png"
              alt="Regal Drinks"
              width={500}
              height={500}
              className="bounce2"
            />
          </div>
        </Slide>
      </AnimateOnScroll>
    </Wrapper>
  );
};

export default RegalDrinks;