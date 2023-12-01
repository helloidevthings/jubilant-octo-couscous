import styled from 'styled-components';
import Image from 'next/image';
import Curve from '../../components/Icons/Curve';
import AnimationOnScroll from '../../components/AnimationOnScroll';

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
  animation: fadeUp ease 1.3s;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const DrinkImage = styled(Image)`
  animation: bounce3 ease 10s infinite alternate;
  grid-column-start: span 2;
  grid-column-end: span 2;

  @keyframes bounce3 {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translate3D(30px, 20px, 5px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

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

// fadeIn: `
// animation: fadeIn ease 1.4s;

// @keyframes fadeIn {
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// }
// `,
// fadeOut: `
// animation: fadeOut ease 1.4s;

// @keyframes fadeOut {
//   from {
//     opacity: 1;
//   }
//   to {
//     opacity: 0;
//   }
// }
// `,
// fadeUp: `
// animation: fadeUp ease 1.3s;

// @keyframes fadeUp {
//   from {
//     opacity: 0;
//     transform: translateY(10px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0px);
//   }
// }
// `,
// fadeDown: `
// animation: fadeDown ease 1.3s;

// @keyframes fadeDown {
//   from {
//     opacity: 0;
//     transform: translateY(-10px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0px);
//   }
// }
// `,
// bounceStart: `
// animation-duration: 10s;
// animation-iteration-count: infinite;
// transform-origin: bottom;
// `,
// bounce3: `
// animation-name: bounce-3;
// animation-timing-function: ease;

// @keyframes bounce-3 {
//   0% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(30px);
//   }
//   100% {
//     transform: translateY(0);
//   }
// }
// `,
// drawIn: `
// stroke-dasharray: 2000;
// stroke-dashoffset: 10;
// animation: draw 5s ease-in-out alternate infinite;

// @keyframes draw {
//   from {
//     stroke-dashoffset: 2000;
//   }

//   to {
//     stroke-dashoffset: 0;
//   }
// }
// `,
// drawIn1x: `
// stroke-dasharray: 3000;
// animation: drawIn1 5s ease-in-out;
// animation-iteration-count: 1;

// @keyframes drawIn1 {
//   from {
//     stroke-dashoffset: 3000;
//   }
//   to {
//     stroke-dashoffset: 0;
//   }
// }
// `,

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const RegalDrinks = () => {
  return (
    <Wrapper>
      {/* <PageTitle>Regal Drinks</PageTitle> */}
      <AnimationOnScroll>
        <Slide>
          <Content>
            <TitleImage
              src="https://res.cloudinary.com/labofthingsimages/image/upload/v1701358840/Margaritas_ibk5rl.png"
              alt="Regal Drinks"
              width={500}
              height={500}
            />
            <p>
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
          />
        </Slide>
        <AnimateCurve />
      </AnimationOnScroll>
    </Wrapper>
  );
};

export default RegalDrinks;
