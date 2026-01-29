import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import Image from 'next/image';
import { getProjectById } from '../../data/portfolioData';

const Wrapper = styled(PortfolioPageTemplate)``;

const Fillauer = () => {
  const project = getProjectById('fillauer');

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
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263619/Portfolio_Images/fillaureweb_bbjjes.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 1500 × 1125
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263619/Portfolio_Images/fillaureweb3_ptfriu.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 1500 × 1125
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263619/Portfolio_Images/fillaureweb4_cvhoa5.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 1500 × 1125
        />
        <figcaption></figcaption>
      </figure>
    </Wrapper>
  );
};

export default Fillauer;
