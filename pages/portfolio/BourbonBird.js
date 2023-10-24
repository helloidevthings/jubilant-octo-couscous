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
    </Wrapper>
  );
};

export default BourbonBird;
