import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import Image from 'next/image';
import { getProjectById } from '../../data/portfolioData';

const Wrapper = styled(PortfolioPageTemplate)``;

const FoodPoster = () => {
  const project = getProjectById('food-poster');

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
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263626/Portfolio_Images/foodgirl3_mw5gnm.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263628/Portfolio_Images/foodgirl_xyrs6e.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263627/Portfolio_Images/nike_sp7dns.gif"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263627/Portfolio_Images/bmw_xrxbfg.gif"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263628/Portfolio_Images/google_ilke4l.gif"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263617/Portfolio_Images/foodgirl2_siyjgw.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 750 × 574
        />
      </figure>
    </Wrapper>
  );
};

export default FoodPoster;
