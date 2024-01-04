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
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-template-rows: auto;
  min-height: 80vh;
  width: 100%;
  max-width: 100vw;
  background: linear-gradient(358deg, #1d1d1d 0%, rgb(29 29 29 / 40%) 100%);
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
  background: #273036;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 30px;
  z-index: 1;
  padding: 0 1em 2em;

  &:before {
    content: '';
    position: absolute;
    width: 150%;
    height: 5em;
    top: -4em;
    left: -20%;
    background: url('https://res.cloudinary.com/labofthingsimages/image/upload/v1704381747/curve_dqmswm.svg')
      no-repeat center center/cover;
    transform: translateX(0);
    transform-origin: center center;
    z-index: -1;

    animation: curve ease-in-out 3s infinite alternate;

    @keyframes curve {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(10%);
      }
    }
  }
`;

const ProductWrap = styled.div`
  max-width: 200px;
  max-height: 200px;
  border-radius: 10px;
  background: linear-gradient(to bottom, #404b52, #959595);

  img {
    /* width: 100%; */
  }
`;

const DrinkTitle = styled.h2`
  font-size: 5em;
  font-family: 'Exo', sans-serif;
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

const margaritaProducts = [
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1703182617/PineappleMangoMargartia_podw8c.png',
    alt: 'pineapple mango margarita',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1703182616/SaltyWatermelonMargarita_jqhohf.png',
    alt: 'salt watermelon margarita',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1703182615/SmokyPassionFruitMezgarita_olqxq9.png',
    alt: 'smoky passion fruit mezgarita',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1703182613/ItalianAperolMargarita_gapvt6.png',
    alt: 'italian aperol margarita',
  },
];

const mixedDrinkProducts = [
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1703099084/SaltyCaramelOldFashioned_un8gaz.png',
    alt: 'salty caramel old fashioned',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1703099083/monkeyshouldercolda_lxwwey.png',
    alt: 'monkey shoulder',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1703099081/MaiTime_bvco0p.png',
    alt: 'mai time',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1703099081/BlueStormVodkaSoda_ekknhd.png',
    alt: 'blue storm vodka soda',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1703099081/Cherry-Bourbon-blast_zflhll.png',
    alt: 'cherry bourbon blast',
  },
];

const beerProducts = [
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1703088353/beer-glass_incjss.png',
    alt: 'beer glass of Coors Light',
  },
];

const RegalDrinks = () => {
  return (
    <Wrapper>
      {/* <PageTitle>Regal Drinks</PageTitle> */}
      <AnimateOnScroll backgroundColor="#b6c954">
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
            className="zoomUp bounce2"
          />
          <FruitImage
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1703182611/lime_h1e1fm.png"
            alt="Regal Drinks"
            width={200}
            height={200}
            className="zoomUp spin"
          />
          {/* <AnimatedCurve /> */}
          <DrinkProducts>
            {margaritaProducts.map((product, index) => (
              <ProductWrap key={index}>
                <DrinkImage
                  src={product.src}
                  alt={product.alt}
                  width={150}
                  height={150}
                  className="zoomUp"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                />
              </ProductWrap>
            ))}
          </DrinkProducts>
        </Slide>
      </AnimateOnScroll>
      {/* <AnimateOnScroll backgroundColor={'#c97c01'}>
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
        </Slide> </AnimateOnScroll> */}
      <AnimateOnScroll backgroundColor="#bb4012">
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
            className="zoomUp bounce2"
          />
          <FruitImage
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1704396877/test-cherry_zxdpoy.png"
            alt="Regal Drinks"
            width={200}
            height={200}
            className="zoomUp swingLeftRight"
          />
          <DrinkProducts>
            {mixedDrinkProducts.map((product, index) => (
              <ProductWrap key={index}>
                <DrinkImage
                  src={product.src}
                  alt={product.alt}
                  width={150}
                  height={150}
                  className="zoomUp"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                />
              </ProductWrap>
            ))}
          </DrinkProducts>
        </Slide>
      </AnimateOnScroll>
      <AnimateOnScroll backgroundColor={'#4f95cb'}>
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
          <DrinkProducts>
            {beerProducts.map((product, index) => (
              <ProductWrap key={index}>
                <DrinkImage
                  src={product.src}
                  alt={product.alt}
                  width={150}
                  height={150}
                  className="zoomUp"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                />
              </ProductWrap>
            ))}
          </DrinkProducts>
        </Slide>
      </AnimateOnScroll>
    </Wrapper>
  );
};

export default RegalDrinks;
