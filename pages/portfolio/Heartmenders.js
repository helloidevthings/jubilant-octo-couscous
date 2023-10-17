import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import { CldImage } from 'next-cloudinary';

const Wrapper = styled(PortfolioPageTemplate)``;

const Heartmenders = () => {
  return (
    <Wrapper>
      <h1>Heartmenders</h1>
      <h2>Problem:</h2>
      <CldImage width="600" height="600" src="heartmenders-purse" />
      <CldImage
        width="600"
        height="600"
        src="5b26bf33363269.56bd325b5424e_it4czj"
      />
    </Wrapper>
  );
};

export default Heartmenders;
