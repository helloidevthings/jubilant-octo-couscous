import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';

const Wrapper = styled(PortfolioPageTemplate)`
  color: #fff;
  h1 {
    font-size: 3rem;
  }
`;

const BourbonBird = () => {
  return (
    <Wrapper>
      <h1>BourbonBird</h1>
      <img src="https://res.cloudinary.com/labofthingsimages/image/upload/v1670295204/Portfolio_Images/7d735d55219983.597b2c24b5436_1_wdct5w.png" />
    </Wrapper>
  );
};

export default BourbonBird;
