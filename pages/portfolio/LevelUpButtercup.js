import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import Image from 'next/image';

const Wrapper = styled(PortfolioPageTemplate)``;

const LevelUpButtercup = () => {
  return (
    <Wrapper>
      <h1>LevelUpButtercup</h1>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263603/Portfolio_Images/buttercuplogo_viqyda.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/levelupbuttercupillustrations_frudg2.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263617/Portfolio_Images/instagramshot_tczdhr.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263618/Portfolio_Images/levelupbuttercuplogoainmation_cvfbz6.gif"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
        <figcaption></figcaption>
      </figure>
    </Wrapper>
  );
};

export default LevelUpButtercup;
