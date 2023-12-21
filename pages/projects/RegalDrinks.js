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
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-template-rows: 1fr;
  min-height: 80vh;
  width: 100%;
  max-width: 100vw;
  background: linear-gradient(180deg, #1d1d1d 0%, rgba(29, 29, 29, 0) 100%);
  background: #3ca55c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #b5ac49,
    #3ca55c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #b5ac49,
    #3ca55c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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

const FruitImage = styled(Image)`
  position: absolute;
  top: 20%;
  left: 10%;
`;

const DrinkProducts = styled.div`
  width: 100vw;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-template-rows: 1fr; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 30px;
`;

const ProductWrap = styled.div`
  max-width: 200px;
  max-height: 200px;
  border-radius: 10px;
  background: #56ab2f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #a8e063,
    #56ab2f
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #a8e063,
    #56ab2f
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  img {
    /* width: 100%; */
  }
`;

const DrinkTitle = styled.h2`
  font-size: 24px;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const AnimatedCurve = styled(Curve)`
  transform: translateX(-100%);
  position: absolute;
  bottom: 0;
  left: 0;
`;

const RegalDrinks = () => {
  return (
    <Wrapper>
      {/* <PageTitle>Regal Drinks</PageTitle> */}
      <AnimateOnScroll backgroundColor="#417f21">
        <Slide>
          <Content>
            <DrinkTitle className="fadeUp">Margaritas</DrinkTitle>
            {/* <TitleImage
              className="fadeUp"
              src="https://res.cloudinary.com/labofthingsimages/image/upload/v1701358840/Margaritas_ibk5rl.png"
              alt="Regal Drinks"
              width={500}
              height={500}
            /> */}
            <p className="fadeUp" style={{ transitionDelay: '.1s' }}>
              Camarena Silver Tequila, DeKuyper Triple Sec, lime juice and agave
              nectar.
              <br />
              <em>(280 - 460 Cal) 12.5</em>
            </p>
          </Content>
          <DrinkImage
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1703008878/marg_nr5snq.png"
            alt="Regal Drinks"
            width={500}
            height={500}
            className="zoomUp"
          />
          <FruitImage
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1703182611/lime_h1e1fm.png"
            alt="Regal Drinks"
            width={200}
            height={200}
            className="zoomUp"
          />
          <DrinkProducts>
            <ProductWrap>
              <DrinkImage
                src="https://res.cloudinary.com/labofthingsimages/image/upload/v1703182617/PineappleMangoMargartia_podw8c.png"
                alt="Regal Drinks"
                width={150}
                height={150}
                className="zoomUp"
              />
            </ProductWrap>
            <ProductWrap>
              <DrinkImage
                src="https://res.cloudinary.com/labofthingsimages/image/upload/v1703182616/SaltyWatermelonMargarita_jqhohf.png"
                alt="Regal Drinks"
                width={150}
                height={150}
                className="zoomUp"
              />
            </ProductWrap>
            <ProductWrap>
              <DrinkImage
                src="https://res.cloudinary.com/labofthingsimages/image/upload/v1703182615/SmokyPassionFruitMezgarita_olqxq9.png"
                alt="Regal Drinks"
                width={150}
                height={150}
                className="zoomUp"
              />
            </ProductWrap>
            <ProductWrap>
              <DrinkImage
                src="https://res.cloudinary.com/labofthingsimages/image/upload/v1703182613/ItalianAperolMargarita_gapvt6.png"
                alt="Regal Drinks"
                width={150}
                height={150}
                className="zoomUp"
              />
            </ProductWrap>
          </DrinkProducts>
          <AnimatedCurve />
        </Slide>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Slide>
          <Content>
            <DrinkTitle className="fadeUp">Wine</DrinkTitle>
            <p className="fadeUp" style={{ transitionDelay: '.1s' }}>
              Camarena Silver Tequila, DeKuyper Triple Sec, lime juice and agave
              nectar.
              <br />
              <em>(280 - 460 Cal) 12.5</em>
            </p>
          </Content>
          <DrinkImage
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1703023724/old-fashioned_u9ybtq.png"
            alt="Regal Drinks"
            width={500}
            height={500}
            className="zoomUp"
          />
          <AnimatedCurve />
        </Slide>
      </AnimateOnScroll>
      <AnimateOnScroll backgroundColor={'pink'}>
        <Slide>
          <Content>
            <DrinkTitle className="fadeUp">Beer</DrinkTitle>
            <p className="fadeUp" style={{ transitionDelay: '.1s' }}>
              Camarena Silver Tequila, DeKuyper Triple Sec, lime juice and agave
              nectar.
              <br />
              <em>(280 - 460 Cal) 12.5</em>
            </p>
          </Content>
          <DrinkImage
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1703023912/bluemoon-bottle_oqand6.png"
            alt="Regal Drinks"
            width={500}
            height={500}
            className="zoomUp"
          />
          <AnimatedCurve />
        </Slide>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Slide>
          <Content>
            <DrinkTitle className="fadeUp">Mixed Drinks</DrinkTitle>
            <p className="fadeUp" style={{ transitionDelay: '.1s' }}>
              Camarena Silver Tequila, DeKuyper Triple Sec, lime juice and agave
              nectar.
              <br />
              <em>(280 - 460 Cal) 12.5</em>
            </p>
          </Content>
          <DrinkImage
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1703088375/36_RumPunch_aqbu0o.png"
            alt="Regal Drinks"
            width={500}
            height={500}
            className="zoomUp"
          />
          <DrinkProducts>
            <ProductWrap>
              <DrinkImage
                src="https://res.cloudinary.com/labofthingsimages/image/upload/v1703099081/MaiTime_bvco0p.png"
                alt="Regal Drinks"
                width={150}
                height={150}
                className="zoomUp"
              />
            </ProductWrap>
            <ProductWrap>
              <DrinkImage
                src="https://res.cloudinary.com/labofthingsimages/image/upload/v1703099081/BlueStormVodkaSoda_ekknhd.png"
                alt="Regal Drinks"
                width={150}
                height={150}
                className="zoomUp"
              />
            </ProductWrap>
            <ProductWrap>
              <DrinkImage
                src="https://res.cloudinary.com/labofthingsimages/image/upload/v1703025169/37_TikiGodsNectar_tq1xkf.png"
                alt="Regal Drinks"
                width={150}
                height={150}
                className="zoomUp"
              />
            </ProductWrap>
            <ProductWrap>
              <DrinkImage
                src="https://res.cloudinary.com/labofthingsimages/image/upload/v1703099083/monkeyshouldercolda_lxwwey.png"
                alt="Regal Drinks"
                width={150}
                height={150}
                className="zoomUp"
              />
            </ProductWrap>
          </DrinkProducts>
          <AnimatedCurve />
        </Slide>
      </AnimateOnScroll>
    </Wrapper>
  );
};

export default RegalDrinks;
