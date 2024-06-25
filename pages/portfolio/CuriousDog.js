import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import Image from 'next/image';

const Wrapper = styled(PortfolioPageTemplate)``;

const CuriousDog = () => {
  return (
    <Wrapper>
      <h1>CuriousDog</h1>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263602/Portfolio_Images/curiouslogooptions_jgyfao.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
        <figcaption>2015 • Custom Branding for CuriousDog</figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263603/Portfolio_Images/curiousdogmenu_wp4oy0.jpg"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263602/Portfolio_Images/curiousdogsign2_nas2ar.jpg"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263602/Portfolio_Images/curiousdogsign_djrcxd.jpg"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263605/Portfolio_Images/curiousdogillustrations_ol9gkd.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/curiousdog_ylput4.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
      </figure>
    </Wrapper>
  );
};

export default CuriousDog;
