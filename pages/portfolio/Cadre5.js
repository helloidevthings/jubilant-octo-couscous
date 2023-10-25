import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import Image from 'next/image';

const Wrapper = styled(PortfolioPageTemplate)``;

const Cadre5 = () => {
  return (
    <Wrapper>
      <section>
        <h1>Cadre5</h1>
        <h2>Project Brief:</h2>
        <h3>
          Create a new site for Cadre5 using React to showcase their portfolio.
        </h3>
        <p>
          Cadre5 is a software companie that creates custom applications for
          goverment or security companies.
        </p>
        <p>
          While working at Cadre5 I designed and devleoped their website and
          extended their brand to include illustrations and data visualization
          diagrams.
        </p>
      </section>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/cadre5home_kwsufj.png"
          alt="Homepage graphic"
          width={1509}
          height={1020}
          // 1509 × 1020
        />
        <figcaption>
          This is a screenshot of their homepage. I used subtle animations to
          create movement and intrigue on the page. Without being too
          distracting.
        </figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/cadre5site_cwcnog.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 1263 × 927
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/cadre5illustrations_bydepv.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 2488 × 1108
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263620/Portfolio_Images/cadre5404_i1v8b9.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 2600 × 1602
        />
        <figcaption></figcaption>
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1691263606/Portfolio_Images/cadre5infographic_dbxo2u.png"
          alt="Seat map and selection screens"
          width={1796}
          height={1218}
          // 2600 × 1602
        />
        <figcaption></figcaption>
      </figure>
    </Wrapper>
  );
};

export default Cadre5;
