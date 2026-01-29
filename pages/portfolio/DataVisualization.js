import styled from 'styled-components';
import Image from 'next/image';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import { getProjectById } from '../../data/portfolioData';

const Wrapper = styled(PortfolioPageTemplate)``;

const DataVisualization = () => {
  const project = getProjectById('data-visualization');

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
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263617/Portfolio_Images/cadre5illustrators_jydm1q.png"
          alt="Seat map and selection screens"
          width={921}
          height={594}
          // 921 × 594
        />
        <figcaption>
          Illustrations for a data visualization explaning software features
        </figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/cadre5infographic_dbxo2u.png"
          alt="Seat map and selection screens"
          width={921}
          height={594}
          // 921 × 594
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/cadre5illustrations_bydepv.png"
          alt="Seat map and selection screens"
          width={921}
          height={594}
          // 921 × 594
        />
      </figure>
    </Wrapper>
  );
};

export default DataVisualization;
