import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;

  img {
    max-width: 300px;
    height: auto;
  }
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const RegalDrinks = () => {
  return (
    <>
      <PageTitle>Regal Drinks</PageTitle>
      <Wrapper>
        <Image
          // fill="true"
          // sizes="(max-width: 600px) 500px,
          //         200px"
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698344753/Regal/beer_hg87ay.png"
          alt="photo of beer"
          width={780}
          height={842}
        />
      </Wrapper>
    </>
  );
};

export default RegalDrinks;
