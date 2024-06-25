import styled from 'styled-components';
import Image from 'next/image';
import PortfolioPageTemplate from './PortfolioPageTemplate';

const Wrapper = styled(PortfolioPageTemplate)``;

const Cadre5404 = () => {
  return (
    <Wrapper>
      <h1>Cadre5 404</h1>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263620/Portfolio_Images/cadre5404_i1v8b9.png"
          alt="Seat map and selection screens"
          width={921}
          height={594}
          // 921 × 594
        />
        <figcaption>Custom illustration for a 404 page</figcaption>
      </figure>
    </Wrapper>
  );
};

export default Cadre5404;
