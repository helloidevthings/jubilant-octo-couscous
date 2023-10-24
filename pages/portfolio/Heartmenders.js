import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import { CldImage } from 'next-cloudinary';

const Wrapper = styled(PortfolioPageTemplate)``;

const Heartmenders = () => {
  return (
    <Wrapper>
      <h1>Heartmenders</h1>
      <h2>Problem:</h2>
    </Wrapper>
  );
};

export default Heartmenders;
