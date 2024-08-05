import React from 'react';
import styled from 'styled-components';
import AnimationOnScroll from '../../components/AnimationOnScroll';
import PortfolioPageTemplate from './PortfolioPageTemplate';

const Wrapper = styled(PortfolioPageTemplate)``;

const Deadpool = () => {
  return (
    <Wrapper>
      {' '}
      <h1>Deadpool & Wolverine</h1>{' '}
      <section>
        <AnimationOnScroll>
          <hr />
          <h2>Deadpool & Wolverine Site Take Over</h2>
          <p>
            With a team of 3, we created a site take over for Deadpool &
            Wolverine. The site take over was created using HTML, CSS, and
            JavaScript. The site take over was created to promote the Deadpool &
            Wolverine movie. The site take over was created to be responsive and
            work on all devices.
          </p>
          <h3>Here's the prototype I created to test the concept</h3>
          <br />
          <a href="/projects/DeadWolf" target="_blank">
            Try It Yourself
          </a>
          <p></p>
          <video controls>
            <source
              src="https://res.cloudinary.com/labofthingsimages/video/upload/v1721916548/Screen_Recording_2024-07-25_at_9.59.29_AM_a164g8.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </AnimationOnScroll>
      </section>
      <section>
        <hr />
        <h2>Deadpool & Wolverine Site waiting page</h2>
        <video controls>
          <source
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1721839859/2024-07-24_11.53.46_njkl1g.gif"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>
    </Wrapper>
  );
};

export default Deadpool;
