import styled from 'styled-components';
import Image from 'next/image';
import PortfolioPageTemplate from './PortfolioPageTemplate';

const Wrapper = styled(PortfolioPageTemplate)``;

const DataVisualization = () => {
  return (
    <Wrapper>
      <h1>DataVisualization</h1>
      <img
        src="https://res.cloudinary.com/labofthingsimages/image/upload/v1678908929/Portfolio_Images/Screen_Shot_2023-03-15_at_3.34.41_PM_kp1c2t.png"
        alt="Image of a guy using a VR headset in a living room with a cat"
      />
    </Wrapper>
  );
};

export default DataVisualization;
