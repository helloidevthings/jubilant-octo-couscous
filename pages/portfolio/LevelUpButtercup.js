import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import Image from 'next/image';
import { getProjectById } from '../../data/portfolioData';

const Wrapper = styled(PortfolioPageTemplate)``;

const LevelUpButtercup = () => {
  const project = getProjectById('level-up-buttercup');

  return (
    <Wrapper
      projectBrief={{
        title: project.title,
        description: project.description,
        date: project.date,
        tags: project.tag,
        color: project.color,
      }}
    >
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263603/Portfolio_Images/buttercuplogo_viqyda.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
        <figcaption>
          2018 • All Ladies D&D Group! Custom branding, illustration and
          animations.
        </figcaption>
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
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263626/Portfolio_Images/buttercupshirt_wbhght.png"
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
      </figure>
    </Wrapper>
  );
};

export default LevelUpButtercup;
