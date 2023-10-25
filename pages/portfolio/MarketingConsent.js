import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import Image from 'next/image';

const Wrapper = styled(PortfolioPageTemplate)``;

const MarketingConsent = () => {
  return (
    <Wrapper>
      <h1>MarketingConsent</h1>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/booking1_mivbma.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 1500 × 1002
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263605/Portfolio_Images/booking2_zhipb9.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 1500 × 1002
        />
        <figcaption></figcaption>
      </figure>
    </Wrapper>
  );
};

export default MarketingConsent;
