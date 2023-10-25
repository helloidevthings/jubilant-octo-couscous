import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import Image from 'next/image';

const Wrapper = styled(PortfolioPageTemplate)`
  color: #fff;
  h1 {
    font-size: 3rem;
  }
`;

const BourbonBird = () => {
  return (
    <Wrapper>
      <h1>BourbonBird</h1>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263603/Portfolio_Images/bourbonbird2_na8l4c.png"
          alt="Seat map and selection screens"
          width={1500}
          height={1125}
          // 750 × 563
        />
        <figcaption>
          Wireframes of a proposed flow that would show users the seat map for
          each showtime first.
        </figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263626/Portfolio_Images/bourbonbird_cstztv.png"
          alt="Seat map and selection screens"
          width={1500}
          height={1125}
          // 1500 × 1125
        />
        <figcaption>
          Wireframes of a proposed flow that would show users the seat map for
          each showtime first.
        </figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263617/Portfolio_Images/bourboninsp_j7jnnz.png"
          alt="Seat map and selection screens"
          width={1500}
          height={1125}
          // 1500 × 1125
        />
        <figcaption>
          Wireframes of a proposed flow that would show users the seat map for
          each showtime first.
        </figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263605/Portfolio_Images/bourbonbird3_h4qlff.png"
          alt="Seat map and selection screens"
          width={1500}
          height={1125}
          // 1500 × 1125
        />
        <figcaption>
          Wireframes of a proposed flow that would show users the seat map for
          each showtime first.
        </figcaption>
      </figure>
    </Wrapper>
  );
};

export default BourbonBird;
