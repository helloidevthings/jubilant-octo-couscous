import styled from 'styled-components';
import Popcorn3D from '../../components/Popcorn3D';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #1a191d;
  background-size: cover;
  padding: 1rem;
  overflow: hidden;
  background: url('https://res.cloudinary.com/labofthingsimages/image/upload/v1714142189/background_yk2ucj.png')
    no-repeat;
  background-size: cover;
`;

const TextWrap = styled.section`
  margin: 0 auto;
  text-align: center;
  max-width: 800px;
  color: white;
  font-family: 'Exo';
  font-style: italic;
  font-weight: bold;

  h1 {
    font-size: 3rem;
    line-height: 1.25;
  }
`;

const RegalPopcorn3D = () => {
  return (
    <Container>
      <Popcorn3D />
      <TextWrap>
        <h1>We're Working On Your Order</h1>
        {/* <h3>3D Popcorn Animation</h3>
        <p>
          A 3D animation of popcorn popping in a box. Created using Cinema 4D.
        </p> */}
      </TextWrap>
    </Container>
  );
};

export default RegalPopcorn3D;
