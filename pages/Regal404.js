import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #1a191d;
  padding: 1rem;
  overflow: hidden;

  h1,
  h2 {
    margin: 0;
    line-height: 1.2;
  }

  h1 {
    font-family: 'Exo', sans-serif;
    font-size: 10rem;
  }

  h2 {
    font-family: 'Exo', sans-serif;
    font-size: 3rem;
    font-style: italic;
  }
`;

const PopcornWrapper = styled.figure`
  position: relative;
  z-index: 1;
  /* border: 12px solid #f56600; */
  /* border: 9px solid #323236; */
  /* background: linear-gradient(90deg, #29292b 0%, #3a383f 100%); */
  /* box-shadow: 2px 4px 10px #151515; */
  /* border-radius: 100%; */
  /* padding: 1rem; */

  &:after {
    content: '';
    position: absolute;
    left: 30%;
    bottom: -30%;
    width: 70%;
    height: 20%;
    border-radius: 50%;
    background: linear-gradient(90deg, #000000 0%, #222124 100%);
    z-index: -1;
    animation: popcorn-box-shadow 2s infinite alternate;

    @keyframes popcorn-box-shadow {
      0% {
        transform: scale(0.9);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

const PopcornContainer = styled.img`
  max-width: 300px;
  position: relative;
  animation: popcorn-box 2s infinite alternate;

  @keyframes popcorn-box {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 10px);
    }
  }
`;

const Popcorn = styled.img`
  max-width: 40px;
  position: absolute;
  top: 0;
  left: 0;

  animation: popcorn 1s infinite alternate;

  @keyframes popcorn {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 20px);
    }
  }
`;

const PopcornPieces = [
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1679426183/popcorn2_pcbkyr.png',
    alt: 'popcorn',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1679426183/popcorn1_lji8xd.png',
    alt: 'popcorn',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1679426184/popcorn3_ap5675.png',
    alt: 'popcorn',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1679428953/popcorn6_ejzpqz.png',
    alt: 'popcorn',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1679428953/popcorn7_qpvja0.png',
    alt: 'popcorn',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1679428952/popcorn5_p6wesk.png',
    alt: 'popcorn',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1679429839/popcorn9_jcolzn.png',
    alt: 'popcorn',
  },
  {
    src: 'https://res.cloudinary.com/labofthingsimages/image/upload/v1679429866/popcorn10_qphugl.png',
    alt: 'popcorn',
  },
];

const Regal404 = () => {
  return (
    <Container>
      <h1>
        4<span>0</span>4
      </h1>
      <h2>Page not found</h2>

      <PopcornWrapper>
        <PopcornContainer
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1679426184/popcornfull_rfousl.png"
          alt="popcorn"
        />
        {PopcornPieces.map(({ src, alt }, i) => (
          <Popcorn
            src={src}
            alt={alt}
            key={alt + i}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </PopcornWrapper>
    </Container>
  );
};

export default Regal404;
