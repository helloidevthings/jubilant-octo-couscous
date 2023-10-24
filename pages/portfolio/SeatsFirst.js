import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import { CldImage } from 'next-cloudinary';

const Wrapper = styled(PortfolioPageTemplate)``;

const SeatsFirst = () => {
  return (
    <Wrapper>
      <section>
        <h1>SeatsFirst</h1>
        <hr />
        <h2>Problem:</h2>
        <h3>The current flow for buying tickets is too long and confusing.</h3>
        <br />
        <h2>Solution:</h2>
        <h3>
          Create a new flow that allows users to buy tickets in 3 steps or less.
        </h3>
      </section>
      <section>
        <p>
          hello Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <CldImage
        src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698173907/Portfolio_Images/Screen_Shot_2023-10-24_at_2.57.55_PM_znddkb.png"
        alt="Seat map and selection screens"
        width={2690}
        height={1694}
        // 2690 × 1694
      />
      <div className="twoCol">
        <figure></figure>
      </div>
    </Wrapper>
  );
};

export default SeatsFirst;
