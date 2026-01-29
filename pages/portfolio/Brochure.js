import styled from 'styled-components';
import Image from 'next/image';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import { getProjectById } from '../../data/portfolioData';

const Wrapper = styled(PortfolioPageTemplate)``;

const Brochure = () => {
  const project = getProjectById('brochure');

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
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263602/Portfolio_Images/brochurch6_qu4cwb.jpg"
          alt="Seat map and selection screens"
          width={921}
          height={800}
          // 921 × 594
        />
        <figcaption>
          2012 • Custom Illustration for a brochure for Cleveland State College
        </figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263604/Portfolio_Images/brocure1_lgcifr.jpg"
          alt="Seat map and selection screens"
          width={921}
          height={594}
          // 921 × 594
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263604/Portfolio_Images/brocure4_c3nqlj.jpg"
          alt="Seat map and selection screens"
          width={921}
          height={594}
          // 921 × 594
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263604/Portfolio_Images/brochure5_coljdh.jpg"
          alt="Seat map and selection screens"
          width={921}
          height={594}
          // 921 × 594
        />
      </figure>
    </Wrapper>
  );
};

export default Brochure;
