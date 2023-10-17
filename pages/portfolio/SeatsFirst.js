import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import { CldImage } from 'next-cloudinary';

const Wrapper = styled(PortfolioPageTemplate)`
  background: #f5f5f5;
`;

const SeatsFirst = () => {
  return (
    <Wrapper>
      <section>
        <h1>SeatsFirst</h1>
        <h2>Problem:</h2>
        <p>
          Our ticketing system makes you select your ticket type before
          selecting a seat. It makes the process longer and can be confusing.
        </p>
        <h2>Solution:</h2>
        <p>
          By moving the flow into accordions we can make the process seem
          shorter. Also, by showing the user the seat map first we can help the
          user determine what show they want to see.
        </p>
      </section>
      <section>
        <h2>We performed 2 User Tests</h2>
        <p>
          The first test was an un-branded version without users that knew the
          product.
        </p>
        <p>The second test was a branded version we sent to our own users.</p>
      </section>
      <section>
        <img
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1690849624/Screen_Shot_2023-07-31_at_8.26.42_PM_ml2fc1.png"
          alt="Image of SeatsFirst"
        />
        <CldImage width="600" height="600" src="MVIMG_20200319_114136_ogoior" />
      </section>
    </Wrapper>
  );
};

export default SeatsFirst;
