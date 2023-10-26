import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  padding: 1rem;
  overflow: hidden;
`;

const TextWrap = styled.section`
  margin: 0 auto;
  text-align: center;
  max-width: 800px;

  img {
    width: 100%;
    max-width: 530px;
    margin: 0 auto;
  }

  h1,
  h2 {
    font-family: 'Exo', sans-serif;
    margin: 0;
    line-height: 1.2;
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0;
    font-size: 2rem;

    @media (min-width: 600px) {
      font-size: 3rem;
    }
  }

  h3 {
    font-family: 'Exo', sans-serif;
    padding: 1rem 0 2rem;
    font-weight: 500;
    font-size: 1rem;

    @media (min-width: 600px) {
      font-size: 1.8rem;
    }
  }

  p {
    margin-top: 0.5rem;
    font-weight: 700;
    color: #999;

    em {
      font-size: 0.8rem;

      @media (min-width: 600px) {
        font-size: 1.2rem;
      }
    }
  }
`;

const DiamondWrap = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  transform-style: preserve-3d;
  overflow: visible;
`;

const WrapRotorX = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  transform-style: preserve-3d;
  overflow: visible;

  /* tilts gem so you can see it */
  transform: rotateX(-22deg);

  @keyframes spinX {
    from {
      transform: rotateX(0);
    }
    to {
      transform: rotateX(360deg);
    }
  }
`;

const WrapRotorY = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  transform-style: preserve-3d;
  overflow: visible;

  /* spins gem on it axis */
  animation: spinY 12s infinite linear;
  @keyframes spinY {
    from {
      transform: rotateY(0);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`;

const WrapRoterZ = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  transform-style: preserve-3d;
  overflow: visible;

  /* animation: spinZ 18s infinite linear; */

  @keyframes spinZ {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  div {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 100px solid #00945e;
    left: -100px;
    transform-origin: 50% 0%;
    animation: lighting 12s infinite linear;

    @keyframes lightingLighter {
      0% {
        border-bottom-color: #28ac7c;
      }
      50% {
        border-bottom-color: #50c99d;
      }
      100% {
        border-bottom-color: #28ac7c;
      }
    }

    @keyframes lighting {
      0% {
        border-bottom-color: #00945e;
      }
      50% {
        border-bottom-color: #50c99d;
      }
      100% {
        border-bottom-color: #00945e;
      }
    }
  }
`;

const TopPiece = styled.div`
  position: absolute;
  top: -30px;
  animation: lightingLighter 12s infinite linear;
`;

const MiddlePiece = styled.div`
  position: absolute;
  top: -35px;
  animation: lightingLighter 12s infinite linear;
`;

const BottomPiece = styled.div`
  position: absolute;
  top: -50px;
  animation: lightingLighter 12s infinite linear;
`;

const diamondBottomPieces = [{}, {}, {}, {}, {}, {}, {}, {}];
const diamondTopPieces = [{}, {}, {}, {}, {}, {}, {}, {}];
const diamondMiddlePieces = [{}, {}, {}, {}, {}, {}, {}, {}];

const Regal404 = () => {
  return (
    <Container>
      <DiamondWrap>
        <WrapRotorX>
          <WrapRotorY>
            <WrapRoterZ>
              {diamondTopPieces.map((piece, i) => {
                return (
                  <TopPiece
                    key={i}
                    style={{
                      transform: `translateY(-30px) rotateY(${
                        i * 45
                      }deg) rotateX(-70deg) scaleX(0.14)
                scaleY(.36)`,
                      animationDelay: `${i * 1.5}s`,
                    }}
                  />
                );
              })}
              {diamondMiddlePieces.map((piece, i) => {
                return (
                  <MiddlePiece
                    key={i}
                    style={{
                      transform: `rotateY(${
                        i * 45
                      }deg) translateY(-20px) rotateX(-76deg) scaleX(.24) scaleY(.58)`,
                      animationDelay: `${i * 1.25}s`,
                    }}
                  />
                );
              })}
              {diamondBottomPieces.map((piece, i) => {
                return (
                  <BottomPiece
                    key={i}
                    style={{
                      transform: ` translateY(90px) rotateY(${
                        i * 45
                      }deg) rotateX(35deg) scaleX(0.24)
                    scaleY(-1)`,
                      animationDelay: `${i * 1}s`,
                    }}
                  />
                );
              })}
            </WrapRoterZ>
          </WrapRotorY>
        </WrapRotorX>
      </DiamondWrap>
      <TextWrap>
        <h1>21,000pts</h1>
      </TextWrap>
    </Container>
  );
};

export default Regal404;
