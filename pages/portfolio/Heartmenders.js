import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import Image from 'next/image';

const Wrapper = styled(PortfolioPageTemplate)``;

const Heartmenders = () => {
  return (
    <Wrapper>
      <h1>Heartmenders</h1>
      <h2>Problem:</h2>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263603/Portfolio_Images/heartmenderssketches_x1jkjn.jpg"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 1500 × 1125
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263603/Portfolio_Images/heartmenders6_kklk53.jpg"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 600 × 1071
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263603/Portfolio_Images/heartmenderspurse_pdmeb1.jpg"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 600 × 1071
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/heartmenders2_cplcxd.jpg"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 600 × 1071
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/heartmenders2_cplcxd.jpg"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 600 × 1071
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/heartmenders3_zw8wbt.jpg"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 600 × 1071
        />
        <figcaption></figcaption>
      </figure>
    </Wrapper>
  );
};

export default Heartmenders;
