import styled from 'styled-components';
import PortfolioPageTemplate from './PortfolioPageTemplate';
import Image from 'next/image';
import AnimationOnScroll from '../../components/AnimationOnScroll';

const Wrapper = styled(PortfolioPageTemplate)``;

const Heading = styled.h1`
  width: 8ch;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1.5;
  border-right: 3px solid #555;
  animation:
    2s steps(15) 0s 1 normal none running typing,
    0.5s step-end 0s infinite alternate none running effect;

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes effect {
    50% {
      border-color: transparent;
    }
  }
`;

const Heading2 = styled.h2`
  display: inline-block;
  position: relative;
  /* margin-bottom: 0.5rem; */

  &:after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #999;
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 0.5s ease-in-out;
  }
`;

const SeatsFirst = () => {
  return (
    <Wrapper>
      <section>
        <AnimationOnScroll>
          <Heading>Seats First</Heading>
          <hr />
          <Heading2 className="scaleAfter">Problem:</Heading2>
          <h3>
            The current flow for buying tickets is too long and confusing.
          </h3>
          <p>
            Our marketing team found that we were losing a lot of customers
            during our booking flow on our app. This was due to the fact that
            our flow was too long and confusing.
          </p>
          <p>
            We also found that a lot of our users were leaving because of
            crowded theatres.
          </p>
          <Heading2 className="scaleAfter">Solution:</Heading2>
          <h3>
            Create a new flow that shows the seatmap first and combines to
            screens to make the process faster.
          </h3>
          <p>
            I created a user test with three different flows to see which flow
            users preferred.
          </p>
          <p>
            I used a non-branded approach to try to stay away from any brand
            loyalty biases.
          </p>
        </AnimationOnScroll>
      </section>
      <AnimationOnScroll>
        <figure>
          <Image
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698253361/Portfolio_Images/wireframe-for-new-flow_dvqjnr.png"
            alt="Seat map and selection screens"
            width={1796}
            height={1218}
            // 1796 × 1218
          />
          <figcaption style={{ transitionDelay: '.4s' }}>
            Wireframes of a proposed flow that would show users the seat map for
            each showtime first.
          </figcaption>
        </figure>
      </AnimationOnScroll>
      <AnimationOnScroll>
        <section>
          <Heading2 className="scaleAfter">Current Flow</Heading2>
          <h3>Users select seats and Tickets</h3>
          <p>
            Users select their tickets and their seats separately, which takes
            more steps to complete. Also, the process becomes more complicated
            when a user has discounted tickets.
          </p>
        </section>
      </AnimationOnScroll>
      <AnimationOnScroll>
        <figure className="zoomUp">
          <Image
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698178500/Portfolio_Images/current-flow_m85dur.png"
            alt="Current flow for buying tickets"
            width={3280}
            height={1246}
            className="colorFade"
            // 3280 × 1246
          />
          <figcaption className="fadeUp" style={{ transitionDelay: '.4s' }}>
            {' '}
            Currently it takes a lot longer for users to complete the flow.
          </figcaption>
        </figure>
      </AnimationOnScroll>
      <hr />
      <section>
        <AnimationOnScroll>
          <Heading2 className="scaleAfter">New flow</Heading2>
        </AnimationOnScroll>
        <h3>Users select seats and Tickets</h3>
        <p>
          By combining these two screens it should make it easier for the user
          to complete the flow.
        </p>
      </section>
      <AnimationOnScroll>
        <figure className="zoomUp">
          <Image
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698177811/Portfolio_Images/newflow_gb1off.png"
            alt="New flow for buying tickets"
            width={2690}
            height={1694}
            className="colorFade"
            // 2536 × 864
          />
          <figcaption className="fadeUp" style={{ transitionDelay: '.4s' }}>
            The idea is to combine two of the screens, hopefully making the
            process more conscise.
          </figcaption>
        </figure>
      </AnimationOnScroll>
      <section>
        <AnimationOnScroll>
          <Heading2 className="scaleAfter">User Testing</Heading2>
        </AnimationOnScroll>
        <h3>I set up three different flows for our testsers</h3>
        <hr />
        <h4>I tested 3 different flows:</h4>
        <ul>
          <li>Current Flow - The same as what we currently have</li>
          <li>
            Seats First - Showing the seat map first and giving the user the
            ability to change showtimes and preview different stadiums before
            choosing tickets.
          </li>
          <li>
            Seats First Accordion - Same as Seats First but with an accordion.
          </li>
        </ul>
      </section>
      <AnimationOnScroll>
        <figure>
          <Image
            cloudName="labofthingsimages"
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698177990/Portfolio_Images/current-flow-ui_wiivqg.png"
            alt="current flow ui"
            width={1840}
            height={1416}
            className="colorFade"
            // 1840 × 1416
          />
          <figcaption>
            This is the current flow, the user chooses their ticket types, then
            their seat and pays for their tickets.
          </figcaption>
        </figure>
      </AnimationOnScroll>
      <AnimationOnScroll>
        <figure>
          <Image
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698178210/Portfolio_Images/new-flow_dr7pkf.png"
            alt="current flow ui"
            width={1840}
            height={1416}
            className="colorFade"
            // 1840 × 1416
          />
          <figcaption>
            This is the seats first flow, the user chooses their seat, then
            their ticket type and pays for their tickets.
          </figcaption>
        </figure>
      </AnimationOnScroll>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698178211/Portfolio_Images/new-flow-accordion_cyjxhv.png"
          alt="seats first accordion flow ui"
          width={1840}
          height={1416}
          className="colorFade"
          // 1840 × 1416
        />
        <figcaption>
          This is the seats first accordion flow, it's the same flow, however we
          are using an accordin. The idea was to see if the accordion would
          reduce the time it takes to complete screens.
        </figcaption>
      </figure>
      <section>
        <AnimationOnScroll>
          <Heading2 className="scaleAfter">Results</Heading2>
        </AnimationOnScroll>
        <h3>Users favored Seats First</h3>
        <p>
          Ultimately we found that our users preferred seeing the seatmaps
          first. However, we also found that our users were confused by having
          to select your ticket type after choosing your seat.
        </p>
      </section>
      <AnimationOnScroll>
        <figure className="zoomUp">
          <Image
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698178420/Portfolio_Images/summary-responses_tpeklk.png"
            alt="Results leaning towards the new flow"
            width={1840}
            height={1416}
            // 1840 × 1416
          />
        </figure>
      </AnimationOnScroll>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698178373/Portfolio_Images/preferred-flows_i7y2md.png"
          alt="Results leaning towards the new flow"
          width={1500}
          height={1336}
          // 2158 × 1336
        />
      </figure>
      <hr />
      <section>
        <AnimationOnScroll>
          <Heading2 className="scaleAfter">New Problems</Heading2>
        </AnimationOnScroll>
        <h3>Users don't distinguish between "seats" and "tickets"</h3>
        <p>
          The next test would be to see if users will be confused by changing
          out ticket types.
        </p>
      </section>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1702002316/Screenshot_2023-12-07_at_9.24.13_PM_csball.png"
          alt="Results leaning towards the new flow"
          width={900}
          height={900}
          // 1840 × 1416
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1702002748/Screenshot_2023-12-07_at_9.32.19_PM_hzvbln.png"
          alt="Results leaning towards the new flow"
          width={900}
          height={900}
          // 1840 × 1416
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1702003201/Screenshot_2023-12-07_at_9.39.07_PM_e5kerj.png"
          alt="Results leaning towards the new flow"
          width={1300}
          height={900}
          // 1840 × 1416
        />
      </figure>
      <figure>
        <Image
          src="https://res.cloudinary.com/labofthingsimages/image/upload/v1702003870/Screenshot_2023-12-07_at_9.50.49_PM_u0hkh0.png"
          alt="Results leaning towards the new flow"
          width={1300}
          height={900}
          // 1840 × 1416
        />
      </figure>
    </Wrapper>
  );
};

export default SeatsFirst;
