import styled from 'styled-components';
import Image from 'next/image';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import { getProjectById } from '../../data/portfolioData';

const Wrapper = styled(PortfolioPageTemplate)``;

const Cadre5404 = () => {
  const project = getProjectById('cadre5-404');

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
